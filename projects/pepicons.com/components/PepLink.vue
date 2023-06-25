<script lang="ts" setup>
import { Pepicon } from '@pepicons/vue'
import type { PepiconName } from 'pepicons'
import CompanyLogo from './CompanyLogo.vue'

const props = defineProps<{
  href: string
  content: string
  icon?: PepiconName | 'github'
}>()
</script>

<template>
  <a :href="href" :class="`pep-link cursor-pointer ${icon ? '_has-icon' : ''}`">
    <template v-if="icon">
      <CompanyLogo v-if="icon === 'github'" name="github" size="sm" class="_icon" />
      <Pepicon v-else-if="icon" :name="icon" size="sm" class="_icon" type="pop" />
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
  display: inline-flex
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
</style>
