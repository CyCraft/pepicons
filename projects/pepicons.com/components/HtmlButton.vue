<script lang="ts" setup>
import { Pepicon } from '@pepicons/vue'

const props = defineProps<{
  modelValue: boolean
  type: 'pop' | 'print' | 'pencil'
  color: string
  shadow?: string
  opacity?: number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', payload: boolean): void
}>()

function toggle() {
  emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <button
    :class="`html-button cursor-pointer ${modelValue ? '_expanded' : ''}`"
    @click="() => toggle()"
  >
    <Pepicon
      class="_icon"
      name="angle-left"
      :type="type"
      :color="color"
      :shadow="shadow"
      :opacity="opacity"
    />
    <Pepicon
      class="_icon"
      name="angle-right"
      :type="type"
      :color="color"
      :shadow="shadow"
      :opacity="opacity"
    />
  </button>
</template>

<style lang="sass" scoped>
@import '../css/variables.sass'

.html-button
  +reset-button()
  display: flex
  padding: $md
  ._icon
    transition: all 100ms ease-out
  &._expanded
    ._icon:first-child
      margin-right: $md
</style>
