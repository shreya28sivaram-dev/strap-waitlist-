# STRaP — waitlist landing page

Single-page waitlist site. Built in Software Product Management, ISB.

Spec lives in `Claude.md`. The frozen design is `STRaP Waitlist standalone.html`
(a self-unpacking bundle exported from Claude Design).

## Run locally

```bash
npm install
npm run dev
```

The page works with no database configured: signups are logged to the server
console and the API still returns success, so the full flow is testable locally.

## Environment variables

Create `.env.local` (already gitignored — never commit keys):

```
NEXT_PUBLIC_POSTHOG_KEY=phc_xxx
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

`DATABASE_URL` is injected by Vercel when the Postgres database is connected.
Don't set it by hand in production and never hardcode it.

## Data

One table, created automatically on the first API call:

```sql
waitlist_signups (id serial primary key, email text unique, created_at timestamp default now())
```

Duplicate emails are treated as success, not as an error.

## Analytics

Three custom events, fired from the page:

| Event | When |
| --- | --- |
| `waitlist_page_viewed` | on page load |
| `waitlist_cta_clicked` | hero CTA clicked |
| `waitlist_signup_completed` | API confirms a successful signup |

These three form the funnel. Don't rename, merge, or add to them.

## Deploy

Push to GitHub, import the repo in Vercel, then:

1. Add a Postgres database to the project (sets `DATABASE_URL` automatically)
2. Add `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` as env vars
3. Redeploy so the env vars are picked up
