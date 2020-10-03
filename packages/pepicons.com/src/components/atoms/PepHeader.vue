<template>
  <div>
    <div class="pep-header" />
  </div>
</template>

<style lang="sass">
// $max-width: 1186px
// $max-height: 143.48px
// $max-height: 300px
$max-width: 100vw
$max-height: 30vw
.pep-header
  width: $max-width
  height: $max-height
  > *
    width: 100%
    height: 100%
</style>

<script>
import PepHeader from '../pep-header.js'

export default {
  name: 'PepHeader',
  props: {},
  mounted() {
    const header = new PepHeader('.pep-header')
    this.header = header
    header.init()
    header.animate()
  },
  methods: {},
  computed: {},
}
</script>
