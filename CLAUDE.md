# blogs — portfolio of niche content sites

Three brands, one codebase, one database, one agent pipeline. Each site is a row in `sites`;
everything else hangs off `site_id`. Brands never cross-link, share boards, or share footers.

| slug | brand | domain |
|---|---|---|
| gable-green | Gable & Green | gableandgreen.com |
| nickel-nest | Nickel & Nest | nickelandnest.com |
| macro-tuesday | Macro Tuesday | macrotuesday.com |

Plan of record: `~/Downloads/Three-Blog Portfolio Plan.pdf` (direction, not spec).
All three launch together; Gable & Green is where the engine gets built first.

## Accounts — this repo is the BLOG HUB identity, not Hangkind
- GitHub: hub account `blogandchill-dev`. Run `gh auth switch -u blogandchill-dev` before any `gh` command here.
- Git pushes use the SSH alias `github-blogs` (key `~/.ssh/id_ed25519_blogs`), so they cannot go out as the wrong account.
- Supabase, Cloudflare, API keys: all under the hub Gmail. Secrets live in `.env` files (gitignored) and the Cloudflare task environment — never in prompts or committed files.

## Layout
- `apps/web` — Astro 7, static. One build per site via `SITE_SLUG`; design tokens + layout variant come from the site row.
- `apps/admin` — (later) command center: pipeline board, review queue, reports.
- `supabase/` — migrations + seed. No local Docker on this machine; migrations are pushed to the cloud project (`supabase db push`).
- `packages/agents` — one module per job: scout, writer, approver, scheduler, publisher, pinmaker, monitor, reporter. Stateless; all state in Supabase.
- `packages/prompts` — voice profiles, quality-gate prompts, outline templates per site.
- `packages/pins` — pin templates (HTML → PNG) and Pinterest client.
- `infra/` — Cloudflare config, scheduled-task definitions.

## Rules that are decided
- Post status machine: idea → queued → drafting → review → approved → scheduled → published → pinned → monitoring → refresh (→ killed).
- Images are AI-first (Nano Banana Pro), metadata/C2PA stripped, stock mixed in, real photos over time. Do not relitigate.
- Bylines: "Site editors" on ideas/how-to; one real named author on best-of, product and advice posts. No invented authors.
- Affiliate links cloaked at `/go/{slug}`, `rel="sponsored"`.
- Every post: ≥3 internal links to cluster siblings, 1 to a middle/bottom-funnel post.

## Commands
- `pnpm web` — dev server for the site in `apps/web/.env` (`SITE_SLUG`).
- `supabase db push` — apply migrations to the linked cloud project.
- `pnpm db:types` — regenerate TS types (needs local DB; otherwise `supabase gen types --linked`).
