<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref, watch } from 'vue'
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
    watch(
      () => props.config,
      (newVal) => {
        typeInner.value = newVal.type
        colorInner.value = newVal.color?.replace(/#/g, '%23')
      },
    )
    const typeInner = ref<string | undefined>(props.config.type)
    const colorInner = ref<string | undefined>(props.config.color?.replace(/#/g, '%23'))
    const customCursor = computed(() => {
      if (typeInner.value === 'pop') {
        return `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.7071 10.7071C10.3166 11.0976 9.68342 11.0976 9.29289 10.7071C8.90237 10.3166 8.90237 9.68342 9.29289 9.29289L15.2929 3.29289C15.6834 2.90237 16.3166 2.90237 16.7071 3.29289C17.0976 3.68342 17.0976 4.31658 16.7071 4.70711L10.7071 10.7071Z' fill='${colorInner.value}'/%3E%3Cpath d='M15 15V11.5C15 10.9477 15.4477 10.5 16 10.5C16.5523 10.5 17 10.9477 17 11.5V16C17 16.5523 16.5523 17 16 17H4C3.44772 17 3 16.5523 3 16V4C3 3.44772 3.44772 3 4 3H8.5C9.05228 3 9.5 3.44772 9.5 4C9.5 4.55228 9.05228 5 8.5 5H5V15H15Z' fill='${colorInner.value}'/%3E%3Cpath d='M17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8V4C15 3.44772 15.4477 3 16 3C16.5523 3 17 3.44772 17 4V8Z' fill='${colorInner.value}'/%3E%3Cpath d='M12 5C11.4477 5 11 4.55228 11 4C11 3.44772 11.4477 3 12 3H16C16.5523 3 17 3.44772 17 4C17 4.55228 16.5523 5 16 5H12Z' fill='${colorInner.value}'/%3E%3C/svg%3E"), pointer`
      } else {
        return `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect opacity='0.8' x='7' y='6' width='11' height='11' rx='1' fill='${colorInner.value}'/%3E%3Cpath d='M14.5 14.5V11.25C14.5 10.9739 14.7239 10.75 15 10.75C15.2761 10.75 15.5 10.9739 15.5 11.25V15C15.5 15.2761 15.2761 15.5 15 15.5H5C4.72386 15.5 4.5 15.2761 4.5 15V5C4.5 4.72386 4.72386 4.5 5 4.5H8.75C9.02614 4.5 9.25 4.72386 9.25 5C9.25 5.27614 9.02614 5.5 8.75 5.5H5.5V14.5H14.5Z' fill='black'/%3E%3Cpath d='M10.3536 10.3536C10.1583 10.5488 9.84171 10.5488 9.64645 10.3536C9.45118 10.1583 9.45118 9.84171 9.64645 9.64645L14.6464 4.64645C14.8417 4.45118 15.1583 4.45118 15.3536 4.64645C15.5488 4.84171 15.5488 5.15829 15.3536 5.35355L10.3536 10.3536Z' fill='black'/%3E%3Cpath d='M15.5 8.5C15.5 8.77614 15.2761 9 15 9C14.7239 9 14.5 8.77614 14.5 8.5V5C14.5 4.72386 14.7239 4.5 15 4.5C15.2761 4.5 15.5 4.72386 15.5 5V8.5Z' fill='black'/%3E%3Cpath d='M11.5 5.5C11.2239 5.5 11 5.27614 11 5C11 4.72386 11.2239 4.5 11.5 4.5H15C15.2761 4.5 15.5 4.72386 15.5 5C15.5 5.27614 15.2761 5.5 15 5.5H11.5Z' fill='black'/%3E%3C/svg%3E"), pointer`
      }
    })

    return {
      customCursor,
      pepiconSvgString,
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
  background: v-bind(customCursor)
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
