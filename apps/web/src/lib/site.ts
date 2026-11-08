import { supabase } from './supabase';

export type Tokens = {
  font_display: string; font_ui: string; font_hand?: string;
  paper: string; ink: string; muted: string; line: string;
  accent: string; accent_ink: string; info: string; info_tint: string;
  sand: string; warn_tint: string; warn_ink: string;
  radius_sm: string; radius: string; radius_lg: string;
};
export type NavItem = { label: string; href: string; blurb?: string; clusters?: string[] };
export type Site = {
  id: string; slug: string; name: string; domain: string; tagline: string | null;
  layout_variant: string; design_tokens: Tokens;
  niche_plan: { nav?: NavItem[]; cta?: NavItem; [k: string]: unknown };
  voice_profile: Record<string, unknown>;
};
export type Author = { id: string; slug: string; name: string; bio: string | null; photo_url: string | null; is_editor: boolean };
export type Block =
  | { type: 'h2'; text: string } | { type: 'h3'; text: string } | { type: 'p'; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'callout'; label: string; text: string }
  | { type: 'image_slot'; prompt: string; alt: string; caption: string | null; image_id?: string | null; src?: string | null };
export type Post = {
  id: string; slug: string; title: string; type: 'ideas' | 'howto' | 'bestof' | 'editorial' | 'recipe';
  excerpt: string | null; body: Block[] | null; outline: any; keyword: string;
  published_at: string | null; updated_at: string; hero_image_id: string | null;
  author_id: string | null; cluster_id: string | null; meta: Record<string, unknown>;
};

const slug = import.meta.env.SITE_SLUG ?? process.env.SITE_SLUG;
if (!slug) throw new Error('SITE_SLUG is required');

let cached: Site | null = null;
export async function getSite(): Promise<Site> {
  if (cached) return cached;
  const { data, error } = await supabase.from('sites').select('*').eq('slug', slug).single();
  if (error || !data) throw new Error(`site ${slug} not found: ${error?.message}`);
  cached = data as Site;
  return cached;
}

export async function getAuthors(): Promise<Author[]> {
  const site = await getSite();
  const { data } = await supabase.from('authors').select('*').eq('site_id', site.id);
  return (data ?? []) as Author[];
}

const POST_COLS = 'id, slug, title, type, excerpt, body, outline, keyword, published_at, updated_at, hero_image_id, author_id, cluster_id, meta';

export async function getPublishedPosts(limit = 60): Promise<Post[]> {
  const site = await getSite();
  const { data, error } = await supabase.from('posts').select(POST_COLS)
    .eq('site_id', site.id).order('published_at', { ascending: false }).limit(limit);
  if (error) throw error;
  return (data ?? []) as Post[];
}

export async function getPost(postSlug: string): Promise<Post | null> {
  const site = await getSite();
  const { data } = await supabase.from('posts').select(POST_COLS)
    .eq('site_id', site.id).eq('slug', postSlug).maybeSingle();
  return (data as Post) ?? null;
}

export async function getClusters(): Promise<{ id: string; name: string; funnel_stage: string }[]> {
  const site = await getSite();
  const { data } = await supabase.from('clusters').select('id, name, funnel_stage').eq('site_id', site.id);
  return data ?? [];
}

export async function getAffiliateLinks(): Promise<{ slug: string; url: string }[]> {
  const site = await getSite();
  const { data } = await supabase.from('affiliate_links').select('slug, url').eq('site_id', site.id);
  return data ?? [];
}

/** Stable sand-toned placeholder until the imager fills the slot. */
export function placeholderTone(i: number) {
  const tones = ['#D8D1C4', '#C9C1B2', '#BDB5A5', '#E3DCD0'];
  return tones[i % tones.length];
}

export function readMinutes(blocks: Block[] | null) {
  if (!blocks) return 1;
  const words = blocks.reduce((n, b) => {
    if ('text' in b) return n + b.text.split(/\s+/).length;
    if (b.type === 'list') return n + b.items.join(' ').split(/\s+/).length;
    return n;
  }, 0);
  return Math.max(1, Math.round(words / 230));
}

export function typeLabel(t: Post['type']) {
  return { ideas: 'Ideas', howto: 'Sizing guide', bestof: 'Buying guide', editorial: 'Editorial', recipe: 'Recipe' }[t];
}
