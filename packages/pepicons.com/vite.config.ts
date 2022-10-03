import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteplay from '@viteplay/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteplay({
      pages: [
        {
          component: './src/components/ColorRingSvg.vue',
          examples: ({ name }) => `./${name}.example.vue`,
        },
        {
          component: './src/components/PepHero.vue',
          examples: ({ name }) => `./${name}.example.vue`,
        },
        {
          component: './src/components/CompanyLogo.vue',
          examples: ({ name }) => `./${name}.example.vue`,
        },
        {
          component: './src/components/HtmlButton.vue',
          examples: ({ name }) => `./${name}.example.vue`,
        },
        {
          component: './src/components/IconButton.vue',
          examples: ({ name }) => `./${name}.example.vue`,
        },
        {
          component: './src/components/IconTile.vue',
          examples: ({ name }) => `./${name}.example.vue`,
        },
        {
          component: './src/components/PepInput.vue',
          examples: ({ name }) => `./${name}*.example.vue`,
        },
        {
          component: './src/components/PepHeaderDecorationLight.vue',
          examples: ({ name }) => `./${name}.example.vue`,
        },
        {
          component: './src/components/ProfileCard.vue',
          examples: ({ name }) => `./${name}.example.vue`,
        },
        {
          component: './src/components/IconGrid.vue',
          examples: ({ name }) => `./${name}.example.vue`,
        },
        {
          component: './src/components/Tabs.vue',
          examples: ({ name }) => `./${name}.example.vue`,
        },
        {
          component: './src/components/IconInfo.vue',
          examples: ({ name }) => `./${name}.example.vue`,
        },
        {
          component: './src/components/CodeBlock.vue',
          examples: ({ name }) => `./${name}.example.vue`,
        },
        {
          component: './src/components/Picker.vue',
          examples: ({ name }) => `./${name}.example.vue`,
        },
        {
          component: './src/components/Pickers.vue',
          examples: ({ name }) => `./${name}.example.vue`,
        },
        {
          component: './src/components/Tooltip.vue',
          examples: ({ name }) => `./${name}.example.vue`,
        },
      ],
      // Name of the development Route
      base: '/play',
    }),
  ],
})
