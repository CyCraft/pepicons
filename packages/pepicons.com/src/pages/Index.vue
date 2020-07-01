<template>
  <q-page class="row items-center justify-evenly">
    <IconGrid />
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'

import IconGrid from '../components/IconGrid.vue'

export default Vue.extend({
  name: 'PageIndex',
  components: { IconGrid },
  data () {
    return {}
  },
})
</script>
