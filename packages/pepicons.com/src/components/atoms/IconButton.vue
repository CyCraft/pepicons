<template>
  <button
    :class="`icon-button reset-button ${isActive ? '_active' : ''}`"
    :style="`background: ${backgroundColor}; ${activeStyle}`"
    @click="$emit('click')"
  >
    <ColorRingSvg class="_inner" v-if="hasColorRing" />
    <div class="_inner flex flex-center">
      <Pepicon
        class="_icon"
        v-if="iconConfig && iconConfig.name"
        :name="iconConfig.name"
        :type="iconConfig.type"
        :color="iconConfig.color"
        :stroke="iconConfig.stroke"
        size="md"
      />
    </div>
  </button>
</template>

<style lang="sass">
.icon-button
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
import { defaultsIconConfig, IconConfig } from '../../types'
const { changeAlpha } = colors

export default defineComponent({
  name: 'IconButton',
  components: { ColorRingSvg, Pepicon },
  props: {
    backgroundColor: { type: String, default: 'white' },
    /**
     * @type {{ name?: string, type: 'pop' | 'print', color: string, stroke: string }}
     */
    iconConfig: {
      type: Object as PropType<IconConfig>,
      default: () => ({ ...defaultsIconConfig() }),
    },
    isActive: { type: Boolean },
    hasColorRing: { type: Boolean, default: false },
  },
  setup(props) {
    const activeStyle = computed(() =>
      !props.isActive
        ? ''
        : `box-shadow: 0 0 0 3px ${changeAlpha(
            props.iconConfig?.color || props.backgroundColor,
            0.5,
          )}`,
    )
    return { activeStyle }
  },
})
</script>
