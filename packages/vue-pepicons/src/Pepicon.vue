<template>
  <div
    :class="`pepicon pepicon--${size}`"
    :style="color ? `color: ${color}` : undefined"
    v-html="svg"
  />
</template>

<style>
.pepicon--sm {
  width: 20px;
  height: 20px;
}
.pepicon--md {
  width: 24px;
  height: 24px;
}
.pepicon--lg {
  width: 30px;
  height: 30px;
}
.pepicon--xl {
  width: 36px;
  height: 36px;
}
.pepicon > svg {
  width: 100%;
  height: 100%;
}
</style>

<script lang="js">
import { pepiconSvgString } from 'pepicons'

export default {
  name: 'Pepicon',
  props: {
    /**
     * @type { PepiconPop | PepiconPrint }
     * @example 'color-picker'
     */
    name: { type: String, required: true },
    /**
     * @type { 'pop' | 'print' }
     */
    type: { type: String, default: 'print' },
    /**
     * You can pass a color which will be bound with :style="`color: ${color}`", or you can just manually apply a color via style or a class
     */
    color: { type: String },
    /**
     * The stroke color is only applied on 'print' type icons.
     */
    stroke: { type: String, default: 'black' },
    /**
     * You can set the icon size to sm/md/lg/xl, or you can just manually apply a width & height via style or a class
     * @type { 'sm' | 'md' | 'lg' | 'xl' }
     */
    size: { type: String, default: 'md' },
  },
  computed: {
    svg () {
      const { name, type, stroke } = this
      return pepiconSvgString(name, type, { stroke })
    },
  },
}
</script>
