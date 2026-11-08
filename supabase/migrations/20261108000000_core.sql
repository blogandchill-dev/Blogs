-- Core schema: one database, many sites. Every content table hangs off sites.id.

create extension if not exists "pgcrypto";
create extension if not exists vector;

-- ---------------------------------------------------------------- enums
create type post_status as enum (
  'idea','queued','drafting','review','approved','scheduled',
  'published','pinned','monitoring','refresh','killed'
);
create type post_type as enum ('ideas','howto','bestof','editorial','recipe');
create type funnel_stage as enum ('top','middle','bottom');
create type image_source as enum ('own','stock','retailer','generated');
create type pin_status as enum ('draft','scheduled','posted','failed','retired');

-- ---------------------------------------------------------------- sites
create table sites (
  id              uuid primary key default gen_random_uuid(),
  slug            text unique not null,            -- 'gable-green'
  name            text not null,                   -- 'Gable & Green'
  domain          text unique not null,            -- 'gableandgreen.com'
  tagline         text,
  niche_plan      jsonb not null default '{}',     -- phases, loops, season windows
  voice_profile   jsonb not null default '{}',     -- samples, allow/deny words, standing opinions
  design_tokens   jsonb not null default '{}',     -- fonts, colors, spacing, radii
  layout_variant  text not null default 'a',       -- which header / grid variant
  image_policy    jsonb not null default '{}',     -- per post/pin type: own|stock|generated
  publish_window  jsonb not null default '{"start":"07:00","end":"20:00","tz":"America/New_York"}',
  auto_approve_types post_type[] not null default '{}',
  ad_network      text,                            -- 'journey' | 'raptive' | null
  pinterest_account_id text,
  email_provider  jsonb not null default '{}',
  active          boolean not null default true,
  created_at      timestamptz not null default now()
);

-- ---------------------------------------------------------------- authors
create table authors (
  id        uuid primary key default gen_random_uuid(),
  site_id   uuid not null references sites(id) on delete cascade,
  slug      text not null,
  name      text not null,
  bio       text,
  photo_url text,
  is_editor boolean not null default false,        -- "Site editors" byline vs real named person
  unique (site_id, slug)
);

-- ---------------------------------------------------------------- clusters
create table clusters (
  id             uuid primary key default gen_random_uuid(),
  site_id        uuid not null references sites(id) on delete cascade,
  name           text not null,                    -- 'patio ideas'
  loop_phrase    text not null,                    -- '{variation} patio ideas'
  funnel_stage   funnel_stage not null default 'top',
  post_type      post_type not null default 'ideas',
  variations     jsonb not null default '[]',      -- ['small','budget','apartment',...]
  season_window  jsonb,                            -- {"start":"02-01","end":"07-31"}
  phase          int not null default 1,
  priority       int not null default 100,
  active         boolean not null default true,
  unique (site_id, name)
);

-- ---------------------------------------------------------------- images
create table images (
  id           uuid primary key default gen_random_uuid(),
  site_id      uuid not null references sites(id) on delete cascade,
  storage_path text not null,
  source       image_source not null,
  license      text,
  credit       text,
  prompt       text,                               -- for generated
  alt          text,
  width        int,
  height       int,
  created_at   timestamptz not null default now()
);

-- ---------------------------------------------------------------- posts
create table posts (
  id             uuid primary key default gen_random_uuid(),
  site_id        uuid not null references sites(id) on delete cascade,
  cluster_id     uuid references clusters(id) on delete set null,
  author_id      uuid references authors(id) on delete set null,
  slug           text not null,
  title          text not null,
  type           post_type not null,
  status         post_status not null default 'idea',
  keyword        text not null,
  intent         text,
  scores         jsonb not null default '{}',      -- demand, gap, winnability
  outline        jsonb,
  body           jsonb,                            -- block array, rendered by packages/content
  excerpt        text,
  hero_image_id  uuid references images(id) on delete set null,
  style_score    numeric,
  fact_check     jsonb,
  embedding      vector(1536),
  publish_at     timestamptz,
  published_at   timestamptz,
  canonical_url  text,
  refresh_reason text,
  meta           jsonb not null default '{}',
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now(),
  unique (site_id, slug)
);
create index posts_site_status on posts(site_id, status);
create index posts_publish_at on posts(publish_at) where status = 'scheduled';

-- ---------------------------------------------------------------- post ↔ image
create table post_images (
  post_id  uuid references posts(id) on delete cascade,
  image_id uuid references images(id) on delete cascade,
  position int not null default 0,
  caption  text,
  primary key (post_id, image_id)
);

-- ---------------------------------------------------------------- pins
create table pin_templates (
  id          uuid primary key default gen_random_uuid(),
  site_id     uuid not null references sites(id) on delete cascade,
  name        text not null,
  html        text not null,                       -- rendered to PNG by packages/pins
  variables   jsonb not null default '[]',
  retired     boolean not null default false,
  performance jsonb not null default '{}',
  unique (site_id, name)
);

create table pins (
  id               uuid primary key default gen_random_uuid(),
  post_id          uuid not null references posts(id) on delete cascade,
  template_id      uuid references pin_templates(id) on delete set null,
  image_id         uuid references images(id) on delete set null,
  title            text not null,
  description      text,
  headline_angle   text,                           -- 'number' | 'problem' | 'result'
  board_id         text,
  status           pin_status not null default 'draft',
  scheduled_at     timestamptz,
  posted_at        timestamptz,
  pinterest_pin_id text,
  impressions      int not null default 0,
  saves            int not null default 0,
  clicks           int not null default 0,
  created_at       timestamptz not null default now()
);
create index pins_post on pins(post_id);
create index pins_scheduled on pins(scheduled_at) where status = 'scheduled';

-- ---------------------------------------------------------------- money
create table affiliate_links (
  id              uuid primary key default gen_random_uuid(),
  site_id         uuid not null references sites(id) on delete cascade,
  slug            text not null,                   -- /go/{slug}
  label           text not null,
  program         text not null,                   -- 'amazon' | 'impact' | ...
  url             text not null,
  commission_note text,
  last_checked    timestamptz,
  unique (site_id, slug)
);

create table products (
  id           uuid primary key default gen_random_uuid(),
  site_id      uuid not null references sites(id) on delete cascade,
  slug         text not null,
  name         text not null,
  type         text not null,                      -- 'printable' | 'plan' | 'membership'
  price_cents  int,
  checkout_url text,
  lead_magnet  boolean not null default false,
  file_path    text,
  unique (site_id, slug)
);

-- ---------------------------------------------------------------- telemetry
create table metrics_daily (
  site_id          uuid not null references sites(id) on delete cascade,
  post_id          uuid references posts(id) on delete cascade,
  date             date not null,
  source           text not null,                  -- 'google' | 'pinterest' | 'direct' | 'all'
  sessions         int not null default 0,
  pageviews        int not null default 0,
  ad_revenue_cents int not null default 0,
  affiliate_clicks int not null default 0,
  email_signups    int not null default 0,
  product_sales    int not null default 0,
  primary key (site_id, date, source, post_id)
);

create table job_runs (
  id              uuid primary key default gen_random_uuid(),
  job             text not null,                   -- 'scout' | 'writer' | ...
  site_id         uuid references sites(id) on delete cascade,
  started_at      timestamptz not null default now(),
  finished_at     timestamptz,
  rows_processed  int not null default 0,
  errors          jsonb not null default '[]',
  notes           jsonb not null default '{}'
);

-- ---------------------------------------------------------------- housekeeping
create or replace function touch_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;
create trigger posts_touch before update on posts for each row execute function touch_updated_at();

-- RLS: agents use the service role (bypasses RLS). Admin users read/write everything for now.
alter table sites enable row level security;
alter table authors enable row level security;
alter table clusters enable row level security;
alter table images enable row level security;
alter table posts enable row level security;
alter table post_images enable row level security;
alter table pin_templates enable row level security;
alter table pins enable row level security;
alter table affiliate_links enable row level security;
alter table products enable row level security;
alter table metrics_daily enable row level security;
alter table job_runs enable row level security;

do $$ declare t text;
begin
  foreach t in array array['sites','authors','clusters','images','posts','post_images',
    'pin_templates','pins','affiliate_links','products','metrics_daily','job_runs']
  loop
    execute format('create policy "admin all" on %I for all to authenticated using (true) with check (true)', t);
  end loop;
end $$;

-- Public (anon) read of published content only — the Astro build uses this.
create policy "public sites"  on sites  for select to anon using (active);
create policy "public authors" on authors for select to anon using (true);
create policy "public posts"  on posts  for select to anon using (status in ('published','pinned','monitoring','refresh'));
create policy "public images" on images for select to anon using (true);
create policy "public post_images" on post_images for select to anon using (true);
create policy "public products" on products for select to anon using (true);
create policy "public affiliate_links" on affiliate_links for select to anon using (true);
