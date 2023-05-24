<script lang="ts">
import { defineComponent, ref } from 'vue'
import Tabs from './Tabs.vue'

export default defineComponent({
  setup(props, context) {
    const selectedTab = ref<'vue' | 'svg'>('vue')
    return { selectedTab }
  },
  components: { Tabs },
})
</script>
<docs darkPreview></docs>
<template>
  <Tabs v-model:selectedTab="selectedTab" activeColor="goldenrod" :tabs="['vue', 'svg']">
    <template v-if="selectedTab === 'vue'"> vue </template>
    <template v-if="selectedTab === 'svg'"> svg </template>
  </Tabs>
</template>
