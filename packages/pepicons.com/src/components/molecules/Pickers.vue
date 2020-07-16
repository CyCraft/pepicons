<template>
  <div class="pickers flex justify-between">
    <Picker kind="type" :value="value" @input="(newVal) => $emit('input', newVal)" />
    <Picker kind="color" :value="value" @input="(newVal) => $emit('input', newVal)" />
    <Picker kind="background" :value="value" @input="(newVal) => $emit('input', newVal)" />
    <Picker kind="stroke" :value="value" @input="(newVal) => $emit('input', newVal)" />
  </div>
</template>

<style lang="sass">
// .pickers
</style>

<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from '@vue/composition-api'
import Picker from './Picker.vue'

export default defineComponent({
  name: 'Pickers',
  components: { Picker },
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
      }),
    },
  },
  setup(props) {
    return {}
  },
})
</script>
