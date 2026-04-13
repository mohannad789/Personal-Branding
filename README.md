# Personal branding site

Astro-powered site: the **home** route is a long-form **landing** (copy in [`src/content/landing.ts`](src/content/landing.ts), layout in [`src/styles/landing.css`](src/styles/landing.css) + [`src/components/landing/`](src/components/landing/)) with **minimal nav** (logo + one CTA). Other routes still use the full header from [`src/navigation.ts`](src/navigation.ts). Deployed to **Vercel**.

## Stack

- [Astro](https://astro.build/) (static output)
- [@astrojs/vercel](https://docs.astro.build/en/guides/deploy/vercel/) adapter
- Global styles in `src/styles/global.css`; copy and navigation data in `src/content/home.ts` and `src/navigation.ts`

## Typography (Satoshi + Fraunces)

**Satoshi** is loaded from [Fontshare](https://www.fontshare.com/fonts/satoshi) in [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro) (no font binaries in this repo). Follow Fontshare’s license for your use case.

**Accent serif:** **Fraunces** (Google Fonts, open license) is loaded as `--font-accent` for occasional editorial touches (e.g. hero tagline, large pull-quote). **All titles and headings use Satoshi** (`--font-sans`). Add the utility class `font-accent` on a specific element when you want Fraunces in copy.

**Using your own font files instead:** add `.woff2` under `public/fonts/`, add `@font-face` in `src/styles/global.css`, and point `--font-accent` or `--font-sans` at that family.

## Local development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:4321).

```bash
npm run build   # production build to dist/ and .vercel/output
npm run preview # serve the production build locally
```

## Environment variables

| Variable | Where | Purpose |
|----------|--------|---------|
| `PUBLIC_SITE_URL` | Vercel → Project → Settings → Environment Variables (Production and Preview) | Set to your live URL with **no trailing slash** (e.g. `https://personal-branding.vercel.app`). Astro uses `site` in `astro.config.mjs` for canonical URLs and future sitemap/OG tags. |

Copy [.env.example](.env.example) to `.env` for local overrides if needed.

## Deploy on Vercel

1. Push this repository to GitHub (e.g. `mohannad789/Personal-Branding`).
2. In [Vercel](https://vercel.com), **Add New Project** → import the repo.
3. Framework Preset: **Astro** (auto-detected). Build command: `npm run build`. Install command: `npm install`.
4. Add `PUBLIC_SITE_URL` after the first deploy, using the URL Vercel assigns (or your custom domain), then redeploy.
5. Every push to the connected branch (e.g. `main`) triggers a new production deployment; pull requests get preview URLs by default.

No `vercel.json` is required for this static setup; add one later if you need redirects, headers, or image optimization config.

## Project structure

- `src/layouts/BaseLayout.astro` — document shell, nav, footer, **analytics placeholder** comment in `<head>`.
- `src/pages/` — file-based routes (`index.astro` = `/`, `about.astro` = `/about`, etc.).
- `src/content/home.ts` — home page copy and structured data (edit here instead of scattering strings in markup).
- `src/pages/legal/` — privacy and terms placeholders until you add real policies.

## Future extensions (not implemented yet)

**Analytics** — Add a small snippet or component in `BaseLayout.astro` `<head>`, gated by an env var (for example only inject when `PUBLIC_ANALYTICS_ID` or similar is set) so previews stay clean.

**Contact forms** — Options: (1) third-party form endpoints (Formspree, Basin) from a client form; (2) Astro server endpoints or Vercel serverless functions (requires switching from pure static to hybrid/SSR when you add the Vercel serverless adapter and server code).

**Members area / courses / paid content** — Needs authentication, a database or headless CMS, and usually **server-side rendering or API routes**. Plan: keep content in this repo, add an auth provider (Clerk, Auth.js, Supabase Auth), then adjust `astro.config.mjs` to use the non-static Vercel adapter when you are ready. The placeholder `/members` and `/courses` pages document this direction.

## Legacy note

The original single-file `index.html` + `styles.css` setup was replaced by this Astro project. Use `git history` if you need the old files.
