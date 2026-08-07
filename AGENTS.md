# AGENTS.md

## Project

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4. The app is a landing page for **Funded Start**, a platform for early-stage African startup investing.

The `page.tsx` is still the `create-next-app` boilerplate — the actual landing page has not been built yet.

## Design specs are the source of truth

Read these before doing UI work — they define the full page structure, copy, and brand:

- `src/app/funded start homapage design.txt` — landing page structure (hero, problem, how-it-works, evidence, surveys, waitlist CTAs)
- `src/app/funded start brand identity.txt` — colors, typography, buttons

## Commands

- `npm run dev` — dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint (only check available; no typecheck or test scripts exist)

## Gotchas

- **Tailwind v4, CSS-only config**: there is no `tailwind.config.*`. Theme lives in `src/app/globals.css` via `@import "tailwindcss"` and `@theme inline`. Add brand colors there rather than creating a config file.
- **Brand colors are not in the theme yet**: add the palette from the brand identity spec (Deep Navy `#0B1F3A`, Emerald `#18A957`, Gold `#F4B400`, etc.) to `@theme` instead of hardcoding hex inline.
- **Dark mode** is driven by `prefers-color-scheme` (media query), not a class toggle. Use Tailwind `dark:` variants with that in mind.
- Path alias `@/*` → `src/*`; use it for imports.
- Brand logo assets live in `public/` with spaces in filenames (`Fundedstart logo.png`, `Fundedstart horizontal logo.png`).
- Do not commit `.env*` files (gitignored).
