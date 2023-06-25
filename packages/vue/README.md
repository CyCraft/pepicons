![hero](https://github.com/CyCraft/pepicons/raw/dev/media/pepicons-hero.png?raw=true)

# 🥤 @pepicons/vue (Vue 3)

<a href="https://www.npmjs.com/package/@pepicons/vue"><img src="https://img.shields.io/npm/v/@pepicons/vue.svg" alt="Total Downloads"></a>
<a href="https://www.npmjs.com/package/@pepicons/vue"><img src="https://img.shields.io/npm/dw/@pepicons/vue.svg" alt="Latest Stable Version"></a>

Pepicons is an icon-set of around five hundred (and counting) retro icons inspired by the 80's.
Every icon available in 2 variants: Pop! and Print ❏

@pepicons/vue is the Vue wrapper for this icon library. Only supports Vue 3!

## Installation & Usage

```
npm i @pepicons/vue
```

### Import and use any icon dynamically (no tree-shaking)

You must import the Pepicon component locally wherever you want to use them, as per the example below:

```js
import { Pepicon } from '@pepicons/vue'
```

We do not support Vue's `install(Plugin)` out of principle: Anything that is "auto-magical" is not considered good practice; It's more difficult to trace down where a component is coming from.

Using `Pepicon` component will use the `async` version of the icons, which means each icon is defined as an async Vue component, and loaded on demand when it's rendered. However, please note that for better tree-shaking you will need to import icons individually (see below).

### Import and use just the icons you need (tree-shaking)

To properly tree-shake however, and prevent all Pepicons from ending up in your bundle, you must import the icons you need individually, as per the example below:

```js
import { FaceSmiling } from '@pepicons/vue/pop'
import { FaceSmiling } from '@pepicons/vue/pencil'
import { FaceSmiling } from '@pepicons/vue/print'

// another alternative
import { PopFaceSmiling, PencilFaceSmiling, PrintFaceSmiling } from '@pepicons/vue/icons'
```

## pepicons (TypeScript & SVGs)

See [packages/pepicons](/packages/pepicons)

## Website & icons

[pepicons.com](https://pepicons.com)

## Motivation

Check out this blog post to understand our motivation for creating Pepicons:

- English: [Pepicons: Retro Icon Set now available for Designers and Coders](https://lucaban.medium.com/pepicons-retro-icon-set-now-available-for-designers-and-coders-40db866a7460)
- Japanese: [Pepicons: 80 年代好きにはたまらないアイコンセットが登場](https://lucaban.medium.com/pepicons-80年代好きにはたまらないアイコンセットが登場-6e417dcf4a7f)

## License

This icon set falls under CREATIVE COMMONS ATTRIBUTION 4.0 INTERNATIONAL LICENSE.

You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

See the full LICENSE details at [LICENSE](LICENSE).
