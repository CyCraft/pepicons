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
<docs darkExample></docs>
<template>
  <Tabs
    v-model:selectedTab="selectedTab"
    color="goldenrod"
    :tabs="['vue', 'svg']"
    selectedTab="selected"
  >
    <template v-if="selectedTab === 'vue'"> vue </template>
    <template v-if="selectedTab === 'svg'"> svg </template>
  </Tabs>
</template>
