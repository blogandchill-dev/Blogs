import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// One build per site. SITE_SLUG picks the row in `sites`; SITE_URL sets canonical URLs.
export default defineConfig({
  site: process.env.SITE_URL ?? 'http://localhost:4321',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap({ filter: p => !p.includes('/preview') })],
});
