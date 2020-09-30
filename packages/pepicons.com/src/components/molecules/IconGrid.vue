<template>
  <transition-group class="icon-grid" name="anim-grid" tag="div">
    <div class="anim-grid-item" v-for="name in iconNames" :key="name">
      <IconTile v-bind="{ name, color, type, stroke }" />
    </div>
  </transition-group>
</template>

<style lang="sass">

.icon-grid
  display: grid
  min-width: 500px
  justify-content: start
  grid-template-columns: repeat(auto-fit, 100px)
  grid-auto-rows: 100px
  grid-gap: $lg
.anim-grid-item
  width: 100px
  height: 100px
  transition: all 250ms
  opacity: 1
  > *
    height: 100%
    width: 100%
.anim-grid-enter, .anim-grid-leave-to
  opacity: 0
.anim-grid-leave-active
  display: none
</style>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import IconTile from '../atoms/IconTile.vue'

export default defineComponent({
  name: 'IconGrid',
  components: { IconTile },
  props: {
    iconNames: { type: Array as PropType<string[]> },
    type: {
      type: String as PropType<'pop' | 'print'>,
      default: 'pop',
    },
    color: { type: String },
    stroke: { type: String, default: 'black' },
    filter: { type: String },
  },
})
</script>
