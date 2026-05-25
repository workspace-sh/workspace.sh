# workspace.sh

Static site built with [Astro](https://astro.build), deployed to
GitHub Pages at <https://workspace.sh>.

## Quickstart

```sh
bun install
bun run dev       # http://localhost:4321
```

Other commands:

```sh
bun run build     # production build → ./dist
bun run preview   # serve ./dist locally
bun run deploy    # trigger the deploy workflow on main
```

> Requires **Node ≥ 22.12** (Astro 6). If your shell defaults to Node 18,
> `nvm use 22` first.

## Stack

- Astro 6, strict TypeScript
- `@astrojs/react` — React components usable in `.astro` files via
  `<Component client:load />` and friends
- `@astrojs/mdx`
- Content Layer API — `devlog` collection in `src/content.config.ts`
- Bun (package manager + runtime)

## Layout

```text
public/CNAME                 # locks the custom domain on GH Pages
src/
  content.config.ts          # devlog collection schema
  content/devlog/            # markdown/mdx posts
  layouts/{Base,Page,Post}.astro
  pages/
    index.md                 # homepage (Page layout)
    devlog/
      index.astro            # post list
      [...slug].astro        # individual posts
  styles/global.css          # minimal: typography, spacing, dark mode
.github/workflows/deploy.yml
```

Placeholder content is marked with `TODO` comments.

## Docs

- [docs/deploy.md](docs/deploy.md) — deployment, CI workflow, GitHub Pages setup, branch model
- [docs/dns.md](docs/dns.md) — Namecheap DNS records for the apex
