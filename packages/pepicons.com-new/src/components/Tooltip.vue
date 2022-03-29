<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  props: {
    text: { type: String, default: 'Pop!' },
    backgroundColor: { type: String, default: '#000' },
    textColor: { type: String, default: '#fff' },
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
    width: 100%
    bottom: 125%
    text-align: center
    box-sizing: border-box
    display: flex
    justify-content: center

    content: attr(data-tooltip)
    color: v-bind(textColor)
    background: v-bind(backgroundColor)
    padding: 8px
    border-radius: 1em
    white-space: nowrap

    visibility: hidden
    opacity: 0
    transform: translateY(10px)
    transition: all 400ms
    // transition: opacity 500ms, transform 500ms
  &:hover::after
    width: 100%
    opacity: 1
    visibility: visible
    transform: translateY(0)
</style>
