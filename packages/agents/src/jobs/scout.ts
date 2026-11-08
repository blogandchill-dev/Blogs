import slugify from 'slugify';
import { db, getSite, startRun, finishRun, type Cluster } from '../lib/db.js';

/**
 * Scout v1: expand each active cluster's variations into `idea` posts, then promote
 * the top N to `queued` by cluster priority. Demand/gap scoring from Search Console
 * and Pinterest Trends plugs into `scores` later without changing the shape.
 */
export async function scout(siteSlug: string, opts: { promote: number }) {
  const site = await getSite(siteSlug);
  const runId = await startRun('scout', site.id);
  const errors: unknown[] = [];
  let created = 0, promoted = 0;

  try {
    const { data: clusters, error } = await db.from('clusters').select('*')
      .eq('site_id', site.id).eq('active', true).order('priority');
    if (error) throw error;

    const { data: existing } = await db.from('posts').select('keyword').eq('site_id', site.id);
    const have = new Set((existing ?? []).map(p => p.keyword.toLowerCase()));

    for (const c of (clusters ?? []) as Cluster[]) {
      for (const v of c.variations) {
        const keyword = c.loop_phrase.replace('{variation}', v).toLowerCase();
        if (have.has(keyword)) continue;
        const slug = slugify(keyword, { lower: true, strict: true });
        const { error: insErr } = await db.from('posts').insert({
          site_id: site.id, cluster_id: c.id, slug, title: keyword, type: c.post_type,
          status: 'idea', keyword, scores: { priority: c.priority, phase: c.phase },
        });
        if (insErr) { errors.push({ keyword, error: insErr.message }); continue; }
        have.add(keyword); created++;
      }
    }

    if (opts.promote > 0) {
      const { data: ideas } = await db.from('posts')
        .select('id, scores').eq('site_id', site.id).eq('status', 'idea')
        .order('created_at').limit(200);
      const ranked = (ideas ?? []).sort((a, b) =>
        ((a.scores as any)?.priority ?? 999) - ((b.scores as any)?.priority ?? 999));
      const ids = ranked.slice(0, opts.promote).map(p => p.id);
      if (ids.length) {
        const { error: upErr } = await db.from('posts').update({ status: 'queued' }).in('id', ids);
        if (upErr) throw upErr; promoted = ids.length;
      }
    }
  } catch (e) {
    errors.push(String(e));
  }

  await finishRun(runId, created + promoted, errors, { created, promoted });
  return { created, promoted, errors };
}
