<script lang="ts" setup>
const props = defineProps<{
  text: string
  backgroundColor: string
  textColor: string
}>()
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
    left: 50%
    bottom: 125%
    transform: translateY(10px) translateX(-50%)
    width: max-content
    text-align: center
    box-sizing: border-box

    content: attr(data-tooltip)
    color: v-bind(textColor)
    background: v-bind(backgroundColor)
    padding: 8px
    border-radius: 1em
    white-space: nowrap

    visibility: hidden
    opacity: 0
    transition: all 400ms
    // transition: opacity 500ms, transform 500ms
  &:hover::after
    width: max-content
    opacity: 1
    visibility: visible
    transform: translateY(0) translateX(-50%)
</style>
