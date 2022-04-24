<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    tabs: { type: Array as PropType<string[]>, required: true },
    selectedTab: { type: String, required: true },
    color: { type: String, required: true },
  },
  setup(props, context) {
    function setTab(tab) {
      context.emit('selected', tab)
      context.emit('update:selectedTab', tab)
    }
    return { setTab }
  },
})
</script>
<template>
  <div class="flex">
    <ul class="_tabs">
      <li
        v-for="tab in tabs"
        :key="tab"
        :class="[tab === selectedTab ? '_selected-tab' : '', '_tab']"
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
  justify-content: start
  align-items: center
  width: 100%
  padding: 0
  ._tab
    padding: 16px
    font-size: 20px
    font-weight: 500
    cursor: pointer
    border-bottom: 2px solid transparent
    &:hover
      background: RGBA(25,25,25,.05)
      // background: grey
    &._selected-tab
      border-bottom: 2px solid v-bind(color)
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
  background: v-bind(color)
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
