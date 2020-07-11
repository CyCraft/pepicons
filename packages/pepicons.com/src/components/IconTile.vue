<template>
  <div class="icon-tile">
    <div class="_svg" v-html="svg" />
    <div class="_name">{{ name }}</div>
  </div>
</template>

<style lang="sass">
=flex-center
  display: flex
  justify-content: center
  align-items: center

.icon-tile
  background: white
  border-radius: $border-radius
  height: auto
  display: flex
  flex-direction: column
  align-items: center
  ._svg
    flex: 1
    width: 26px
    +flex-center
    color: red
    svg
      width: 100%
      height: 100%
  ._name
    height: 36px
    font-size: 12px
    width: 100%
    text-align: center
    +flex-center
</style>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
  name: 'IconGrid',
  props: {
    svg: { type: String },
    name: { type: String },
  },
  setup (props) {
    return {}
  },
})
</script>
