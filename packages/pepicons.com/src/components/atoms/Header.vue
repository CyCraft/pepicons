<template>
  <div class="header-container"></div>
</template>

<style lang="sass">
$max-width: 1186px
$max-height: 500px
.header-container
  width: $max-width
  height: $max-height
  // actual height in spec
  // height: 143.48px
  border-style: solid
</style>

<script>
import * as THREE from 'three'

import { SVGLoader } from '../../../node_modules/three/examples/jsm/loaders/SVGLoader'

export default {
  name: 'Header',
  props: {
    /**
     * @example 'airplane'
     */
    name: { type: String, required: true },
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {
    let loader = new SVGLoader()

    loader.load('../../assets/Path 30.svg', function (data) {
      console.log('data: ', data)
    })

    const headerContainer = document.querySelector('.header-container')

    console.log(headerContainer)
    console.log(headerContainer.offsetWidth)
    console.log(headerContainer.offsetHeight)
    let scene = new THREE.Scene()
    let camera = new THREE.PerspectiveCamera(
      75, // field of view
      headerContainer.offsetWidth / headerContainer.offsetHeight, // aspect ratio
      0.1, // near clipping plane
      1000, // far clipping plane
    )

    let renderer = new THREE.WebGLRenderer()
    renderer.setSize(headerContainer.offsetWidth, headerContainer.offsetHeight)
    headerContainer.appendChild(renderer.domElement)
    // document.body.appendChild(renderer.domElement)
    // renderer.setSize(window.innerWidth, window.innerHeight)

    let geometry = new THREE.BoxGeometry()
    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    let cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    camera.position.z = 5

    function animate() {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    animate()
  },
}
</script>
