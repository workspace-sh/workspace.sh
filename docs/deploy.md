# Deployment

Static site, built and published by [.github/workflows/deploy.yml](../.github/workflows/deploy.yml)
using the official [`withastro/action`](https://github.com/withastro/action)
and the [GitHub Pages artifact flow](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow).

**There is no `gh-pages` branch.** Built output is uploaded directly to the
Pages service as an artifact — nothing committed back to git.

## Triggers

| | When |
| :--- | :--- |
| Auto | Push to `main` |
| Manual | `bun run deploy` (= `gh workflow run deploy.yml --ref main`) or the **Run workflow** button on the Actions tab |

`bun run deploy` builds *on the CI runner*, not locally. To check what
will ship before triggering a deploy, run `bun run build && bun run preview`.

## One-time GitHub setup

After the repo's first push:

1. **Settings → Pages → Source:** `GitHub Actions`. Without this the
   workflow runs but nothing publishes.
2. **Settings → Pages → Custom domain:** `workspace.sh`. Tick **Enforce
   HTTPS** once DNS propagates (see [dns.md](dns.md)).
3. **Settings → Branches → Default branch:** switch to `develop`.

## Branch model

- **`develop`** (default) — day-to-day work.
- **`main`** — what should ship. Merging into `main` triggers a deploy.

## Local commands

```sh
bun install
bun run dev       # http://localhost:4321 with hot reload
bun run build     # production build → ./dist
bun run preview   # serve ./dist locally — exact CI output
bun run deploy    # dispatch the deploy workflow on main
```

> Astro 6 needs Node ≥ 22.12. If `bun run` complains about Node 18,
> `nvm use 22`.
