<template>
  <div class="header-container" />
</template>

<style lang="sass">
$max-width: 1186px
// $max-height: 143.48px
$max-height: 300px
.header-container
  width: $max-width
  height: $max-height
  border-style: solid
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
      boundaryBox: THREE.Box3,
      loader: SVGLoader,
      icons: [],
    }
  },
  methods: {
    init() {
      this.createScene()
      this.createCamera()
      this.loader = new SVGLoader()
      // this.loadTitle()
      this.loadIcons()
    },
    createScene() {
      const headerContainer = document.querySelector('.header-container')
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(0xffffff)
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(headerContainer.offsetWidth, headerContainer.offsetHeight)
      headerContainer.appendChild(this.renderer.domElement)

      /**
       * this creates the boundary box for the entire canvas and helps with dev
       * we can turn this off when dev is finished or we go live
       */
      const canvas = this.renderer.domElement
      const xPadding = 79
      const yPadding = 20
      this.boundaryBox = new THREE.Box3()
      this.boundaryBox.setFromCenterAndSize(
        new THREE.Vector3(0, 0, 0),
        // subtracting moves bounding box into viewable area for dev purpose
        new THREE.Vector3(canvas.clientWidth - xPadding, canvas.clientHeight - yPadding, 0),
      )
      // this helper makes the boundary box visible for dev purposes - turn off for prod
      const helper = new THREE.Box3Helper(this.boundaryBox, 'black')
      this.scene.add(helper)
    },
    createCamera() {
      const headerContainer = document.querySelector('.header-container')
      const aspectRatio = headerContainer.offsetWidth / headerContainer.offsetHeight
      // args: field of view, aspect ratio, near clipping plane, far clipping plane
      this.camera = new THREE.PerspectiveCamera(70, aspectRatio, 1, 1000)
      this.camera.position.set(0, 0, 200)
    },
    loadTitle() {
      const reqSvgs = require.context('src/assets/title', true, /\.svg$/)
      let svgs = []
      reqSvgs.keys().forEach((key) => {
        svgs.push({ pathShort: key, pathLong: reqSvgs(key), kind: 'title' })
      })

      for (let icon of svgs) {
        this.loadSvg(icon.pathLong, icon.kind, { x: 0, y: 0 })
      }
    },
    loadIcons() {
      const reqSvgs = require.context('src/assets/icons', true, /\.svg$/)
      let svgs = []
      reqSvgs.keys().forEach((key) => {
        svgs.push({ pathShort: key, pathLong: reqSvgs(key), kind: 'icon' })
        // TODO - removed for more sparse canvas -> ease troubleshooting
        svgs.push({ pathShort: key, pathLong: reqSvgs(key), kind: 'icon' })
      })

      this.loader = new SVGLoader()
      const initialPositions = this.generateInitialPositions(svgs)
      for (let icon of svgs) {
        const coordinates = initialPositions.pop()
        this.loadSvg(icon.pathLong, icon.kind, coordinates)
      }
    },
    loadSvg(url, kind, coordinates) {
      const group = new THREE.Group()
      group.userData.kind = kind

      this.loader.load(url, (data) => {
        const paths = data.paths
        group.scale.multiplyScalar(1)
        group.position.x = coordinates.x
        group.position.y = coordinates.y
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
            group.userData.vector = this.createRandomVector()
            group.userData.initialPosition = group.position
          }
        }
        this.scene.add(group)
        this.icons.push(group)
      })
    },
    generateInitialPositions(items) {
      const spawnPadding = 100
      const cavasWidth = this.renderer.domElement.clientWidth - spawnPadding
      const cavasHeight = this.renderer.domElement.clientHeight - spawnPadding
      const xRange = cavasWidth - cavasWidth / 2
      const yRange = cavasHeight - cavasHeight / 2
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      const dx = cavasWidth / (items.length + 1)
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      const dy = cavasHeight / (items.length + 1)

      // generate all x, y coordinates
      let initialXCoordinates = []
      let initialYCoordinates = []
      for (let i = 1; i <= items.length; i++) {
        let coordinates = {
          x: xRange - dx * i,
          y: yRange - dy * i,
        }
        initialXCoordinates.push(xRange - dx * i)
        initialYCoordinates.push(yRange - dy * i)
      }

      // shuffle x values
      let initialPositions = []
      for (let i = initialXCoordinates.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const tempX = initialXCoordinates[i]
        initialXCoordinates[i] = initialXCoordinates[j]
        initialXCoordinates[j] = tempX
      }
      // then combine into array of coordinates
      for (let i = 0; i < initialXCoordinates.length; i++) {
        const coordinates = {
          x: initialXCoordinates[i],
          y: initialYCoordinates[i],
        }
        initialPositions.push(coordinates)
      }
      return initialPositions
    },
    createRandomVector() {
      /**
       * Equation: Math.floor(Math.random() * (max - min + 1)) + min
       * Range: -10 -> 10
       * x, y represent horizontal and vertical velocity
       */
      const min = -10
      const max = 10
      let randX = Math.floor(Math.random() * (max - min + 1)) + min
      let randY = Math.floor(Math.random() * (max - min + 1)) + min
      // never has stationary icons, also breaks current physics model
      if (randX === 0) randX = 1
      if (randY === 0) randY = 1
      return new THREE.Vector2(randX, randY)
    },
    resizeCanvasToDisplaySize() {
      const canvas = this.renderer.domElement
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        this.renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)
        this.camera.aspect = canvas.clientWidth / canvas.clientHeight
        this.camera.updateProjectionMatrix()
      }
    },
    animate() {
      this.resizeCanvasToDisplaySize()
      const speed = 0.1
      this.scene.traverse((child) => {
        if (child.name) {
          child.position.x += child.userData.vector.x * speed
          child.position.y += child.userData.vector.y * speed

          // check for collisions with canvas boundary box
          const iconBoundaryBox = new THREE.Box3().setFromObject(child)
          if (iconBoundaryBox.intersectsBox(this.boundaryBox)) {
            const xBoundsCollision =
              iconBoundaryBox.max.x >= this.boundaryBox.max.x ||
              iconBoundaryBox.min.x <= this.boundaryBox.min.x
            const yBoundsCollision =
              iconBoundaryBox.max.y >= this.boundaryBox.max.y ||
              iconBoundaryBox.min.y <= this.boundaryBox.min.y
            if (xBoundsCollision) child.userData.vector.x *= -1
            if (yBoundsCollision) child.userData.vector.y *= -1
          }

          // // check for collisions with other icons
          this.icons.forEach((otherIcon) => {
            const padding = 100

            const otherIconBoundaryBox = new THREE.Box3().setFromObject(otherIcon)
            if (otherIconBoundaryBox.intersectsBox(iconBoundaryBox)) {
              const xBoundsCollision =
                iconBoundaryBox.max.x <= this.boundaryBox.max.x ||
                iconBoundaryBox.min.x >= this.boundaryBox.min.x
              const yBoundsCollision =
                iconBoundaryBox.max.y <= this.boundaryBox.max.y ||
                iconBoundaryBox.min.y >= this.boundaryBox.min.y
              if (xBoundsCollision) {
                child.userData.vector.x *= -1
                otherIcon.userData.vector.x *= -1
              }
              if (yBoundsCollision) {
                child.userData.vector.y *= -1
                otherIcon.userData.vector.y *= -1
              }
            }
          })
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
    console.log(this.icons)
    this.animate()
  },
}
</script>
