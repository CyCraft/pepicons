<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { baseProps, pepiconProps } from '../component'
import { pencilIcons, popIcons, printIcons } from '../icons'

const props = defineProps(Object.assign({}, baseProps, pepiconProps))

/**
 * TODO: Is it possible to not have to import these big dictionaries:
 * `pencilIcons, popIcons, printIcons`
 * But instead async import directly in this computed function?
 * For this we'll need to use `computedAsync` from `@vueuse/core` though!
 */
const IconComponent = computed(() => {
  const icons: Record<string, any> = {
    print: printIcons,
    pop: popIcons,
    pencil: pencilIcons,
  }[props.type]
  const iconImportFn = icons[props.name]
  if (!iconImportFn) {
    throw new Error(`inexistent Pepicon "${props.name}" for props: ${JSON.stringify(props)}`)
  }
  return defineAsyncComponent(iconImportFn)
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
