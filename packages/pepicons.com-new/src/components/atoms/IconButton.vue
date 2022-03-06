<template>
  <button
    :class="`icon-button reset-button ${isActive ? '_active' : ''}`"
    :style="`background: ${backgroundColor}; ${activeStyle}`"
    @click="click"
  >
    <ColorRingSvg class="_inner" v-if="hasColorRing" />
    <div class="_inner flex flex-center">
      <Pepicon
        :class="`_icon ${isAnimating ? animationClass : ''}`"
        v-if="iconConfig && iconConfig.name"
        :name="iconConfig.name"
        :type="iconConfig.type"
        :color="iconConfig.color"
        :stroke="iconConfig.stroke"
        size="md"
      />
      {{ iconConfig }}
    </div>
    <slot></slot>
  </button>
</template>

<style lang="sass">
@import '../../css/variables.sass'
.icon-button
  border-radius: $border-radius
  width: 36px
  height: 36px
  position: relative
  transition: transform 100ms
  ._inner
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0
  &:active
    transform: scale(0.9)
</style>

<script lang="ts">
import { Pepicon } from '@pepicons/vue'
import ColorRingSvg from './ColorRingSvg.vue'
import { defineComponent, PropType, computed, ref, toRef, Ref, nextTick } from 'vue'
import { defaultsIconConfig, IconConfig } from '../../types'
// import { colors } from 'quasar'
// const { changeAlpha } = colors
const changeAlpha = function (color: string, offset: number) {
  if (typeof color !== 'string') {
    throw new TypeError('Expected a string as color')
  }

  if (offset === void 0 || offset < -1 || offset > 1) {
    throw new TypeError('Expected offset to be between -1 and 1')
  }

  const { r, g, b, a } = textToRgb(color)
  const alpha = a !== void 0 ? a / 100 : 0
  return rgbToHex({
    r,
    g,
    b,
    a: Math.round(Math.min(1, Math.max(0, alpha + offset)) * 100),
  })
}
const reRGBA = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/
const textToRgb = function (str: string) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }

  const color = str.replace(/ /g, '')
  const m = reRGBA.exec(color)

  if (m === null) {
    return hexToRgb(color)
  }

  const rgb = {
    r: Math.min(255, parseInt(m[2], 10)),
    g: Math.min(255, parseInt(m[3], 10)),
    b: Math.min(255, parseInt(m[4], 10)),
  }

  if (m[1]) {
    const alpha = parseFloat(m[5])
    rgb.a = Math.min(1, isNaN(alpha) === true ? 1 : alpha) * 100
  }

  return rgb
}

const rgbToHex = function ({ r, g, b, a }) {
  const alpha = a !== void 0
  r = Math.round(r)
  g = Math.round(g)
  b = Math.round(b)

  if (r > 255 || g > 255 || b > 255 || (alpha && a > 100)) {
    throw new TypeError('Expected 3 numbers below 256 (and optionally one below 100)')
  }

  a = alpha ? (Math.round((255 * a) / 100) | (1 << 8)).toString(16).slice(1) : ''
  return '#' + (b | (g << 8) | (r << 16) | (1 << 24)).toString(16).slice(1) + a
}

const hexToRgb = function (hex: string) {
  if (typeof hex !== 'string') {
    throw new TypeError('Expected a string')
  }

  hex = hex.replace(/^#/, '')

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  } else if (hex.length === 4) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]
  }

  const num = parseInt(hex, 16)
  return hex.length > 6
    ? {
        r: (num >> 24) & 255,
        g: (num >> 16) & 255,
        b: (num >> 8) & 255,
        a: Math.round((num & 255) / 2.55),
      }
    : {
        r: num >> 16,
        g: (num >> 8) & 255,
        b: num & 255,
      }
}

export default defineComponent({
  name: 'IconButton',
  components: { ColorRingSvg, Pepicon },
  props: {
    backgroundColor: { type: String, default: 'white' },
    /**
     * @type {{ name?: string, type: 'pop' | 'print', color: string, stroke: string }}
     */
    iconConfig: {
      type: Object as PropType<IconConfig>,
      default: () => ({ ...defaultsIconConfig() }),
    },
    isActive: { type: Boolean },
    /**
     * The active color is always shown as 50% opaque.
     * The color applied will be `activeColor` || `iconConfig.color` || `backgroundColor`
     */
    activeColor: { type: String },
    hasColorRing: { type: Boolean, default: false },
    /**
     * The animation class to be applied on click.
     */
    animationClass: { type: String },
    /**
     * The duration of the animation on click - needs 'animationClass' set as well to work.
     */
    animationDurationMs: { type: Number, default: 500 },
  },
  setup(props, { emit }) {
    const activeStyle = computed(() => {
      if (!props.isActive) return ''
      const activeColor = props.activeColor || props.iconConfig?.color || props.backgroundColor
      return `box-shadow: 0 0 0 3px ${changeAlpha(activeColor, 0.5)}`
    })

    const isAnimating = ref(false)
    function click() {
      isAnimating.value = true
      setTimeout(() => (isAnimating.value = false), props.animationDurationMs)
      emit('click')
    }

    return { activeStyle, click, isAnimating }
  },
})
</script>
