# Agent notes for pepicons

## Branches

- `main` is the default branch. It was renamed from `dev` on 2026-09-16.
- `dev` still exists as a **mirror of `main`**, kept in sync by `.github/workflows/mirror-main-to-dev.yml` on every push to `main`. Never commit to `dev` directly and never delete it without reading the section below.
- `production` is the deploy branch: pushes to it trigger the Firebase hosting deploy of pepicons.com (`.github/workflows/firebase-hosting-merge.yml`).

## Why `dev` must keep existing

Iconify imports the icon set automatically from this git repository, reading the SVG files under `packages/pepicons/svg/`. That was agreed with the Iconify maintainer in https://github.com/iconify/icon-sets/issues/72, where the example links point at the `dev` branch. Their importer configuration is private, so we cannot see or change which branch it targets. The `dev` mirror guarantees their pipeline keeps working regardless.

Only remove the mirror workflow and the `dev` branch once Iconify has confirmed in that thread that their importer reads `main` (or the default branch).

## Do not move the SVG folder

The Iconify parser depends on `packages/pepicons/svg/` staying where it is. Moving or renaming it breaks their automated updates (this happened once before, see the thread above).
