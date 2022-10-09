<script lang="ts" setup>
import { PropType } from 'vue'
import Picker from './Picker.vue'
import Stack from './Stack.vue'
import { defaultsIconConfig, IconConfig } from '../types'
const props = defineProps({
  /**
   * @type {{ name?: string, type: 'pop' | 'print', color: string, stroke: string } & { isDarkMode: boolean }}
   */
  modelValue: {
    type: Object as PropType<Partial<IconConfig> & { isDarkMode: boolean }>,
    default: () => ({ ...defaultsIconConfig({ isDarkMode: false }) }),
  },
  /**
   * @type {{ name?: string, type: 'pop' | 'print', color: string, stroke: string }}
   */
  configComputed: {
    type: Object as PropType<Partial<IconConfig>>,
    default: () => ({ ...defaultsIconConfig() }),
  },
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <Stack class="pickers pa-xs" classes="justify-center">
    <Picker
      kind="type"
      :modelValue="modelValue"
      :configComputed="configComputed"
      @update:modelValue="(newVal) => $emit('update:modelValue', newVal)"
    />
    <Picker
      class="_middle-section"
      kind="color"
      :modelValue="modelValue"
      :configComputed="configComputed"
      @update:modelValue="(newVal) => $emit('update:modelValue', newVal)"
    />
    <Picker
      kind="background"
      :modelValue="modelValue"
      :configComputed="configComputed"
      @update:modelValue="(newVal) => $emit('update:modelValue', newVal)"
    />
  </Stack>
</template>

<style lang="sass">
@import '../css/variables.sass'
.pickers
  ._middle-section
    flex: 1
    order: 3
    +media-sm(flex, 1)
    +media-sm(order, unset)
</style>
