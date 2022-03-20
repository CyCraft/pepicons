<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    tabs: { type: Array as PropType<string[]>, required: true },
    selectedTab: { type: String, required: true },
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
  <div class="">
    <div class="">
      <a v-for="tab in tabs" :key="tab" @click="setTab(tab)">{{ tab }}</a>
    </div>
    <slot />
  </div>
</template>
