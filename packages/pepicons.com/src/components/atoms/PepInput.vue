<template>
  <QInput class="pep-input" v-bind="propsToPass" v-on="eventsToPass">
    <template v-slot:prepend>
      <Pepicon name="loop" :color="color" />
    </template>
  </QInput>
</template>

<style lang="sass">
.pep-input
  .q-field__control
    transition: all 250ms
    border-radius: 16px
    background-color: white
  .q-field__control:before
    border: none
    transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1)
  .q-field__control:hover
    background-color: white
  &.q-field--focused
    .q-field__control
      background-color: white
.dark-mode .pep-input
  .q-field__control
    background-color: $c-moonlight
  .q-field__control:hover
    background-color: $c-moonlight
  &.q-field--focused
    .q-field__control
      background-color: $c-moonlight
</style>

<script lang="ts">
import { QInput } from 'quasar'
import { Pepicon } from 'vue-pepicons'
import { defineComponent, PropType, computed, ref, toRef, Ref } from '@vue/composition-api'

export default defineComponent({
  name: 'PepInput',
  components: { QInput, Pepicon },
  props: {
    value: { type: String, default: '' },
    color: { type: String, default: '#AB92F0' },
    isDarkMode: { type: Boolean },
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
