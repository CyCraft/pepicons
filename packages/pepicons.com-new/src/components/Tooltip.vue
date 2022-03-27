<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  props: {
    text: { type: String, default: 'Pop!' },
    backgroundColor: { type: String, default: '#000' },
    textColor: { type: String, default: '#fff' },
  },
  setup(props) {
    const text = computed(() => props.text)
    return { text }
  },
})
</script>
<template>
  <span :data-tooltip="text">
    <slot />
  </span>
</template>

<style lang="sass">


[data-tooltip]
  position: relative
  cursor: default
  &:after
    position: absolute
    width: max-content
    // left: calc(50% )
    bottom: 100%
    text-align: center
    box-sizing: border-box
    display: flex
    justify-content: center

    content: attr(data-tooltip)
    color: v-bind(textColor)
    background: v-bind(backgroundColor)
    padding: 8px
    border-radius: 1em
    font-weight: bold
    white-space: nowrap

    visibility: hidden
    opacity: 0
    transform: translateY(10px)
    transition: all 400ms
    // transition: opacity 500ms, transform 500ms
  &:hover::after
    opacity: 1
    visibility: visible
    transform: translateY(0)
</style>
