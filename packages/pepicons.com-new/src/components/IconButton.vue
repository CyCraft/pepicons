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
@import '../css/variables.sass'
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
import { defaultsIconConfig, IconConfig } from '../types'
// import { colors } from 'quasar'
// const { changeAlpha } = colors
import { colors } from '../helpers/colors'
import { changeAlpha } from '../helpers/colorHelpers'

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
