<script lang="ts" setup>
import { Pepicon } from '@pepicons/vue'
import { PropType } from 'vue'
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  type: { type: String as PropType<'pop' | 'print' | undefined> },
  color: { type: String },
  stroke: { type: String },
})
function toggle() {
  emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <button :class="`html-button ${modelValue ? '_expanded' : ''}`" @click="toggle">
    <Pepicon class="_icon" name="angle-left" :type="type" :color="color" :stroke="stroke" />
    <Pepicon class="_icon" name="angle-right" :type="type" :color="color" :stroke="stroke" />
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
