![hero](https://github.com/CyCraft/pepicons/raw/dev/media/pepicons-hero.png?raw=true)

# 🥤 Pepicons

<a href="https://www.npmjs.com/package/pepicons"><img src="https://img.shields.io/npm/v/pepicons.svg" alt="Total Downloads"></a>
<a href="https://www.npmjs.com/package/pepicons"><img src="https://img.shields.io/npm/dw/pepicons.svg" alt="Latest Stable Version"></a>

Pepicons is an icon-set of around five hundred (and counting) retro icons inspired by the 80's.
Every icon available in 2 variants: Pop! and Print ❏

## Website & icons

[pepicons.com](https://pepicons.com)

## Installation & Usage

```
npm i pepicons
```

### Import `.svg` files

If your build tool allows importing direct SVGs, you can do so from via these import paths:

```js
// import what you need
import airplane from 'pepicons/svg/pop/airplane.svg'
// or
import airplane from 'pepicons/svg/print/airplane.svg'
```

### Import SVG as string

Import an SVG as string with Tree-Shaking:

```js
// import what you need
import { popAirplane, printAirplane } from 'pepicons'

console.log(popAirplane)
// prints:
// <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path fill-rule="evenodd" clip-rule="evenodd" d="..." fill="currentColor"/>
// </svg>
```

You can also import the exact same without the `pop/print` prefixes like so:

```js
// import what you need
import { airplane } from 'pepicons/pop'
// or
import { airplane } from 'pepicons/print'

console.log(airplane)
// prints:
// <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path fill-rule="evenodd" clip-rule="evenodd" d="..." fill="currentColor"/>
// </svg>
```

You can also import all icons at once in one big object:

```js
import { pop, print } from 'pepicons'

console.log(pop.airplane)
// prints:
// <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path fill-rule="evenodd" clip-rule="evenodd" d="..." fill="currentColor"/>
// </svg>
```

### TypeScript protection from spelling mistakes

You can import the `PepiconName` type which is a string literal with all possible Pepicon names:

```ts
import { PepiconName, pop } from 'pepicons'

export function getSvg(name: PepiconName): string {
  // PepiconName
  //    ↓
  // 'airplane' | 'angle-down' | ...

  return pop[name]
}
```

If you need it, there's also an array with all possible pepicon names you can import:

```js
import { pepiconArray } from 'pepicons'

console.log(pepiconArray)
// prints:
// ['airplane', 'angle-down', ...]
```

## @pepicons/vue (Vue 3)

See [packages/vue](/packages/vue)

## Motivation

Check out this blog post to understand our motivation for creating Pepicons:

- English: [Pepicons: Retro Icon Set now available for Designers and Coders](https://lucaban.medium.com/pepicons-retro-icon-set-now-available-for-designers-and-coders-40db866a7460)
- Japanese: [Pepicons: 80 年代好きにはたまらないアイコンセットが登場](https://lucaban.medium.com/pepicons-80年代好きにはたまらないアイコンセットが登場-6e417dcf4a7f)

## License

This icon set falls under CREATIVE COMMONS ATTRIBUTION 4.0 INTERNATIONAL LICENSE.

You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

See the full LICENSE details at [LICENSE](LICENSE).
