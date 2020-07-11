<template>
  <q-page padding class="page-index">
    <Pickers />
    <IconGrid />
  </q-page>
</template>

<style lang="sass">
.page-index
  background: #FAFAFA
</style>

<script lang="ts">
import Vue from 'vue'

import IconGrid from '../components/IconGrid.vue'
import Pickers from '../components/Pickers.vue'

export default Vue.extend({
  name: 'PageIndex',
  components: { IconGrid, Pickers },
  data () {
    return {}
  },
})
</script>
