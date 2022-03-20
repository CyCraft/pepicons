<template>
  <div style="position: relative" class="my-component">
    <Tabs v-model:selectedTab="selectedTab" :tabs="['vue', 'svg']" selectedTab="selected">
      <template v-if="selectedTab === 'vue'"> vue </template>
      <template v-if="selectedTab === 'svg'"> svg </template>
    </Tabs>
    <!-- <ProfileCard
      name="Andy"
      description="I am Andy"
      profileUrl="https://andykarwoski.com/"
      color="#0ea"
    /> -->
    <!-- <PepHero style="z-index: 10" />
    <PepHeaderDecorationLight style="position: absolute; top: 0" /> -->
  </div>
</template>

<style lang="sass">
// .my-component
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Pepicon } from '@pepicons/vue'
import PepHeaderDecorationLight from '../components/PepHeaderDecorationLight.vue'
import PepHero from '../components/PepHero.vue'
import ProfileCard from '../components/ProfileCard.vue'
import Tabs from '../components/Tabs.vue'

export default defineComponent({
  name: 'MyComponent',
  props: { Pepicon },
  setup(props) {
    const selectedTab = ref<'vue' | 'svg'>('vue')
    return { selectedTab }
  },
  components: { PepHeaderDecorationLight, PepHero, ProfileCard, Tabs },
})
</script>
