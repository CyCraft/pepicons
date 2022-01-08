<template>
  <div
    :style="{
      'display': 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    }"
    v-html="svg"
  />
</template>

<script lang="ts" setup>
import { defineComponent, computed } from 'vue'
import { pepiconSvgString } from 'pepicons'
import { PepiconProps } from './PepiconProps'

// stuck at:
// https://github.com/vuejs/vue-next/issues/4294

const props = withDefaults(defineProps<PepiconProps>(), {
  type: 'print',
  stroke: 'black',
  size: 'md',
})

defineComponent({ name: 'Pepicon' })

const svg = computed(() => {
  return pepiconSvgString({
    name: props.name,
    type: props.type,
    color: props.color,
    opacity: props.opacity,
    size: props.size,
    stroke: props.stroke,
  })
})
</script>
