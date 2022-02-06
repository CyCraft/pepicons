![hero](https://github.com/CyCraft/pepicons/raw/dev/media/pepicons-hero.png?raw=true)

> @deprecated — use [@pepicons/vue](https://npmjs.com/@pepicons/vue) instead

# vue-pepicons (Vue 3)

Pepicons is an icon-set of over one hundred retro icons inspired by the 80's.
Every icon available in 2 variants: Pop! and Print ❏

Vue-pepicons is the Vue wrapper for this icon library. Only supports Vue 3!

## Installation & Usage

```
npm i vue-pepicons
```

You must import the Pepicon component locally wherever you want to use them, as per the example below:

```js
// import what you need
import { Pepicon } from 'vue-pepicons'

// add to local components where you use it:
export default {
  components: { Pepicon },
}
```

We do not support Vue's `install(Plugin)` out of principle: Anything that is "auto-magical" is not considered good practice; It's more difficult to trace down where a component is coming from.

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
