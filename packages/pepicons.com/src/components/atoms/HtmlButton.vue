<template>
  <button @click="toggle" :class="`html-button ${value ? '_expanded' : ''}`">
    <Pepicon class="_icon" name="angle-left" :type="type" :color="color" :stroke="stroke" />
    <Pepicon class="_icon" name="angle-right" :type="type" :color="color" :stroke="stroke" />
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

<script>
import { Pepicon } from 'vue-pepicons'

export default {
  name: 'HtmlButton',
  components: { Pepicon },
  props: {
    value: { type: Boolean, default: false },
    type: String,
    color: String,
    stroke: String,
  },
  methods: {
    toggle() {
      this.$emit('input', !this.value)
    },
  },
}
</script>
