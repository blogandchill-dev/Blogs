#!/usr/bin/env tsx
import { parseArgs } from 'node:util';
import { scout } from './jobs/scout.js';
import { writer } from './jobs/writer.js';

const { positionals, values } = parseArgs({
  allowPositionals: true,
  options: {
    site: { type: 'string', short: 's' },
    limit: { type: 'string', short: 'n', default: '1' },
    promote: { type: 'string', short: 'p', default: '0' },
  },
});

const job = positionals[0];
const site = values.site;
if (!job || !site) {
  console.error('usage: pnpm agents run <scout|writer> --site <slug> [--limit n] [--promote n]');
  process.exit(1);
}

const t0 = Date.now();
let out: unknown;
switch (job) {
  case 'scout': out = await scout(site, { promote: Number(values.promote) }); break;
  case 'writer': out = await writer(site, { limit: Number(values.limit) }); break;
  default: console.error(`unknown job: ${job}`); process.exit(1);
}
console.log(JSON.stringify(out, null, 2));
console.log(`\n${job} finished in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
