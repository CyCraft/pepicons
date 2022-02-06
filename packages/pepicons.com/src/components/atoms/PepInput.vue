<template>
  <QInput class="pep-input" v-bind="propsToPass" v-on="eventsToPass">
    <template v-slot:prepend v-if="iconConfig">
      <Pepicon v-bind="iconConfig" />
    </template>
  </QInput>
</template>

<style lang="sass">
// $
.pep-input
  .q-field__control
    transition: background-color 500ms
    border-radius: 16px
    +C(background-color, white)
  .q-field__control:before
    border: none
    transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1)
  .q-field__control:hover
    +C(background-color, white)
  &.q-field--focused
    .q-field__control
      +C(background-color, white)
.dark-mode .pep-input
  .q-field__control
    +C(background-color, moonlight)
  .q-field__control:hover
    +C(background-color, moonlight)
  &.q-field--focused
    .q-field__control
      +C(background-color, moonlight)
</style>

<script lang="ts">
import { QInput } from 'quasar'
import { Pepicon } from '@pepicons/vue'
import { defineComponent, PropType, computed, ref, toRef, Ref } from '@vue/composition-api'
import { defaultsIconConfig, IconConfig } from '../../types'

export default defineComponent({
  name: 'PepInput',
  components: { QInput, Pepicon },
  props: {
    value: { type: String, default: '' },
    color: { type: String, default: '#AB92F0' },
    isDarkMode: { type: Boolean },
    /**
     * @type {{ name?: string, type: 'pop' | 'print', color: string, stroke: string }}
     */
    iconConfig: {
      type: Object as PropType<IconConfig>,
      default: () => ({ ...defaultsIconConfig() }),
    },
  },
  setup(props, { attrs, listeners, emit }) {
    const propsToPass = computed(() => ({
      ...attrs,
      outlined: true,
      color: props.color,
      value: props.value,
      dark: props.isDarkMode,
    }))
    const eventsToPass = {
      ...listeners,
    }

    return { propsToPass, eventsToPass }
  },
})
</script>
