import type { APIRoute } from 'astro';
import { getSite, getPublishedPosts } from '../lib/site';

const esc = (s: string) => s.replace(/[<>&'"]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[c]!));

export const GET: APIRoute = async () => {
  const site = await getSite();
  const posts = await getPublishedPosts(50);
  const base = `https://${site.domain}`;
  const items = posts.map(p => `
    <item>
      <title>${esc(p.title)}</title>
      <link>${base}/${p.slug}</link>
      <guid>${base}/${p.slug}</guid>
      ${p.published_at ? `<pubDate>${new Date(p.published_at).toUTCString()}</pubDate>` : ''}
      ${p.excerpt ? `<description>${esc(p.excerpt)}</description>` : ''}
    </item>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
  <title>${esc(site.name)}</title>
  <link>${base}</link>
  <description>${esc(site.tagline ?? site.name)}</description>
  <language>en-us</language>${items}
</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
