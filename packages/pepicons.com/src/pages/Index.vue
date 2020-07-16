<template>
  <q-page padding :class="`page-index q-gutter-lg ${darkMode ? 'dark-mode' : ''}`">
    <Pickers v-model="config" />
    <IconGrid
      :type="config.type"
      :color="config.color"
      :stroke="config.stroke"
      :darkMode="darkMode"
    />
  </q-page>
</template>

<style lang="sass">
.page-index
  transition: background 250ms
  background: #FAFAFA
  &.dark-mode
    background: $c-nightfall
</style>

<script lang="ts">
import Vue from 'vue'
import IconGrid from '../components/molecules/IconGrid.vue'
import Pickers from '../components/molecules/Pickers.vue'
import { cssVar } from '../helpers/colorHelpers'

export default Vue.extend({
  name: 'PageIndex',
  components: { IconGrid, Pickers },
  data() {
    const config = {
      type: 'print',
      color: cssVar('primary'),
      background: 'white',
      stroke: 'black',
    }
    return { config }
  },
  watch: {
    'config.background'(newVal) {
      if (newVal === 'white') {
        this.config.stroke = 'black'
      }
      if (newVal === cssVar('nightfall')) {
        this.config.stroke = 'white'
      }
    },
  },
  computed: {
    darkMode(): boolean {
      return this.config.background === cssVar('nightfall')
    },
  },
})
</script>
