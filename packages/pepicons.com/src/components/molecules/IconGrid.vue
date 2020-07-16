<template>
  <div class="icon-grid">
    <IconTile
      v-for="name in iconNames"
      :key="name"
      v-bind="{ name, color, type, stroke, darkMode }"
    />
  </div>
</template>

<style lang="sass">

.icon-grid
  display: grid
  min-width: 500px
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr))
  grid-auto-rows: 100px
  grid-gap: $lg
  > *
    width: 100%
    height: 100%
</style>

<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api'
import { pop, print } from 'pepicons'
import IconTile from '../atoms/IconTile.vue'

export default defineComponent({
  name: 'IconGrid',
  components: { IconTile },
  props: {
    type: {
      type: String as PropType<'pop' | 'print'>,
      default: 'pop',
    },
    color: { type: String },
    stroke: { type: String, default: 'black' },
    darkMode: { type: Boolean },
  },
  setup(props) {
    const iconSet = computed(() => (props.type === 'print' ? print : pop))
    const iconNames = computed(() => Object.keys(iconSet.value))

    return { iconNames }
  },
})
</script>
