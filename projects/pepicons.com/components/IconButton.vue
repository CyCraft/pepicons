<script lang="ts" setup>
import { Pepicon } from '@pepicons/vue'
import { PepiconName } from 'pepicons'
import { computed, ref } from 'vue'
import { changeAlpha } from '../helpers/colorHelpers'

const props = defineProps<{
  /** the background color of this button */
  backgroundColor: string
  /** (optional) will show an icon in the button */
  icon?: PepiconName
  /** (optional) the icon type of the icon in the button */
  type?: 'pop' | 'print' | 'pencil'
  /** (optional) the color of the icon in the button */
  color?: string
  /** (optional) the shadow of the icon in the button */
  shadow?: string
  /** (optional) the opacity of the icon in the button */
  opacity?: number
  /** (optional) if the button is currently active, it has an active outline */
  isActive?: boolean
  /**
   * (optional) The active color is always shown as 50% opaque.
   * defaults to `props.color || props.backgroundColor`
   */
  activeColor?: string
  /** (optional) The animation to be applied on click */
  animation?: { class: string; duration: number }
}>()

const emit = defineEmits(['click'])

const activeStyle = computed(() => {
  if (!props.isActive) return ''
  const activeColor = props.activeColor || props.color || props.backgroundColor

  return `box-shadow: 0 0 0 3px ${changeAlpha(activeColor, 0.5)}`
})

const isAnimating = ref(false)

function click() {
  isAnimating.value = true
  setTimeout(() => (isAnimating.value = false), props.animation?.duration || 500)
  emit('click')
}
</script>

<template>
  <button
    :class="`icon-button reset-button cursor-pointer`"
    :style="`background: ${backgroundColor}; ${activeStyle}`"
    @click="click"
  >
    <div class="_inner flex flex-center">
      <Pepicon
        v-if="icon"
        :class="`_icon ${isAnimating ? animation?.class : ''}`"
        :name="icon"
        :type="type || 'print'"
        :color="color"
        :shadow="shadow"
        :opacity="opacity"
        size="md"
      />
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
._random-color-active
  outline: 2px solid red
</style>
