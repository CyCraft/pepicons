<script lang="ts" setup>
const props = defineProps<{
  tabs: string[]
  selectedTab: string
  activeColor: string
}>()

const emit = defineEmits<{
  (e: 'update:selectedTab', payload: string): void
}>()

function setTab(tab: string) {
  emit('update:selectedTab', tab)
}
</script>
<template>
  <div>
    <ul class="_tabs">
      <li
        v-for="tab in tabs"
        :key="tab"
        :class="`_tab cursor-pointer ${tab === selectedTab ? '_selected-tab' : ''}`"
        @click="setTab(tab)"
      >
        {{ tab }}
        <!-- <span class="_tab-indicator" /> -->
      </li>
    </ul>

    <slot />
  </div>
</template>
<style lang="sass">
ul
  list-style-type: none
._tabs
  position: relative
  display: flex
  justify-content: flex-start
  align-items: center
  width: 100%
  padding: 0
  ._tab
    padding: 16px
    font-size: 20px
    font-weight: 500
    border-bottom: 2px solid transparent
    &:hover
      background: rgba(25, 25, 25, .05)
    &._selected-tab
      border-bottom: 2px solid v-bind(activeColor)
      transition: all .2s ease-in
._tab-indicator
  position: absolute
  bottom: -2px
  left: 50%
  transform: translate(-50%, -50%)
  display: flex
  justify-content: center
  width: 60%
  height: 3px
  padding: 0
  margin: 0 auto
  background: v-bind(activeColor)
  animation: tab-indicator-reveal 0.6s ease-in-out
@keyframes tab-indicator-reveal
    0%
      width: 0%
      opacity: 0

    30%
      opacity: 0

    100%
      width: 100%
      opacity: 1
</style>
