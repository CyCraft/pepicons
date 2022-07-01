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
          examples: './src/components/ColorRingSvg.example.vue',
        },
        {
          component: './src/components/PepHero.vue',
          examples: './src/components/PepHero.example.vue',
        },
        {
          component: './src/components/CompanyLogo.vue',
          examples: './src/components/CompanyLogo.example.vue',
        },
        {
          component: './src/components/HtmlButton.vue',
          examples: './src/components/HtmlButton.example.vue',
        },
        {
          component: './src/components/IconButton.vue',
          examples: './src/components/IconButton.example.vue',
        },
        {
          component: './src/components/IconTile.vue',
          examples: './src/components/IconTile.example.vue',
        },
        {
          component: './src/components/PepInput.vue',
          examples: [
            './src/components/PepInput-light.example.vue',
            './src/components/PepInput-dark.example.vue',
          ],
        },
        {
          component: './src/components/PepHeaderDecorationLight.vue',
          examples: './src/components/PepHeaderDecorationLight.example.vue',
        },
        {
          component: './src/components/ProfileCard.vue',
          examples: './src/components/ProfileCard.example.vue',
        },
        {
          component: './src/components/IconExpose.vue',
          examples: './src/components/IconExpose.example.vue',
        },
        {
          component: './src/components/IconGrid.vue',
          examples: './src/components/IconGrid.example.vue',
        },
        {
          component: './src/components/Tabs.vue',
          examples: './src/components/Tabs.example.vue',
        },
        {
          component: './src/components/IconInfo.vue',
          examples: './src/components/IconInfo.example.vue',
        },
        {
          component: './src/components/CodeBlock.vue',
          examples: './src/components/CodeBlock.example.vue',
        },
        {
          component: './src/components/Picker.vue',
          examples: './src/components/Picker.example.vue',
        },
        {
          component: './src/components/Pickers.vue',
          examples: './src/components/Pickers.example.vue',
        },
        {
          component: './src/components/Tooltip.vue',
          examples: './src/components/Tooltip.example.vue',
        },
      ],
      // the below config is for detecting an entire folder, but does not support multiple folders yet.
      // // Path to extract components from to create dev pages for
      // components: './src/components/atoms/*/*.vue',
      // components: './src/components/*.vue',
      // // Path to extract component examples from to put on each dev page
      // componentExamples: './src/components/*.example.vue',
      //
      // the below config is to manually pick components for VitePlay, add any others down here.
      // pages: [
      //   {
      //     title: 'CButton',
      //     component: './src/components/base-components/buttons/CButton.vue',
      //     examples: './src/components/base-components/buttons/examples/*.vue',
      //   },
      //   {
      //     title: 'CInput',
      //     component: './src/components/base-components/inputs/CInput.vue',
      //     examples: './src/components/base-components/inputs/examples/*.vue',
      //   },
      //   {
      //     title: 'CTable',
      //     component: './src/components/tables/CTable.vue',
      //     examples: './src/components/tables/examples/*.vue',
      //   },
      // ],
      // Name of the development Route
      base: '/play',
    }),
  ],
})