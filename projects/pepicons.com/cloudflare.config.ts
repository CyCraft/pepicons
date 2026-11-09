import { defineConfig } from 'cf/config'

export default defineConfig({
  accountId: 'f783644c1d8156eecf7550f1c8ff7dda',
  worker: {
    name: 'pepicons',
    compatibilityDate: '2026-11-09',
    domains: ['pepicons.cycraft.co', 'pepicons.com', 'www.pepicons.com'],
    assets: { htmlHandling: 'drop-trailing-slash', notFoundHandling: '404-page' },
  },
})
