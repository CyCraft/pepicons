// https://nuxt.com/docs/api/configuration/nuxt-config
// import viteplay from '@viteplay/plugin'
// import { pages as viteplayPages } from './.cache/viteplay/client.js'
// import { pages as pagesVitePlay } from "@viteplay/vue/client"

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Pepicons — Retro icons by Cycraft',
      htmlAttrs: { lang: 'en' },
      meta: [
        {
          name: 'description',
          content:
            'Browse and download retro icons in Pop, Print and Pencil styles. Free SVG and PNG icons by Cycraft, licensed under CC BY 4.0.',
        },
        { property: 'og:title', content: 'Pepicons — Retro icons by Cycraft' },
        {
          property: 'og:description',
          content: 'Browse and download free retro icons in Pop, Print and Pencil styles.',
        },
      ],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },
  runtimeConfig: {
    public: {
      posthogPublicKey: '',
      posthogHost: '',
    },
  },
  // hooks: {
  //   'pages:extend'(pages) {
  //     pages.push(...viteplayPages)
  //   },
  // },
  // vite: {
  //   plugins: [
  //     viteplay({
  //       pages: [
  //         {
  //           component: './components/PepHero.vue',
  //           examples: ({ name }) => `./${name}.example.vue`,
  //         },
  //         {
  //           component: './components/CompanyLogo.vue',
  //           examples: ({ name }) => `./${name}.example.vue`,
  //         },
  //         {
  //           component: './components/HtmlButton.vue',
  //           examples: ({ name }) => `./${name}.example.vue`,
  //         },
  //         {
  //           component: './components/IconButton.vue',
  //           examples: ({ name }) => `./${name}.example.vue`,
  //         },
  //         {
  //           component: './components/IconTile.vue',
  //           examples: ({ name }) => `./${name}.example.vue`,
  //         },
  //         {
  //           component: './components/PepInput.vue',
  //           examples: ({ name }) => `./${name}*.example.vue`,
  //         },
  //         {
  //           component: './components/PepHeaderDecorationLight.vue',
  //           examples: ({ name }) => `./${name}.example.vue`,
  //         },
  //         {
  //           component: './components/ProfileCard.vue',
  //           examples: ({ name }) => `./${name}.example.vue`,
  //         },
  //         {
  //           component: './components/IconGrid.vue',
  //           examples: ({ name }) => `./${name}.example.vue`,
  //         },
  //         {
  //           component: './components/Tabs.vue',
  //           examples: ({ name }) => `./${name}.example.vue`,
  //         },
  //         {
  //           component: './components/IconDetails.vue',
  //           examples: ({ name }) => `./${name}.example.vue`,
  //         },
  //         {
  //           component: './components/CodeBlock.vue',
  //           examples: ({ name }) => `./${name}.example.vue`,
  //         },
  //         {
  //           component: './components/Pickers.vue',
  //           examples: ({ name }) => `./${name}.example.vue`,
  //         },
  //         {
  //           component: './components/Tooltip.vue',
  //           examples: ({ name }) => `./${name}.example.vue`,
  //         },
  //       ],
  //       // Name of the development Route
  //       base: '/play',
  //     }),
  //   ],
  // },
  nitro: {
    preset: 'firebase',
    prerender: { crawlLinks: true, ignore: ['/play'] },
  },
})
