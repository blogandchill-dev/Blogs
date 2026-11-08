import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Site } from './db.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../../../prompts');

function read(rel: string): string | null {
  const p = path.join(root, rel);
  return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null;
}

/** Voice profile: the site's markdown file if it exists, else a rendering of the DB json. */
export function voiceFor(site: Site): string {
  const md = read(`${site.slug}/voice.md`);
  if (md) return md;
  const v = site.voice_profile as Record<string, unknown>;
  const lines = [`# ${site.name} — voice profile (from site row)`];
  for (const [k, val] of Object.entries(v)) {
    lines.push(`- ${k}: ${Array.isArray(val) ? val.join('; ') : String(val)}`);
  }
  return lines.join('\n');
}

/** The cached system prompt: identical for every post on a site, so it caches across the run. */
export function writerSystem(site: Site): string {
  const tpl = read('shared/writer-system.md');
  if (!tpl) throw new Error('packages/prompts/shared/writer-system.md missing');
  return tpl
    .replaceAll('{{SITE_NAME}}', site.name)
    .replaceAll('{{SITE_DOMAIN}}', site.domain)
    .replaceAll('{{YEAR}}', String(new Date().getFullYear()))
    .replaceAll('{{VOICE}}', voiceFor(site));
}

/** Per-type outline guidance; site override wins over shared. */
export function outlineGuide(site: Site, type: string): string {
  return read(`${site.slug}/outline-${type}.md`) ?? read(`shared/outline-${type}.md`) ?? '';
}
