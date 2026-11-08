import { supabase } from './supabase';

export type DesignTokens = {
  font_heading: string; font_body: string;
  bg: string; fg: string; accent: string; accent_2: string; radius: string;
};
export type Site = {
  id: string; slug: string; name: string; domain: string; tagline: string | null;
  layout_variant: string; design_tokens: DesignTokens; voice_profile: Record<string, unknown>;
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

export async function getPublishedPosts(limit = 50) {
  const site = await getSite();
  const { data, error } = await supabase
    .from('posts')
    .select('id, slug, title, type, excerpt, published_at, hero_image_id')
    .eq('site_id', site.id)
    .order('published_at', { ascending: false })
    .limit(limit);
  if (error) throw error;
  return data ?? [];
}
