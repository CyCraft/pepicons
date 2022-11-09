<script lang="ts" setup>
import { Pepicon } from '@pepicons/vue'
import { PepiconName } from 'pepicons'
import { computed, ref } from 'vue'
import { changeAlpha } from '../helpers/colorHelpers'

const props = withDefaults(
  defineProps<{
    icon?: PepiconName
    type?: 'pop' | 'print'
    color?: string
    backgroundColor?: string
    isActive?: boolean
    /**
     * The active color is always shown as 50% opaque.
     * The color applied will be `activeColor` ||  `backgroundColor`
     */
    activeColor?: string

    /**
     * The animation class to be applied on click.
     */
    animationClass?: string
    /**
     * The duration of the animation on click - needs 'animationClass' set as well to work.
     */
    animationDurationMs?: number
  }>(),
  { backgroundColor: 'mediumslateblue' },
)

const emit = defineEmits(['click'])

const activeStyle = computed(() => {
  if (!props.isActive) return ''
  const activeColor = props.activeColor || 'mediumslateblue' || props.backgroundColor

  return `box-shadow: 0 0 0 3px ${changeAlpha(activeColor, 0.5)}`
})

const isAnimating = ref(false)

function click() {
  isAnimating.value = true
  setTimeout(() => (isAnimating.value = false), props.animationDurationMs || 500)
  emit('click')
}
</script>
<template>
  <button
    :class="`icon-button reset-button`"
    :style="`background: ${backgroundColor}; ${activeStyle}`"
    @click="click"
  >
    <div class="_inner flex flex-center">
      <Pepicon
        v-if="icon"
        :class="`_icon ${isAnimating ? animationClass : ''}`"
        :name="icon"
        :type="type || 'print'"
        :color="color"
        :stroke="'black'"
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
