<template>
  <button @click="toggle" :class="`html-button ${value ? '_expanded' : ''}`">
    <Pepicon class="_icon" name="angle-left" :type="kind" :color="color" :stroke="stroke" />
    <Pepicon class="_icon" name="angle-right" :type="kind" :color="color" :stroke="stroke" />
  </button>
</template>

<style lang="sass" scoped>
// $
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

<script lang="ts">
import { Pepicon } from '@pepicons/vue'
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'HtmlButton',
  components: { Pepicon },
  props: {
    value: { type: Boolean, default: false },
    kind: { type: String as PropType<'pop' | 'print' | undefined> },
    color: { type: String },
    stroke: { type: String },
  },
  setup(props, { emit }) {
    function toggle() {
      emit('input', props.value)
    }
    return { toggle }
  },
})
</script>
