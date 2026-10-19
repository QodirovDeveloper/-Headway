# Headway 4th edition — classroom site

All five Headway levels (Beginner → Upper-Intermediate) in one React site: the
Student's Book pages with tap-to-play audio and exercises. The book pages and
recordings belong to Oxford University Press — do not make them public.

## Who sees what

- **Students** sign up themselves. Tapping ✓ on a page opens the exercise with
  gaps; the student picks or types the answer. The answer is never shown until
  the student finds it. Each gap found within 2 tries gives **1 XP** (for the
  ranking) and **1 SILVER** (to spend in the market).
- **admin** (the teacher) sees the full answer keys and the Admin panel:
  students and their progress, market prizes, and prize orders.

## How it works

- `src/` — the site (React + Vite).
- `worker/` — the server (Cloudflare Worker): accounts, answer checking, ranking,
  market, admin. Data lives in a Cloudflare D1 database; tables set themselves up.
- The answer keys (`src/data/<level>/answers.ts`) are bundled only into the server.
  The site's code gets the exercises without answers (see `vite.config.ts`).

## Media (not in git)

The book pages and audio (~1.2 GB) are kept out of git. Each level needs:

```
public/<level>/pages/   page images (.webp)
public/<level>/audio/   tracks (T<unit>.<n>.mp3)
```

`<level>` is `beginner`, `elementary`, `pre-intermediate`, `intermediate` or
`upper-intermediate`. Restore them from the backup zips (one per level), or
rebuild the pages from the source PDFs with `tools/render_pages.py`.

## Run locally

```
npm install
npm run dev
```

The server and a local database run inside the dev server. The admin password
for local use is in `.dev.vars` (not committed); see `ACCESS.local.md`.

## Deploy to Cloudflare

1. `npx wrangler login`
2. `npx wrangler d1 create headway` — put the printed `database_id` into `wrangler.jsonc`.
3. `npx wrangler secret put ADMIN_PASSWORD` — the admin's password.
4. `npm run deploy`

The first deploy uploads the book pages and audio (~1.2 GB); later deploys upload
only what changed. Pages and audio are served to signed-in users only.
