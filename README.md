# workspace.sh

Static site built with [Astro](https://astro.build), deployed to
[GitHub Pages](https://pages.github.com) at <https://workspace.sh>.

## Stack

- Astro 6 (minimal/blank starter, strict TypeScript)
- `@astrojs/react` — React components are importable in `.astro` files via
  `<Component client:load />` (or `client:idle` / `client:visible`)
- `@astrojs/mdx` — Markdown with components
- Content Layer API — `src/content.config.ts` defines the `devlog` collection
- Bun as the package manager and runtime (Node ≥ 22 also fine)

## Local development

```sh
bun install
bun run dev      # http://localhost:4321
bun run build    # production build → ./dist
bun run preview  # serve ./dist locally
```

> **Node version:** Astro 6 requires Node ≥ 22.12. If `bun run` complains
> about Node 18, switch via nvm: `nvm use 22`.

## Deployment

Deploys are handled by [.github/workflows/deploy.yml](.github/workflows/deploy.yml),
which uses the official [`withastro/action`](https://github.com/withastro/action)
and the GitHub Pages artifact flow. **There is no `gh-pages` branch** — built
output is uploaded directly to the Pages service.

Two ways to trigger a deploy:

1. **Push to `main`** — auto-deploys.
2. **Manual** — `bun run deploy` (wraps `gh workflow run deploy.yml --ref main`),
   or the **Run workflow** button on the Actions tab.

### One-time GitHub setup

After the first push:

1. **Settings → Pages → Source:** `GitHub Actions`.
2. **Settings → Pages → Custom domain:** `workspace.sh`. Tick **Enforce
   HTTPS** once DNS propagates (can take up to an hour).
3. **Settings → Branches → Default branch:** switch to `develop`.

### Namecheap DNS

In Namecheap → Domain List → workspace.sh → Advanced DNS, add:

| Type  | Host | Value                  |
| :---- | :--- | :--------------------- |
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | `<github-user>.github.io.` |

(Optional, IPv6) Four AAAA records on `@`:
`2606:50c0:8000::153`, `:8001::153`, `:8002::153`, `:8003::153`.

Remove any conflicting URL Redirect or Parking Page records Namecheap may
have added by default.

## Branch model

- **`develop`** (default) — day-to-day work happens here.
- **`main`** — what should ship. Merging into `main` triggers a deploy.

## Project layout

```text
public/
  CNAME                      # locks the custom domain on GH Pages
src/
  content.config.ts          # devlog collection schema
  content/devlog/            # markdown/mdx devlog posts
  layouts/{Base,Page,Post}.astro
  pages/
    index.md                 # homepage (uses Page layout)
    devlog/
      index.astro            # post list
      [...slug].astro        # individual post route
  styles/global.css          # minimal: typography, spacing, dark mode
.github/workflows/deploy.yml
astro.config.mjs
```

Placeholder content is marked with `TODO` comments.
