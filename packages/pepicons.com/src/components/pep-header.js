import * as THREE from 'three'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

class PepHeader {
  constructor(targetSelector) {
    this.header = document.querySelector(targetSelector)
    this.icons = []
    this.otherIconsMap = {}
    this.animationSpeed = 0.03
    // this var increases/decreases padding for icon to icon collisions
    this.iconPadding = 0
    // this.titleBoundaries = []
  }

  init() {
    this.createScene()
    this.createRenderer()
    this.createCamera(70, 1, 1000)
    this.createHeaderBoundaryBox()
    // this.drawLines(19, 79)
    this.drawIconSets(2)
    // this.drawTitle()
    // animate loop binds to window when we need it to bind to this object
    this.animate = this.animate.bind(this)
  }

  createScene() {
    this.scene = new THREE.Scene()
    // this.scene.background = new THREE.Color("0xffffff")
  }

  createRenderer() {
    if (!window.renderer) window.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'low-power',
      precision: 'lowp',
      depth: false,
      stencil: false,
  })
    window.renderer.setClearColor( 0x000000, 0 ); // the default
    // const w = this.header.offsetWidth
    // const h = this.header.offsetHeight
    // console.log('w: ', w, 'h: ', h)
    // window.renderer.setSize(w, h)
    window.renderer.setPixelRatio(window.devicePixelRatio)
    console.log('pixelRatio: ', window.devicePixelRatio)
    this.header.appendChild(window.renderer.domElement)
    console.log('renderer.info: ', window.renderer.info)
  }

  createCamera(fieldOfView, nearClippingPlane, farClippingPlane) {
    const aspectRatio = this.header.offsetWidth / this.header.offsetHeight
    this.camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearClippingPlane,
      farClippingPlane,
    )
    this.camera.position.set(0, 0, 200)
  }

 resizeCanvasToDisplaySize() {
  const canvas = this.header
  // look up the size the canvas is being displayed
  const width = canvas.offsetWidth
  const height = canvas.offsetHeight

  // adjust displayBuffer size to match
  if (canvas.width !== width || canvas.height !== height) {
    // you must pass false here or three.js sadly fights the browser
    window.renderer.setSize(width, height, true)
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()

    // update any render target sizes here
  }
}

  createHeaderBoundaryBox() {
    // const xPadding = 79
    const xPadding = 0
    // const yPadding = 20
    const yPadding = 0
    this.canvasBoundary = new THREE.Box3()
    const minBounds = new THREE.Vector3(0, 0, 0)
    const maxBounds = new THREE.Vector3(
      // this.header.clientWidth - xPadding,
      // this.header.clientHeight - yPadding,
      1500,
      // 1250,
      // 280,
      // this.header.clientWidth * 1.25,
      // this.header.clientHeight * 1.25,
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      // this.header.clientWidth + 400,
      280,
      0,
    )
    /*
    1416 -> 1780
    966 ->
    */
    console.log('minBounds: ', minBounds, 'maxBounds: ', maxBounds)
    this.canvasBoundary.setFromCenterAndSize(minBounds, maxBounds)
  }

  drawLines(totalVertical, totalHorizontal) {
    const canvas = window.renderer.domElement
    const height = canvas.clientHeight
    const width = canvas.clientWidth
    const dy = height / totalVertical
    const dx = width / totalHorizontal
    const color = '#BABABA'

    const group = new THREE.Group()

    // TODO figure out better way to do this
    const offsetY = -23
    const offsetX = 37

    for (let i = 1; i <= totalVertical; i++) {
      const material = new THREE.LineBasicMaterial({ color: color })
      const points = []
      points.push(new THREE.Vector3(-(width / 2), -(height / 2) + offsetY + dy * i))
      points.push(new THREE.Vector3(width / 2, -(height / 2) + offsetY + dy * i))
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const line = new THREE.Line(geometry, material)
      group.add(line)
    }
    for (let i = 1; i <= totalHorizontal; i++) {
      const material = new THREE.LineBasicMaterial({ color: color })
      const points = []
      points.push(new THREE.Vector3(-(width / 2) + offsetX + dx * i, -(height / 2)))
      points.push(new THREE.Vector3(-(width / 2) + offsetX + dx * i, height / 2))
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const line = new THREE.Line(geometry, material)
      group.add(line)
    }
    this.scene.add(group)
  }

  drawIconSets(setCount) {
    const reqSvgs = require.context('src/assets/icons', true, /\.svg$/)
    let svgs = []
    reqSvgs.keys().forEach((key) => {
      for (let i = 0; i < setCount; i++) {
        svgs.push({ pathShort: key, pathLong: reqSvgs(key), kind: 'icon' })
      }
    })

    const initialPositions = this.generateInitialPositions(svgs)
    for (let icon of svgs) {
      const coordinates = initialPositions.pop()
      this.loadSvg(icon.pathLong, icon.kind, coordinates)
    }
  }

  drawTitle() {
    const reqSvgs = require.context('src/assets/title', true, /\.svg$/)
    let svgs = []
    reqSvgs.keys().forEach((key) => {
      svgs.push({ pathShort: key, pathLong: reqSvgs(key), kind: 'title' })
    })
    // TODO - these coordinates need to be based on the size of the canvas AND svg
    const xMinLeft = -583 / 1.75
    const xMinRight = -62
    const yCenter = 50

    this.loadSvg(svgs[0].pathLong, svgs[0].kind, { x: xMinLeft, y: yCenter })
    this.loadSvg(svgs[1].pathLong, svgs[1].kind, { x: xMinRight, y: yCenter })
  }

  createTitleBoundaryBox(icon) {
    this.titleBoundaries.push(this.createAABB(icon))
  }

  generateInitialPositions(items) {
    const spawnPadding = 100
    const cavasWidth = window.renderer.domElement.clientWidth - spawnPadding
    const cavasHeight = window.renderer.domElement.clientHeight - spawnPadding
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
        x: Math.round(initialXCoordinates[i]),
        y: Math.round(initialYCoordinates[i]),
      }
      initialPositions.push(coordinates)
    }
    return initialPositions
  }

  createRandomVector() {
    const min = -10
    const max = 10
    let randX = Math.floor(Math.random() * (max - min + 1)) + min
    const d = 10 - Math.abs(randX)
    // let randY = Math.floor(Math.random() * (max - min + 1)) + min
    let randY = Math.floor(Math.random() * (d - -d + 1)) + -d
    // never have stationary icons, also breaks current physics model
    if (randX === 0) randX = 1
    if (randY === 0) randY = 1
    return new THREE.Vector2(randX, randY)
  }

  loadSvg(url, kind, coordinates) {
    const loader = new SVGLoader()
    const group = new THREE.Group()
    group.userData.kind = kind

    loader.load(url, (data) => {
      const paths = data.paths
      if (kind === 'title') {
        group.scale.multiplyScalar(1.75)
      } else {
        group.scale.multiplyScalar(0.8)
      }
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
          if (kind === 'icon') {
            group.userData.vector = this.createRandomVector()
          } else if (kind === 'title') {
            this.createTitleBoundaryBox(group)
          }
          group.userData.initialPosition = group.position
        }
      }
      this.scene.add(group)

      group.userData.AABB = this.createAABB(group)
      this.icons.push(group)
    })
  }

  detectWallCollision(icon) {
    const iconBoundaryBox = new THREE.Box3().setFromObject(icon)
    if (iconBoundaryBox.intersectsBox(this.canvasBoundary)) {
      const xBoundsCollision =
        iconBoundaryBox.max.x >= this.canvasBoundary.max.x ||
        iconBoundaryBox.min.x <= this.canvasBoundary.min.x
      const yBoundsCollision =
        iconBoundaryBox.max.y >= this.canvasBoundary.max.y ||
        iconBoundaryBox.min.y <= this.canvasBoundary.min.y
      if (xBoundsCollision) icon.userData.vector.x *= -1
      if (yBoundsCollision) icon.userData.vector.y *= -1
    }
  }

  checkForTitleCollision(icon) {
    // not in use - save incase we need this in the future
    const iconBoundaryBox = new THREE.Box3().setFromObject(icon)
    for (const titleBoundary of this.titleBoundaries) {
      if (iconBoundaryBox.intersectsBox(titleBoundary)) {
        const xBoundsCollision =
          iconBoundaryBox.max.x >= titleBoundary.max.x ||
          iconBoundaryBox.min.x <= titleBoundary.min.x
        const yBoundsCollision =
          iconBoundaryBox.max.y >= titleBoundary.max.y ||
          iconBoundaryBox.min.y <= titleBoundary.min.y
        if (xBoundsCollision) icon.userData.vector.x *= -1
        if (yBoundsCollision) icon.userData.vector.y *= -1
      }
    }
  }

  createAABB(icon) {
    const box = new THREE.Box3().setFromObject(icon)
    box.expandByVector(new THREE.Vector3(this.iconPadding, this.iconPadding, 0))
    return box
  }

  updateIconPositions() {
    for (const icon of this.icons) {
      // if (icon.userData.kind === 'title') continue
      icon.position.x += icon.userData.vector.x * this.animationSpeed
      icon.position.y += icon.userData.vector.y * this.animationSpeed
      this.detectWallCollision(icon)
      // this.checkForTitleCollision(icon)
      const box1 = icon.userData.AABB.setFromObject(icon)
      for (const otherIcon of this.icons) {
        // if (otherIcon.userData.kind === 'title') continue
        if (otherIcon.uuid === icon.uuid) continue
        const box2 = otherIcon.userData.AABB.setFromObject(otherIcon)
        if (box1.intersectsBox(box2)) {
          this.handleCollision(icon, otherIcon)
        }
      }
    }
  }

  handleCollision(icon, otherIcon) {
    const oldIconX = icon.userData.vector.x
    const oldIconY = icon.userData.vector.y
    const oldOtherIconX = otherIcon.userData.vector.x
    const oldOtherIconY = otherIcon.userData.vector.y
    icon.userData.vector.x = oldOtherIconX
    icon.userData.vector.y = oldOtherIconY
    otherIcon.userData.vector.x = oldIconX
    otherIcon.userData.vector.y = oldIconY
  }

  animate() {
    this.updateIconPositions()
    this.resizeCanvasToDisplaySize()

    // eslint-disable-next-line @typescript-eslint/unbound-method
    requestAnimationFrame(this.animate)
    window.renderer.render(this.scene, this.camera)
  }
}

export default PepHeader
