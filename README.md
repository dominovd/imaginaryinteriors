# Imaginary Interiors — AI Interior Style Atlas

A visual, SEO-first catalog of interior design styles. Users browse style hubs, save
rooms they like, and shop the pieces that make the look work. Built with **Astro**
(static output) — chosen for speed and search performance.

## Stack

- **Astro 4** — static site generation, zero JavaScript shipped by default.
- Plain CSS (`src/styles/global.css`) — no CSS framework, no runtime.
- Content lives in `src/data/styles.js` and drives both the homepage hubs and every
  `/styles/[slug]` page. Add a style object → a new page builds automatically.

## Project structure

```
src/
  layouts/BaseLayout.astro     # <head> SEO meta, header, footer
  components/
    Header.astro
    Footer.astro
    Placeholder.astro          # CSS-only stand-in for AI renders (zero image weight)
  data/styles.js               # single source of truth for style hubs
  pages/
    index.astro                # homepage
    styles/index.astro         # /styles — all hubs
    styles/[slug].astro        # /styles/modern-rustic, /styles/japandi, …
  styles/global.css
public/                        # put real images / favicon here (served as-is)
```

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs static site to dist/
npm run preview    # serve the built site locally
```

## Deploy to Vercel

Vercel auto-detects Astro — no config needed.

1. Push this repo to GitHub (see below).
2. On vercel.com → **New Project** → import the repo.
3. Framework preset: **Astro** (auto). Build: `npm run build`, output: `dist/`.
4. Add the domain **imaginaryinteriors.com** in Project → Settings → Domains.

Or from the CLI:

```bash
npm i -g vercel
vercel            # preview deploy
vercel --prod     # production
```

## Push to GitHub

```bash
# repo is already initialized with a first commit
git remote add origin git@github.com:<you>/imaginaryinteriors.git
git branch -M main
git push -u origin main
```

## Performance notes (load speed)

Load speed is a ranking factor and matters for this image-heavy niche. Baked in:

- **Static HTML, zero JS by default.** Astro ships no client JavaScript unless a
  component explicitly opts in. Keep it that way — hydrate only interactive islands
  (quiz, search) with `client:visible`.
- **Placeholders are pure CSS** — the current build has no image payload at all.
- **When adding real images:** put source files in `src/assets/` and use Astro's
  `<Image />` / `<Picture />` component — it emits AVIF/WebP + responsive `srcset`
  and sets width/height automatically (prevents layout shift / CLS). Always add
  `loading="lazy"` and `decoding="async"` to below-the-fold images; the hero image
  should be `loading="eager"` + `fetchpriority="high"`.
- **Target vertical 2:3 crops** for room renders (best for Pinterest + card layout).
- Self-host or `font-display: swap` any web fonts; the current build uses system
  fonts (Helvetica/Arial) — zero font requests.
- Keep third-party scripts (ad network, analytics) async/deferred and lazy-loaded.

## Roadmap

- Fill remaining style hubs in `src/data/styles.js` (prioritize the "★ Хватать"
  clusters from `content-plan.xlsx` where the competitor is weak/absent).
- Add `/rooms`, `/colors`, `/trends`, `/quiz` pages (nav links point here).
- Wire affiliate links into "Shop the look" items.
- Add `sitemap` (`@astrojs/sitemap`) and structured data for SEO.
```
