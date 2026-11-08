import type { APIRoute } from 'astro';
import { getAffiliateLinks } from '../lib/site';

// Cloudflare reads dist/_redirects. Affiliate links are cloaked at /go/{slug}.
export const GET: APIRoute = async () => {
  const links = await getAffiliateLinks();
  const lines = links.map(l => `/go/${l.slug} ${l.url} 302`);
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain' } });
};
