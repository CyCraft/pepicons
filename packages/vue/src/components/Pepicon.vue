<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { baseProps, pepiconProps } from '../component'
import { popIcons, printIcons } from '../icons'

const props = defineProps(Object.assign({}, baseProps, pepiconProps))

const IconComponent = computed(() => {
  const icons: Record<string, any> = props.type === 'pop' ? popIcons : printIcons
  const icon = icons[props.name || '']
  if (!icon) {
    throw new Error(`inexistent Pepicon "${props.name}" for props: ${JSON.stringify(props)}`)
  }
  return defineAsyncComponent(icon)
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
