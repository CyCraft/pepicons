module.exports = {
  ignorePatterns: [
    'dist',
    'node_modules',
    'build',
    '.eslintrc.cjs',
    '.postcssrc.js',
    '.babel.config.js',
  ],
  root: true,
  env: {
    'browser': true,
    'es2021': true,
    'node': true,
    'vue/setup-compiler-macros': true, // required for `<script setup>`
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    '@nuxt/eslint-config',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/base',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  // add your custom rules here
  rules: {
    'vue/no-multiple-template-root': 'off',
    'vue/script-setup-uses-vars': 'error', // required for `<script setup>`
    // other rules
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'vue/no-v-html': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off', // temporary during transition phase
    '@typescript-eslint/triple-slash-reference': 'off',
    'no-irregular-whitespace': 'off',
    'no-useless-escape': 'off',
    'vue/component-tags-order': ['error', { order: ['script', 'template', 'style'] }],
    'vue/attribute-hyphenation': ['error', 'never', { ignore: [] }],
    'vue/v-on-event-hyphenation': ['error', 'never'],
    'vue/multi-word-component-names': 'off',
    'vue/order-in-components': 'off', // off because we want to transition to setup anyway
    'vue/require-default-prop': 'off', // off because it's ugly when defining with a TS only `defineProps<{}>()` syntax
    'vue/v-slot-style': [
      'error',
      {
        atComponent: 'shorthand',
        default: 'shorthand',
        named: 'shorthand',
      },
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION', // e.g. 'is', 'v-is'
          'LIST_RENDERING', // e.g. 'v-for item in items'
          'CONDITIONALS', // e.g. 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
          'RENDER_MODIFIERS', // e.g. 'v-once', 'v-pre'
          'GLOBAL', // e.g. 'id'
          'UNIQUE', // e.g. 'ref', 'key'
          'TWO_WAY_BINDING', // e.g. 'v-model'
          'OTHER_DIRECTIVES', // e.g. 'v-custom-directive'
          'OTHER_ATTR', // e.g. 'custom-prop="foo"', 'v-bind:prop="foo"', ':prop="foo"'
          'EVENTS', // e.g. '@click="functionCall"', 'v-on="event"'
          'CONTENT', // e.g. 'v-text', 'v-html'
          'SLOT', // e.g. 'v-slot', 'slot'.
        ],
        alphabetical: false,
      },
    ],
  },
  globals: {
    defineProps: 'readonly', // required for `<script setup>`
    defineEmits: 'readonly', // required for `<script setup>`
  },
}
