# Pepicons website

The website uses Vue 3, Vite, and vite-ssg. The homepage, initial icon grid, privacy page, and 404 page are rendered to static HTML at build time. Vue hydrates the pages for search, colours, dialogs, and downloads; production hosting requires no application server.

## Development

Run these commands from the repository root with Node.js 22.18 or newer and the pnpm version pinned in `package.json`:

```sh
pnpm install
pnpm run build
pnpm run dev:pepicons.com
```

## Production build

```sh
pnpm run build:pepicons.com
pnpm --filter pepicons.com preview
```

The static website is written to `projects/pepicons.com/dist`. The build also prepares Cloudflare Build Output in `projects/pepicons.com/.cloudflare/output/v0`.

## Hosting

The `pepicons` Worker serves static assets in Cloudflare's `mesqueebzone` account for `pepicons.cycraft.co`, `pepicons.com`, and `www.pepicons.com`. Domain and asset routing settings are declared in `cloudflare.config.ts`.

Pushes to `main` run `.github/workflows/cloudflare-deploy.yml`. GitHub Actions uses the repository secret `CLOUDFLARE_API_TOKEN`. Pull requests build the site and upload the static output as an artifact.

For a manual deployment, set `CLOUDFLARE_API_TOKEN` in your environment and run from the repository root:

```sh
pnpm run deploy:pepicons.com
```

The Firebase `pep-icons` project is on Spark, with no server function. Its remaining Hosting configuration is a temporary redirect to `pepicons.cycraft.co` for traffic using the previous DNS; it does not serve the website files.

## Analytics

Copy `.env.example` to `.env` in this directory and set `VITE_POSTHOG_PUBLIC_KEY` and `VITE_POSTHOG_HOST` to the existing Pepicons PostHog project's public key and ingestion host. GitHub Actions obtains the same values from repository variables `PEPICONS_POSTHOG_PUBLIC_KEY` and `PEPICONS_POSTHOG_HOST`.

Analytics runs only on the three production hostnames. The existing cookieless settings and `icons_downloaded` events are preserved; local development and previews do not send analytics.
