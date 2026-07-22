{\rtf1\ansi\ansicpg1252\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 # Waitlist Landing Page: Build Spec\
\
This file is the operating instructions for this project. Read it fully before planning or writing any code. If anything here is ambiguous, ask before assuming.\
\
A design bundle exported from Claude Design is included in this folder. It defines what the page looks like. This spec defines what the page does and how it is measured.\
\
## Product context (team fills this in before starting)\
\
- Product name: STRaP\
\
- One-liner (what it does, for whom): Tracks your progress and shows you the next step towards your goal, for an ambitious planner who procrastinates to take the next step towards their goals\
\
- Benefit 1: helps you see how for you have come with respect to any topic you have learnt\
\
- Benefit 2: Helps you plan the next step towards your goal \
\
- Benefit 3: personalises your learning journey\
\
- CTA text: "Join the waitlist" (edit if you want)\
\
## What we are building\
\
A single-page waitlist site for the product above. Visitors read what the product does and join the waitlist with their email. Signups are stored in a database. This is the only page in the app.\
\
## Tech stack (fixed, do not change)\
\
- Next.js, App Router, created with create-next-app defaults\
\
- Tailwind CSS for styling\
\
- Postgres for storage, connected via the DATABASE_URL environment variable\
\
- posthog-js for analytics\
\
- No other packages or services without asking first\
\
## Page structure\
\
Implement the page to match the design bundle included in this folder. The bundle defines layout, styling, and visual detail. All four required sections must be present:\
\
1. Hero: product name, one-liner, and a CTA button that scrolls to the signup form\
\
2. Benefits: the three benefits\
\
3. Signup: email input and submit button\
\
4. Footer: "Built in Software Product Management, ISB" plus team name\
\
The built page must be responsive, working equally well on desktop and mobile.\
\
## Data model\
\
One table, `waitlist_signups`:\
\
- id: serial, primary key\
\
- email: text, unique\
\
- created_at: timestamp, defaults to now\
\
Create the table automatically on first API call if it does not exist. No migrations, no ORM.\
\
## Behavior\
\
- Submitting the form calls POST /api/signup with the email\
\
- Validate email format on both client and server\
\
- Duplicate email: return a friendly "you're already on the list" message and treat it as success, never as an error\
\
- On success: replace the form with "You're on the list. You are number N." where N is the current row count\
\
- If DATABASE_URL is not set (local development before the database exists), log the signup to the console and return success so the page still works end to end\
\
## Analytics (PostHog)\
\
Initialize posthog-js with NEXT_PUBLIC_POSTHOG_KEY and NEXT_PUBLIC_POSTHOG_HOST.\
\
Fire exactly these three custom events, with exactly these names:\
\
- `waitlist_page_viewed`: once, on page load\
\
- `waitlist_cta_clicked`: when the hero CTA is clicked\
\
- `waitlist_signup_completed`: after the API confirms a successful signup\
\
Do not rename, merge, or add events. These three names form the funnel we will analyze in class.\
\
## Environment variables\
\
- DATABASE_URL: injected by Vercel when the database is connected; never hardcode it\
\
- NEXT_PUBLIC_POSTHOG_KEY and NEXT_PUBLIC_POSTHOG_HOST: from the PostHog project settings; store locally in .env.local\
\
- Ensure .env.local is gitignored; never commit keys\
\
## Guardrails\
\
- The design is frozen. Do not redesign, restyle, or improve the visuals. Fix rendering breakage only\
\
- One page only: no auth, no admin dashboard, no routes beyond /api/signup\
\
- Prefer the simplest implementation that satisfies this spec\
\
- Do not refactor, restructure, or add features beyond what is written here\
\
- If a step fails, explain what failed in plain language before attempting a fix\
\
## Definition of done\
\
1. The live Vercel URL loads correctly on both a laptop and a phone, and matches the frozen design\
\
2. Submitting an email creates a row in `waitlist_signups`, visible in the database dashboard\
\
3. All three PostHog events appear in the Activity feed, fired from the production URL, from at least one full pass through the page\
\
A feature counts as done only when its event fires in production.}