<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { baseProps, pepiconProps } from '../component.ts'
const props = defineProps(Object.assign({}, baseProps, pepiconProps))

const IconComponent = computed(() => {
  if (props.type == null || props.name == null) {
    return null
  }
  return defineAsyncComponent(() => import(`../icons/${props.type}/${props.name}.ts`))
})

const iconProps = computed(() => {
  const p: Record<string, any> = { ...props }
  p.type = undefined
  p.name = undefined
  return p
})
</script>

<template>
  <component :is="IconComponent" v-bind="iconProps" />
</template>
