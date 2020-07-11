<template>
  <div :class="`color-box bg-${color} ${color === 'white' ? 'thin-border' : ''}`">
    <ColorRingSvg class="full-width full-height" v-if="colorRing" />
  </div>
</template>

<style lang="sass">
.color-box
  border-radius: $border-radius
  width: 36px
  height: 36px
</style>

<script lang="ts">
import ColorRingSvg from './ColorRingSvg.vue'
import { defineComponent, PropType, computed, ref, toRef, Ref } from '@vue/composition-api'

export default defineComponent({
  name: 'ColorBox',
  components: { ColorRingSvg },
  props: {
    color: { type: String },
    colorRing: { type: Boolean, default: false },
    icon: { type: (String as unknown) as PropType<'refresh' | 'color-picker'> },
  },
  setup (props) {
    return {}
  },
})
</script>
