<template>
  <button
    :class="`option-box reset-button ${isActive ? '_active' : ''}`"
    :style="`background: ${backgroundColor}; ${activeStyle}`"
    @click="$emit('click')"
  >
    <ColorRingSvg class="_inner" v-if="hasColorRing" />
    <div class="_inner flex flex-center">
      <Pepicon
        class="_icon"
        v-if="iconName"
        :name="iconName"
        :type="iconType"
        :color="iconColor"
        size="md"
      />
    </div>
  </button>
</template>

<style lang="sass">
.option-box
  border-radius: $border-radius
  width: 36px
  height: 36px
  position: relative
  transition: transform 100ms
  ._inner
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0
  &:active
    transform: scale(0.9)
</style>

<script lang="ts">
import { Pepicon } from 'vue-pepicons'
import ColorRingSvg from './ColorRingSvg.vue'
import { defineComponent, PropType, computed, ref, toRef, Ref } from '@vue/composition-api'
import { colors } from 'quasar'
const { changeAlpha } = colors

export default defineComponent({
  name: 'IconButton',
  components: { ColorRingSvg, Pepicon },
  props: {
    backgroundColor: { type: String, default: '#fff' },
    hasColorRing: { type: Boolean, default: false },
    iconName: { type: (String as unknown) as PropType<'refresh' | 'color-picker'> },
    iconType: { type: (String as unknown) as PropType<'pop' | 'print'> },
    iconColor: { type: String },
    isActive: { type: Boolean },
  },
  setup(props) {
    const activeStyle = computed(() =>
      !props.isActive
        ? ''
        : `box-shadow: 0 0 0 3px ${changeAlpha(props.iconColor || props.backgroundColor, 0.5)}`,
    )
    return { activeStyle }
  },
})
</script>
