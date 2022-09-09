<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Picker from './Picker.vue'
import Stack from './Stack.vue'
import { defaultsIconConfig, IconConfig } from '../types'

export default defineComponent({
  name: 'Pickers',
  components: { Picker, Stack },
  props: {
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
  },
  setup() {
    return {}
  },
})
</script>

<template>
  <Stack class="pickers pa-xs" classes="justify-center">
    <Picker
      kind="type"
      :modelValue="modelValue"
      @update:modelValue="(newVal) => $emit('update:modelValue', newVal)"
      :configComputed="configComputed"
    />
    <Picker
      class="_middle-section"
      kind="color"
      :modelValue="modelValue"
      @update:modelValue="(newVal) => $emit('update:modelValue', newVal)"
      :configComputed="configComputed"
    />
    <Picker
      kind="background"
      :modelValue="modelValue"
      @update:modelValue="(newVal) => $emit('update:modelValue', newVal)"
      :configComputed="configComputed"
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
