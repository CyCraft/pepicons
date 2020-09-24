<template>
  <div :class="`icon-tile ${darkMode ? 'bg-moonlight' : 'bg-white'}`">
    <Pepicon class="_svg" :name="name" :type="type" :color="color" :stroke="stroke" size="26px" />
    <div class="_name c-letters">{{ name }}</div>
  </div>
</template>

<style lang="sass">
=flex-center
  display: flex
  justify-content: center
  align-items: center

.icon-tile
  transition: background 250ms
  border-radius: $border-radius
  height: auto
  display: flex
  flex-direction: column
  align-items: center
  ._svg
    flex: 1
    svg
      transition: all 350ms
  ._name
    height: 36px
    font-size: 12px
    width: 100%
    text-align: center
    +flex-center
</style>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { Pepicon } from 'vue-pepicons'

export default defineComponent({
  name: 'IconTile',
  components: { Pepicon },
  props: {
    /**
     * @example 'airplane'
     */
    name: { type: String, required: true },
    color: { type: String, default: '#AB92F0' },
    type: { type: String, default: 'print' },
    stroke: { type: String, default: 'black' },
    darkMode: { type: Boolean },
  },
  setup() {
    return {}
  },
})
</script>
