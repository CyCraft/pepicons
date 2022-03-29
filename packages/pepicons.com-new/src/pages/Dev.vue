<template>
  <div class="wrapper">
    <Pickers />
    <!-- <Tooltip text="Print ❏" backgroundColor="red" textColor="blue">
      <IconButton :iconConfig="config" />
    </Tooltip> -->
  </div>
  <!-- <div style="position: relative" class="my-component">
    <Tabs v-model:selectedTab="selectedTab" :tabs="['vue', 'svg']" selectedTab="selected">
      <template v-if="selectedTab === 'vue'"> vue </template>
      <template v-if="selectedTab === 'svg'"> svg </template>
    </Tabs>
  </div> -->
  <!-- <ProfileCard
      name="Andy"
      description="I am Andy"
      profileUrl="https://andykarwoski.com/"
      color="#0ea"
    /> -->
  <!-- <PepHero style="z-index: 10" />
    <PepHeaderDecorationLight style="position: absolute; top: 0" /> -->
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
import Tooltip from '../components/Tooltip.vue'
import IconButton from '../components/IconButton.vue'
import { config } from '../components/mocks'
import Pickers from '../components/Pickers.vue'

export default defineComponent({
  name: 'MyComponent',
  props: { Pepicon },
  setup(props) {
    const selectedTab = ref<'vue' | 'svg'>('vue')
    return { selectedTab, config }
  },
  components: {
    PepHeaderDecorationLight,
    PepHero,
    ProfileCard,
    Tabs,
    Tooltip,
    IconButton,
    Pickers,
  },
})
</script>
<style lang="sass">
.wrapper
  display: flex
  justify-content: center
  align-items: center
  height: 100vh
  width: 100%
</style>
