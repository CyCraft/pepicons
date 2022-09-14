<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from 'vue'
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
    const customCursor = computed(
      () => {
        const url = 'https://colorfulcast.com/og-hero.jpg'
        return `url('${url}')`
      },
      // pepiconSvgString({ name: 'airplane', type: 'pop', color: '#F092AD' }),
    )
    return {
      customCursor,
      pepiconSvgString,
      svg: `data:image/svg +
      xml,%3Csvgxmlns='http://www.w3.org/2000/svg'viewBox='00512512'%3E%3Cpathd='M224%20387.814V512L32320l192-192v126.912C447.375260.152437.794103.016380.930521.287151.707491.48394.785224387.814z'/%3E%3C/svg%3E`,
    }
  },
})
</script>

<template>
  <a
    :style="`cursor: url(${svg});`"
    :href="href"
    :class="`pep-link ${retroUnderline ? '_retro-underline' : ''} ${icon ? '_has-icon' : ''}`"
  >
    {{ customCursor }}
    <template v-if="icon">
      <!-- <CompanyLogo v-if="icon === 'github'" name="github" size="sm" class="_icon" />
      <Pepicon v-else :name="icon" size="sm" class="_icon" type="pop" />
      <div class="mr-sm" /> -->
      <Pepicon v-bind="config" name="open" />
    </template>
    <div>{{ content }}</div>
  </a>
</template>

<style lang="sass">
@import '../css/variables.sass'
.pep-link
  // cursor: url(v-bind(customCursor))
  background: v-bind(customCursor)
  // resets
  text-decoration: none
  text-decoration-color: none
  &:focus
    outline: 0
    box-shadow: none
  // cursor: pointer
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
