<template>
  <div class="picker">
    <div class="text-subtitle1 text-capitalize">{{ title }}</div>
    <div v-if="type === 'color'" class="">
      <ColorBox color="primary" />
      <ColorBox color="secondary" />
      <ColorBox color="accent" />
      <ColorBox :colorRing="true" icon="color-picker" />
      <ColorBox :colorRing="true" icon="refresh" />
    </div>
  </div>
</template>

<style lang="sass">
// .picker
</style>

<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from '@vue/composition-api'
import ColorBox from './ColorBox.vue'

export default defineComponent({
  name: 'Picker',
  components: { ColorBox },
  props: {
    type: {
      type: (String as unknown) as PropType<'style' | 'color' | 'background'>,
      required: true,
    },
  },
  setup (props) {
    const title = props.type
    return { title }
  },
})
</script>
