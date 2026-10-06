# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Dennis Blomberg (about page, contact page, and a list of projects loaded from Firestore). Deployed on Vercel.

Stack: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, shadcn/ui (new-york style, zinc base, CSS variables), Firebase/Firestore, next-themes.

## Commands

- `npm run dev` starts the dev server
- `npm run build` creates a production build (also the main type-check step)
- `npm run lint` runs ESLint (`next/core-web-vitals` + `next/typescript`)
- `npx prettier --write .` formats code

There is no test suite.

## Code style

Prettier settings ([.prettierrc](.prettierrc)): no semicolons, single quotes (JSX too), no trailing commas, `arrowParens: avoid`, 2-space indent, width 80, with `prettier-plugin-tailwindcss` sorting class names. Use the `@/*` path alias for imports. Add shadcn components under `components/ui/` and merge classes with `cn()` from [lib/utils.ts](lib/utils.ts).

## Architecture

**Two Firebase clients:**
- [config/firebaseConfig.ts](config/firebaseConfig.ts) is the **client SDK** (`firebase/firestore`) and is configured from `NEXT_PUBLIC_FIREBASE_*` env vars. It is the default export `db`. Read-only page data comes from it, and those pages are async Server Components that call it directly (no API layer).
- [config/firebaseAdmin.ts](config/firebaseAdmin.ts) is the **Admin SDK** (`firebase-admin`) and is configured from `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL` and `FIREBASE_PRIVATE_KEY`. Escaped `\n` sequences in the key are converted to real newlines. It is the named export `db` and is used only by server code that writes data. Never import it into client components.

Env vars live in `.env.local`.

**Projects data flow:**
- Everything lives in the Firestore `projects` collection, and the shape is in [types/projectTypes.ts](types/projectTypes.ts). In practice, `features` items are `{ name, description }` and `techStack` items are `{ techName, techInfo }`. `images` is an array of Firebase Storage URLs; `image1` and `image2` are older fields.
- Projects are added through `POST /api/addProject` ([app/api/addProject/route.ts](app/api/addProject/route.ts)), which writes with the Admin SDK and sets `createdAt`. There is no admin UI, and the route has no authentication.
- [app/projects/page.tsx](app/projects/page.tsx) (ISR, `revalidate = 60`) and [components/recentProjects.tsx](components/recentProjects.tsx) (home page, limit 2) each have their own copy of the `getProjects()` query, ordered by `createdAt desc`. Both render [components/homeProjects.tsx](components/homeProjects.tsx).
- [app/projects/[id]/page.tsx](app/projects/[id]/page.tsx) fetches a single document and renders the 404 state inline. The `images` are shown with [components/imageSlider.tsx](components/imageSlider.tsx).
- Remote images are allowed only from `firebasestorage.googleapis.com` ([next.config.mjs](next.config.mjs)).

**Layout and theming:** [app/layout.tsx](app/layout.tsx) wraps every page in `Providers` (next-themes, class-based dark mode, system default), `Header` and `Footer`. It also loads the Inter (`--font-sans`) and Playfair Display (`--font-serif`) fonts. Theme colors are CSS variables in [app/globals.css](app/globals.css). Each route segment has a `loading.tsx` that uses [components/spinner.tsx](components/spinner.tsx).
