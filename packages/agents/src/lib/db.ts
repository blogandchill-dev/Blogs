import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Agents read the repo-root .env (service role) — never the web app's anon key.
const here = path.dirname(fileURLToPath(import.meta.url));
config({ path: path.resolve(here, '../../../../.env') });

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_KEY;
if (!url || !key) throw new Error('SUPABASE_URL and SUPABASE_SERVICE_KEY must be set in .env');

export const db = createClient(url, key, { auth: { persistSession: false } });

export type Site = {
  id: string; slug: string; name: string; domain: string; tagline: string | null;
  niche_plan: Record<string, unknown>; voice_profile: Record<string, unknown>;
  image_policy: Record<string, string>; auto_approve_types: string[];
};
export type Cluster = {
  id: string; site_id: string; name: string; loop_phrase: string;
  funnel_stage: 'top' | 'middle' | 'bottom'; post_type: PostType;
  variations: string[]; season_window: { start: string; end: string } | null;
  phase: number; priority: number; active: boolean;
};
export type PostType = 'ideas' | 'howto' | 'bestof' | 'editorial' | 'recipe';
export type PostStatus = 'idea' | 'queued' | 'drafting' | 'review' | 'approved' | 'scheduled'
  | 'published' | 'pinned' | 'monitoring' | 'refresh' | 'killed';
export type Post = {
  id: string; site_id: string; cluster_id: string | null; author_id: string | null;
  slug: string; title: string; type: PostType; status: PostStatus;
  keyword: string; intent: string | null; scores: Record<string, number>;
  outline: unknown; body: unknown; excerpt: string | null;
  style_score: number | null; meta: Record<string, unknown>;
};

export async function getSite(slug: string): Promise<Site> {
  const { data, error } = await db.from('sites').select('*').eq('slug', slug).single();
  if (error || !data) throw new Error(`site ${slug}: ${error?.message ?? 'not found'}`);
  return data as Site;
}

export async function startRun(job: string, siteId: string) {
  const { data, error } = await db.from('job_runs').insert({ job, site_id: siteId }).select('id').single();
  if (error) throw error;
  return data.id as string;
}

export async function finishRun(id: string, rows: number, errors: unknown[], notes: Record<string, unknown>) {
  await db.from('job_runs').update({
    finished_at: new Date().toISOString(), rows_processed: rows, errors, notes,
  }).eq('id', id);
}
