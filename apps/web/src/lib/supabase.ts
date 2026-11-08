import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.SUPABASE_URL ?? process.env.SUPABASE_URL;
const key = import.meta.env.SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY;
if (!url || !key) throw new Error('SUPABASE_URL and SUPABASE_ANON_KEY are required');

// Anon key: RLS limits the build to active sites and published posts.
export const supabase = createClient(url, key, { auth: { persistSession: false } });
