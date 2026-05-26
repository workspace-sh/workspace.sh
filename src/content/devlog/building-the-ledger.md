---
title: Building the ledger
date: 2026-05-24
description: Notes on the tabular devlog index — column widths, hover state, tabular numerals.
type: note
---

<!-- TODO: replace placeholder content -->

A short note on the devlog index. The columns are sized 1% / 1% / auto /
1%, which sounds wrong until you realise tables resolve `width: 1%` as
"as narrow as content allows" — so date, object, and control collapse
to fit while subject takes the slack.

## Tabular numerals

`font-variant-numeric: tabular-nums` matters more than you'd think.
Without it the date column rejiggers by a pixel or two per row, which
the eye reads as instability. With it, columns of dates line up like a
spreadsheet.

## Hover

Earlier draft inverted the row on hover — black background, white text.
Felt too aggressive next to the rest of the page. Settled on a 6%
foreground tint via `color-mix(in srgb, var(--fg) 6%, transparent)`.
Reads as a hover without screaming.
