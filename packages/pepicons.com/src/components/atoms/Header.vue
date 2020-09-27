<template>
  <div class="header-container" />
</template>

<style lang="sass">
// $max-width: 1186px
$max-width: 1186px
// $max-height: 143.48px
$max-height: 300px
.header-container
  width: $max-width
  height: $max-height
</style>

<script>
import * as THREE from 'three'

import { SVGLoader } from '../../../node_modules/three/examples/jsm/loaders/SVGLoader'
import { BoxHelper } from 'three'

import PepHeader from '../pep-header'

export default {
  name: 'Header',
  props: {
    /**
     * @example 'airplane'
     */
    name: { type: String, required: true },
  },
  mounted() {
    const header = new PepHeader('.header-container')
    header.init()
    header.animate()
  },
}
</script>
