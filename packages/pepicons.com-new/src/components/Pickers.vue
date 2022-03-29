<template>
  <Stack class="pickers pa-xs" classes="justify-center">
    <Picker
      kind="type"
      :value="value"
      @input="(newVal) => $emit('input', newVal)"
      :configComputed="configComputed"
    />
    <Picker
      class="_middle-section"
      kind="color"
      :value="value"
      @input="(newVal) => $emit('input', newVal)"
      :configComputed="configComputed"
    />
    <Picker
      kind="background"
      :value="value"
      @input="(newVal) => $emit('input', newVal)"
      :configComputed="configComputed"
    />
    <!-- <Picker kind="stroke" :value="value" @input="(newVal) => $emit('input', newVal)" :configComputed="configComputed" /> -->
  </Stack>
</template>

<style lang="sass">
@import '../css/variables.sass'
.pickers
  ._middle-section
    flex: unset
    order: 3
    +media-sm(flex, 1)
    +media-sm(order, unset)
</style>

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
    value: {
      type: Object as PropType<IconConfig & { isDarkMode: boolean }>,
      default: () => ({ ...defaultsIconConfig({ isDarkMode: false }) }),
    },
    /**
     * @type {{ name?: string, type: 'pop' | 'print', color: string, stroke: string }}
     */
    configComputed: {
      type: Object as PropType<IconConfig>,
      default: () => ({ ...defaultsIconConfig() }),
    },
  },
  setup() {
    return {}
  },
})
</script>
