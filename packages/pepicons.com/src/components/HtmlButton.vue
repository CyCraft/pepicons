<script lang="ts">
import { Pepicon } from '@pepicons/vue'
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'HtmlButton',
  components: { Pepicon },
  emits: ['update:modelValue'],
  props: {
    modelValue: { type: Boolean, default: false },
    type: { type: String as PropType<'pop' | 'print' | undefined> },
    color: { type: String },
    stroke: { type: String },
  },
  setup(props, { emit }) {
    function toggle() {
      emit('update:modelValue', !props.modelValue)
    }
    return { toggle }
  },
})
</script>

<template>
  <button :class="`html-button ${modelValue ? '_expanded' : ''}`" @click="toggle">
    <Pepicon class="_icon" name="angle-left" :type="type" :color="color" :stroke="stroke" />
    <Pepicon class="_icon" name="angle-right" :type="type" :color="color" :stroke="stroke" />
  </button>
</template>

<style lang="sass" scoped>
@import '../css/variables.sass'

.html-button
  +reset-button()
  display: flex
  padding: $md
  ._icon
    transition: all 100ms ease-out
  &._expanded
    ._icon:first-child
      margin-right: $md
</style>
