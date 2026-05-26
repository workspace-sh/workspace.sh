---
title: Why bun
date: 2026-05-15
description: A short rationale for using bun over npm/pnpm on this project.
type: note
---

<!-- TODO: replace placeholder content -->

Three reasons, ordered by how much they actually mattered:

1. **Speed.** `bun install` on this project is sub-second. `npm install`
   was ~12s on first run, ~3s warm. Multiply by every CI deploy.
2. **One binary.** Bun is package manager, test runner, bundler, and
   runtime in a single binary. Means fewer global tools to keep aligned
   across machines.
3. **It just runs `package.json` scripts.** No new mental model. The
   `astro` CLI still calls into node via shebang, so the actual runtime
   is unchanged.

Real-world cost so far: `bunx astro add` doesn't auto-detect bun as the
package manager and writes `npm install` into its docs. Minor.
