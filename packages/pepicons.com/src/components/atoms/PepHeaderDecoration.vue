<template>
  <div>
    <div class="pep-header" />
    <q-resize-observer @resize="onResize" />
  </div>
</template>

<style lang="sass">
// $max-width: 1186px
// $max-height: 143.48px
// $max-height: 300px
// $max-width: 100vw
// $max-height: 30vw
// .pep-header
//   width: $max-width
//   height: $max-height
//   > *
//     width: 100%
//     height: 100%

// header and grid-lines heights
$h-xs: 15px
$h-sm: 20px
$h-md: 20px
$h-lg: 25px
.pep-header
  height: $h-xs * 9 - 1
  +media-sm(height, $h-sm * 9 - 1)
  +media-md(height, $h-md * 9 - 1)
  +media-lg(height, $h-lg * 9 - 1)
  > *
    width: 100%
    height: 100%

</style>

<script>
import PepHeader from '../pep-header.js'

export default {
  name: 'PepHeaderDecoration',
  props: {},
  data () {
    return { header: null }
  },
  mounted() {
    const header = new PepHeader('.pep-header')
    this.header = header
    header.init()
    header.animate()
  },
  destroyed() {
    if (!window.renderer) return
    window.renderer.forceContextLoss()
    window.renderer.dispose()
    window.renderer.domElement = null
    window.renderer = null
  },
  methods: {
    onResize ({ width, height }) {
      if (!this.header) return
      // width and height are "numbers"
      // it's the height and width of the .pep-hero

      this.header.updateCanvasSize({width, height})
    },
  },
  computed: {},
}
</script>
