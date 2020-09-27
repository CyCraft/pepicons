<template>
  <q-page padding :class="`page-index q-gutter-lg ${darkMode ? 'dark-mode' : ''}`">
    <Pickers v-model="config" />
    <div class="pa-md">
      <PepInput
        :color="config.color"
        v-model="searchInput"
        :debounce="200"
        :isDarkMode="darkMode"
      />
    </div>
    <IconGrid
      :type="config.type"
      :color="config.color"
      :stroke="config.stroke"
      :darkMode="darkMode"
      :filter="searchInput"
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
import PepInput from '../components/atoms/PepInput.vue'
import IconGrid from '../components/molecules/IconGrid.vue'
import Pickers from '../components/molecules/Pickers.vue'
import { cssVar, setPrimaryColor } from '../helpers/colorHelpers'

export default Vue.extend({
  name: 'PageIndex',
  components: { IconGrid, Pickers, PepInput },
  data() {
    const config = {
      type: 'print',
      color: cssVar('primary'),
      background: 'white',
      stroke: 'black',
    }
    return { config, searchInput: '' }
  },
  watch: {
    'config.color'(newVal) {
      setPrimaryColor(newVal)
    },
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
