<template>
  <div class="header-container" />
</template>

<style lang="sass">
$max-width: 1186px
$max-height: 143.48px
.header-container
  width: $max-width
  height: $max-height
  // border-style: solid
</style>

<script>
import * as THREE from 'three'

import { SVGLoader } from '../../../node_modules/three/examples/jsm/loaders/SVGLoader'
import { BoxHelper } from 'three'

export default {
  name: 'Header',
  props: {
    /**
     * @example 'airplane'
     */
    name: { type: String, required: true },
  },
  data() {
    return {
      scene: THREE.Scene,
      renderer: THREE.WebGLRenderer,
      camera: null,
      svgs: [],
    }
  },
  methods: {
    init() {
      const headerContainer = document.querySelector('.header-container')

      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(0xffffff)

      this.camera = new THREE.PerspectiveCamera(
        70, // field of view
        headerContainer.offsetWidth / headerContainer.offsetHeight, // aspect ratio
        1, // near clipping plane
        1000, // far clipping plane
      )
      this.camera.position.set(0, 0, 100)

      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(headerContainer.offsetWidth, headerContainer.offsetHeight)
      headerContainer.appendChild(this.renderer.domElement)

      const reqSvgs = require.context('src/assets/icons', true, /\.svg$/)
      reqSvgs.keys().forEach((key) => {
        this.svgs.push({ pathShort: key, pathLong: reqSvgs(key) })
        this.svgs.push({ pathShort: key, pathLong: reqSvgs(key) })
      })
      console.log('this.svgs: ', this.svgs)

      let loader = new SVGLoader()
      for (let icon of this.svgs) {
        this.loadSvg(loader, this.scene, icon.pathShort)
      }
    },
    loadSvg(loader, scene, url) {
      const canvas = this.renderer.domElement
      // subtractions account for height/width of shapes so they don't load clipped

      const padding = 100
      loader.load(url, function (data) {
        const paths = data.paths
        const randX =
          Math.floor(Math.random() * (canvas.clientWidth - 60)) - (canvas.clientWidth - padding) / 2
        const randY =
          Math.floor(Math.random() * (canvas.clientHeight - 60)) -
          (canvas.clientHeight - padding) / 2
        const group = new THREE.Group()
        group.scale.multiplyScalar(1)
        group.position.x = -randX
        group.position.y = randY
        group.scale.y *= -1

        for (let i = 0; i < paths.length; i++) {
          const path = paths[i]

          const fillColor = path.userData.style.fill
          if (fillColor !== undefined && fillColor !== 'none') {
            const material = new THREE.MeshBasicMaterial({
              color: new THREE.Color().setStyle(fillColor),
              opacity: path.userData.style.fillOpacity,
              transparent: path.userData.style.fillOpacity < 1,
              side: THREE.DoubleSide,
              depthWrite: false,
            })

            const shapes = path.toShapes(true)

            for (let j = 0; j < shapes.length; j++) {
              const shape = shapes[j]

              const geometry = new THREE.ShapeBufferGeometry(shape)
              const mesh = new THREE.Mesh(geometry, material)

              group.add(mesh)
            }
          }

          const strokeColor = path.userData.style.stroke

          if (strokeColor !== undefined && strokeColor !== 'none') {
            const material = new THREE.MeshBasicMaterial({
              color: new THREE.Color().setStyle(strokeColor),
              opacity: path.userData.style.strokeOpacity,
              transparent: path.userData.style.strokeOpacity < 1,
              side: THREE.DoubleSide,
              depthWrite: false,
            })

            for (let j = 0, jl = path.subPaths.length; j < jl; j++) {
              const subPath = path.subPaths[j]

              const geometry = SVGLoader.pointsToStroke(subPath.getPoints(), path.userData.style)

              if (geometry) {
                const mesh = new THREE.Mesh(geometry, material)

                group.add(mesh)
              }
            }
          }
          if (path.userData.node.id) {
            group.name = path.userData.node.id

            // assign an initial direction for each group
            const rand = Math.floor(Math.random() * 4) + 1
            const directions = {
              1: 'left',
              2: 'up',
              3: 'right',
              4: 'down',
            }
            group.userData.direction = directions[rand]
          }
        }
        scene.add(group)
      })
    },
    resizeCanvasToDisplaySize() {
      const canvas = this.renderer.domElement

      // adjust displayBuffer size to match
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        // you must pass false here or three.js sadly fights the browser
        this.renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)
        this.camera.aspect = canvas.clientWidth / canvas.clientHeight
        this.camera.updateProjectionMatrix()

        // update any render target sizes here
      }
    },
    animate() {
      this.resizeCanvasToDisplaySize()
      const speed = 0.1
      this.scene.traverse(function (child) {
        if (child.name) {
          if (child.userData.direction === 'left') child.position.x -= speed
          else if (child.userData.direction === 'right') child.position.x += speed
          else if (child.userData.direction === 'up') child.position.y -= speed
          else if (child.userData.direction === 'down') child.position.y += speed
        }
      })

      // eslint-disable-next-line @typescript-eslint/unbound-method
      requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
    },
  },
  mounted() {
    this.init()
    console.log(this.scene)
    this.animate()
  },
}
</script>
