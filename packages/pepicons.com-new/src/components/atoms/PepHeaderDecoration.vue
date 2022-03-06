<template>
  <div>
    <div class="pep-header" />
    <q-resize-observer @resize="onResize" />
  </div>
</template>

<style lang="sass">
@import '../../css/variables.sass'
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

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import PepHeader from '../pep-header.js'

export default defineComponent({
  name: 'PepHeaderDecoration',
  setup() {
    onMounted(() => {
      let header = new PepHeader('.pep-header')
      header = header
      header.init()
      header.animate()
    })
    onUnmounted(() => {
      if (!window.renderer) return
      window.renderer.forceContextLoss()
      window.renderer.dispose()
      window.renderer.domElement = null
      window.renderer = null
    })
    function onResize({ width, height }) {
      // if (!this.header) return
      // // width and height are "numbers"
      // // it's the height and width of the .pep-hero
      // this.header.updateCanvasSize({width, height})
    }
    return { header: null, onResize }
  },
})
</script>
