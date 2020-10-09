<template>
  <a
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
.pep-link
  // resets
  text-decoration: none
  text-decoration-color: none
  &:focus
    outline: 0
    box-shadow: none
  cursor: pointer
  // alignment
  display: flex
  align-items: center
  // typography
  &._has-icon
    font-weight: $medium
  // colors
  +C(color, letters)
.dark-mode .pep-link
  color: white


.pep-link ._icon
    +C(color, nightfall)
.dark-mode
  .pep-link ._icon
    color: white

.pep-link._retro-underline
  position: relative
  display: inline-block
  &::after
    content: ''
    position: absolute
    transform: rotate(181deg) translateY(-2px)
    width: 105%
    bottom: 0
    left: -2px
    border-top: 2px solid black
    border-radius: 50px
    transition: border-color 250ms
  &::before
    content: ''
    position: absolute
    justify-content: bottom
    transform-origin: bottom
    transform: rotate(181deg) translateY(-2px)
    width: 105%
    bottom: 1px
    left: -2px
    border-bottom: 6px solid $primary
    border-bottom: 6px solid var(--q-color-primary)
    border-radius: 50px
.dark-mode
  .pep-link._retro-underline::after
    border-top: 2px solid white
</style>

<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from '@vue/composition-api'
import { Pepicon } from 'vue-pepicons'
import CompanyLogo from './CompanyLogo.vue'

export default defineComponent({
  name: 'PepLink',
  components: { CompanyLogo, Pepicon },
  props: {
    href: { type: String },
    content: { type: String },
    icon: { type: String },
    retroUnderline: { type: Boolean },
  },
  setup(props) {
    return {}
  },
})
</script>
