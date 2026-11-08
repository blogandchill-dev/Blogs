import { db, getSite, startRun, finishRun, type Post, type Site, type Cluster } from '../lib/db.js';
import { generate, Meter } from '../lib/llm.js';
import { writerSystem, outlineGuide } from '../lib/prompts.js';
import { Outline, Draft, StyleReport, plainText, wordCount, type Block } from '../lib/content.js';

const STYLE_PUBLISH = 85;   // at or above: clean
const STYLE_REWRITE = 70;   // below: one rewrite; if still below, flag for a human

type Sibling = { slug: string; title: string; type: string; status: string };

/**
 * Writer: queued → drafting → review.
 * outline → draft → style check → (rewrite once) → save with internal-link candidates.
 * One post per iteration; idempotent — a crash leaves the row in `drafting` and the next run picks it up.
 */
export async function writer(siteSlug: string, opts: { limit: number }) {
  const site = await getSite(siteSlug);
  const runId = await startRun('writer', site.id);
  const meter = new Meter();
  const errors: unknown[] = [];
  const done: string[] = [];
  const system = writerSystem(site);

  try {
    const { data: queue, error } = await db.from('posts').select('*')
      .eq('site_id', site.id).in('status', ['queued', 'drafting'])
      .order('status', { ascending: false }) // drafting first (resume), then queued
      .order('created_at').limit(opts.limit);
    if (error) throw error;

    for (const post of (queue ?? []) as Post[]) {
      try {
        await db.from('posts').update({ status: 'drafting' }).eq('id', post.id);
        const result = await writeOne(site, post, system, meter);
        done.push(`${result.slug} (${result.words}w, style ${result.style})`);
      } catch (e) {
        errors.push({ post: post.keyword, error: String(e) });
        await db.from('posts').update({ status: 'queued', meta: { ...post.meta, last_error: String(e) } }).eq('id', post.id);
      }
    }
  } catch (e) {
    errors.push(String(e));
  }

  await finishRun(runId, done.length, errors, { done, ...meter.summary() });
  return { done, errors, cost: meter.summary() };
}

async function writeOne(site: Site, post: Post, system: string, meter: Meter) {
  const { data: cluster } = post.cluster_id
    ? await db.from('clusters').select('*').eq('id', post.cluster_id).single()
    : { data: null };
  const c = cluster as Cluster | null;

  // Siblings: what else exists in this cluster (for distinct intent + internal links).
  const { data: sibs } = await db.from('posts').select('slug, title, type, status')
    .eq('site_id', site.id).neq('id', post.id)
    .in('status', ['review', 'approved', 'scheduled', 'published', 'pinned', 'monitoring', 'refresh'])
    .order('created_at', { ascending: false }).limit(60);
  const siblings = (sibs ?? []) as Sibling[];
  const sameCluster = c
    ? siblings.filter(s => s.title.toLowerCase().includes(c.name.split(' ')[0].toLowerCase()))
    : [];

  const guide = outlineGuide(site, post.type);

  // 1. Outline
  const outline = await generate(Outline, {
    system, meter, effort: 'medium',
    user: [
      `Target keyword: "${post.keyword}"`,
      `Post type: ${post.type}${c ? ` · cluster: "${c.name}" (${c.funnel_stage} of funnel)` : ''}`,
      guide ? `\nOutline guidance for this post type:\n${guide}` : '',
      siblings.length
        ? `\nPosts that already exist on the site (make this one's intent clearly distinct; do not repeat their angles):\n${siblings.slice(0, 25).map(s => `- ${s.title}`).join('\n')}`
        : '\nThis is one of the first posts on the site.',
      `\nProduce the outline.`,
    ].join('\n'),
  });

  // 2. Draft
  let draft = await generate(Draft, {
    system, meter, effort: 'high', maxTokens: 24000,
    user: [
      `Write the full post from this outline. Target keyword: "${post.keyword}".`,
      `Length: ${lengthFor(post.type)}. Each section in the outline becomes an H2 followed by its paragraphs; where image is true, add exactly one image_slot block right after the H2.`,
      `Open with the opening verdict as the first paragraph. Include the skip section and FAQ (as H2 "What to skip" and H3 questions) if the outline has them.`,
      `\nOutline:\n${JSON.stringify(outline, null, 2)}`,
    ].join('\n'),
  });

  // 3. Style check (and one rewrite if needed)
  let report = await styleCheck(system, draft, meter);
  let rewrites = 0;
  if (report.score < STYLE_REWRITE || report.verdict === 'rewrite') {
    rewrites = 1;
    draft = await generate(Draft, {
      system, meter, effort: 'high', maxTokens: 24000,
      user: [
        `Rewrite this draft to fix every violation below. Keep the structure, headings and image_slot blocks; change the prose.`,
        `\nViolations:\n${JSON.stringify({ banned: report.banned_words_found, violations: report.violations, missing: report.missing }, null, 2)}`,
        `\nDraft:\n${JSON.stringify(draft, null, 2)}`,
      ].join('\n'),
    });
    report = await styleCheck(system, draft, meter);
  }

  const flagged = report.score < STYLE_REWRITE;
  const words = wordCount(draft.blocks as Block[]);
  const linkCandidates = {
    cluster: sameCluster.slice(0, 3).map(s => s.slug),
    funnel: siblings.filter(s => s.type === 'howto' || s.type === 'bestof').slice(0, 1).map(s => s.slug),
  };

  const { error } = await db.from('posts').update({
    status: 'review',
    title: draft.title,
    slug: post.slug, // slug fixed at scout time so links never break
    intent: outline.search_intent,
    outline,
    body: draft.blocks,
    excerpt: draft.excerpt,
    style_score: report.score,
    meta: {
      ...post.meta,
      words, rewrites, flagged,
      style_report: report,
      link_candidates: linkCandidates,
      image_slots: (draft.blocks as Block[]).filter(b => b.type === 'image_slot').length,
      model: process.env.WRITER_MODEL ?? 'claude-opus-5-5',
      last_error: null,
    },
  }).eq('id', post.id);
  if (error) throw error;

  return { slug: post.slug, words, style: report.score };
}

async function styleCheck(system: string, draft: Draft, meter: Meter) {
  return generate(StyleReport, {
    system, meter, effort: 'low',
    user: [
      `You are now the site's editor. Score this draft strictly against the voice profile in your instructions.`,
      `Check: banned words (list every occurrence), opening verdict present, dimensions in every section, budget option first, rental-friendly mentioned, a what-to-skip element, no rhetorical-question openers, no adjective triplets, headings specific.`,
      `\nDraft:\n${plainText(draft.blocks as Block[])}`,
    ].join('\n'),
  });
}

function lengthFor(type: string) {
  switch (type) {
    case 'ideas': return '1,100–1,600 words, 12–20 items';
    case 'howto': return '1,500–2,200 words';
    case 'bestof': return '1,800–2,600 words, 5–8 products';
    case 'editorial': return '800–1,300 words';
    case 'recipe': return '600–900 words plus the recipe';
    default: return '1,200 words';
  }
}
