<template>
  <Stack class="pickers pa-xs" classes="justify-center">
    <Picker kind="type" :value="value" @input="(newVal) => $emit('input', newVal)" />
    <Picker
      class="_middle-section"
      kind="color"
      :value="value"
      @input="(newVal) => $emit('input', newVal)"
    />
    <Picker kind="background" :value="value" @input="(newVal) => $emit('input', newVal)" />
    <!-- <Picker kind="stroke" :value="value" @input="(newVal) => $emit('input', newVal)" /> -->
  </Stack>
</template>

<style lang="sass">
//$
.pickers
  ._middle-section
    flex: unset
    order: 3
    +media-sm(flex, 1)
    +media-sm(order, unset)
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Picker from './Picker.vue'
import Stack from '../atoms/Stack.vue'

export default defineComponent({
  name: 'Pickers',
  components: { Picker, Stack },
  props: {
    /**
     * @type {{ type: 'pop' | 'print', color: string, background: string, stroke: string }}
     */
    value: {
      type: Object,
      default: () => ({
        type: 'pop',
        color: 'black',
        background: 'white',
        stroke: 'black',
      }),
    },
  },
  setup() {
    return {}
  },
})
</script>
