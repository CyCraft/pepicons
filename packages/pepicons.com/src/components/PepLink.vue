<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { pepiconSvgString } from 'pepicons'
import { Pepicon, PepiconName } from '@pepicons/vue'
import CompanyLogo from './CompanyLogo.vue'
import { defaultsIconConfig, IconConfig } from '../types'

export default defineComponent({
  name: 'PepLink',
  components: { CompanyLogo, Pepicon },
  props: {
    href: { type: String },
    content: { type: String },
    icon: { type: String as PropType<PepiconName | 'github' | undefined> },
    retroUnderline: { type: Boolean },
    /**
     * @type {{ name?: string, type: 'pop' | 'print', color: string, stroke: string }}
     */
    config: {
      type: Object as PropType<Partial<IconConfig>>,
      default: () => ({ ...defaultsIconConfig() }),
    },
  },
  setup(props) {
    const svgString = computed<string>(() =>
      pepiconSvgString({
        name: 'hand-point',
        color: props.config.color,
        type: props.config.type,
        stroke: props.config.stroke,
      }).replace(/\n/g, ''),
    )
    const customCursor = computed(() => {
      return `url("data:image/svg+xml,${encodeURI(svgString.value)}"), pointer`
    })

    return {
      customCursor,
    }
  },
})
</script>

<template>
  <a
    :style="{ cursor: customCursor }"
    :href="href"
    :class="`pep-link ${retroUnderline ? '_retro-underline' : ''} ${icon ? '_has-icon' : ''}`"
  >
    <template v-if="icon">
      <CompanyLogo v-if="icon === 'github'" name="github" size="sm" class="_icon" />
      <Pepicon v-else :name="icon" size="sm" class="_icon" type="pop" />
      <div class="mr-sm" />
    </template>
    <div>{{ content }}</div>
  </a>
</template>

<style lang="sass">
@import '../css/variables.sass'
.pep-link
  // resets
  text-decoration: none
  text-decoration-color: none
  &:focus
    outline: 0
    box-shadow: none
  // alignment
  display: flex
  align-items: center
  // typography
  &._has-icon
    font-weight: $medium
  // colors
  +C(color, letters)
.dark-mode .pep-link
  +C(color, white)


.pep-link ._icon
  +C(color, nightfall)
.dark-mode
  .pep-link ._icon
    +C(color, white)

.pep-link._retro-underline
  position: relative
  display: inline-block
  &::after, &::before
    content: ''
    position: absolute
    border-radius: 50px
    transform: rotate(181deg) translateY(-2px)
    transition: border-color 250ms
    width: 105%
  &::after
    bottom: 0
    left: -2px
    +C(border-top, black, 2px solid)
  &::before
    justify-content: bottom
    transform-origin: bottom
    bottom: 1px
    left: -2px
    +C(border-bottom, primary, 6px solid)
.dark-mode.pop-mode
  .pep-link._retro-underline
    &::after
      +C(border-top, none, 2px solid)
.dark-mode.print-mode
  .pep-link._retro-underline
    &::after
      +C(border-top, primary, 2px solid)
    &::before
      +C(border-bottom, black, 6px solid)
</style>
