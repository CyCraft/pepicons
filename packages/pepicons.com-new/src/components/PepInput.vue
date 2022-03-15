<template>
  <!-- <QInput class="pep-input" v-bind="propsToPass" v-on="eventsToPass">
    <template v-slot:prepend v-if="iconConfig">
      <Pepicon name="airplane" v-bind="iconConfig" />
    </template>
  </QInput> -->
  <div class="_wrapper">
    <!-- TODO: Fix input  -->
    <Pepicon style="position: absolute; top: 0" name="airplane" v-bind="iconConfig" />
    <input class="pep-input" v-bind="$attrs" :value="value" />
  </div>
</template>

<style lang="sass">
@import '../css/variables.sass'
._wrapper
  position: relative
// .pep-input

// .dark-mode .pep-input

// .pep-input
//   .q-field__control
//     transition: background-color 500ms
//     border-radius: 16px
//     +C(background-color, white)
//   .q-field__control:before
//     border: none
//     transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1)
//   .q-field__control:hover
//     +C(background-color, white)
//   &.q-field--focused
//     .q-field__control
//       +C(background-color, white)
// .dark-mode .pep-input
//   .q-field__control
//     +C(background-color, moonlight)
//   .q-field__control:hover
//     +C(background-color, moonlight)
//   &.q-field--focused
//     .q-field__control
//       +C(background-color, moonlight)
</style>

<script lang="ts">
// import { QInput } from 'quasar'
import { Pepicon } from '@pepicons/vue'
import { defineComponent, PropType, computed, ref, toRef, Ref } from 'vue'
import { defaultsIconConfig, IconConfig } from '../types'

export default defineComponent({
  name: 'PepInput',
  components: { Pepicon },
  props: {
    value: { type: String, default: '' },
    color: { type: String, default: '#AB92F0' },
    /**
     * @type {{ name?: string, type: 'pop' | 'print', color: string, stroke: string }}
     */
    iconConfig: {
      type: Object as PropType<IconConfig>,
      default: () => ({ ...defaultsIconConfig() }),
    },
  },
  setup(props, { emit }) {
    return {}
  },
})
</script>
