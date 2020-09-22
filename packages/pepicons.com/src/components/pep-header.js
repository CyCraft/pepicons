import * as THREE from 'three'

import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

class PepHeader {
  constructor(targetSelector) {
    this.header = document.querySelector(targetSelector)
    this.icons = []
    this.otherIconsMap = {}
    this.animationSpeed = 0.05
  }

  init() {
    this.createScene()
    this.createRenderer()
    this.createCamera(70, 1, 1000)
    this.createHeaderBoundaryBox()
    // animate loop binds to window when we need it to bind to this object
    this.animate = this.animate.bind(this)
    this.drawLines(19, 79)
    this.drawIconSets(2)
    // this.drawBoxHelpers()
  }

  createScene() {
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0xffffff)
  }

  createRenderer() {
    this.renderer = new THREE.WebGL1Renderer()
    this.renderer.setSize(this.header.offsetWidth, this.header.offsetHeight)
    this.header.appendChild(this.renderer.domElement)
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

  createHeaderBoundaryBox() {
    const xPadding = 79
    const yPadding = 20
    this.canvasBoundary = new THREE.Box3()
    const minBounds = new THREE.Vector3(0, 0, 0)
    const maxBounds = new THREE.Vector3(
      this.header.clientWidth - xPadding,
      this.header.clientHeight - yPadding,
      0,
    )
    this.canvasBoundary.setFromCenterAndSize(minBounds, maxBounds)
  }

  drawLines(totalVertical, totalHorizontal) {
    const canvas = this.renderer.domElement
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
    this.iconIdOtherIconsArrayMap = this.createIconIdOtherIconsArrayMap()
    console.log('iconIdOtherIconsArrayMap in drawIconSets: ', this.iconIdOtherIconsArrayMap)
  }

  drawBoxHelpers() {
    console.log(this.icons)
    for (let icon of this.icons) {
      const box = new THREE.BoxHelper(icon, 'black')
      this.scene.add(box)
    }
  }

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
          }
          group.userData.initialPosition = group.position
        }
      }
      this.scene.add(group)
      this.icons.push(group)
    })
  }

  createIconIdOtherIconsArrayMap() {
    let otherIcons = []
    const allIcons = this.icons
    for (const icon of allIcons) {
      console.log(icon)
      otherIcons.push(icon)
    }
    console.log('otherIcons: ', otherIcons)
    // console.log('calculating: iconIdOtherIconsArrayMap')
    // console.log('this.icons.length: ', this.icons.length)
    // const allIcons = this.icons
    // console.log('allIcons.length: ', allIcons.length)
    // return allIcons.reduce((result, icon) => {
    //   result[icon.uuid] = allIcons.filter((_icon) => _icon.uuid !== icon.uuid)
    //   return result
    // }, {})
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

  updateIconXPosition(icon) {
    // icon.position.x += icon.userData.vector.x * this.animationSpeed
    let testIcon = icon
    testIcon.position.x += testIcon.userData.vector.x * this.animationSpeed
    for (const otherIcon of this.icons) {
      if (otherIcon.userData.kind === 'title') return
      if (otherIcon.uuid === icon.uuid) return
      // const box1 = new THREE.Box3().setFromObject(icon)
      const box1 = new THREE.Box3().setFromObject(testIcon)
      const box2 = new THREE.Box3().setFromObject(otherIcon)
      if (box1.intersectsBox(box2)) {
        const xMinCollision = box1.containsPoint(box2.min.x)
        const xMaxCollision = box1.containsPoint(box2.max.x)
        const yMinCollision = box1.containsPoint(box2.min.y)
        const yMaxCollision = box1.containsPoint(box2.max.y)

        if (xMinCollision || xMaxCollision) {
          // console.log('box1: ', box1, 'box2: ', box2)
          // console.log(
          //   'icon.userData.vector.x: ',
          //   icon.userData.vector.x,
          //   'otherIcon.userData.vector.x: ',
          //   otherIcon.userData.vector.x,
          // )
          // need to handle case for all y collisions
          if (yMinCollision || yMaxCollision) {
            // both icons are moving down
            if (testIcon.userData.vector.y > 0 && otherIcon.userData.vector.y > 0) {
              // icon is moving faster than otherIcon
              if (testIcon.userData.vector.y > otherIcon.userData.vector.y) {
                icon.userData.vector.y *= -1
                // otherIcon is moving faster than icon
              } else {
                otherIcon.userData.vector.y *= -1
              }
              // both icons are moving up
            } else if (testIcon.userData.vector.y < 0 && otherIcon.userData.vector.y < 0) {
              // icon is moving faster than otherIcon
              if (testIcon.userData.vector.y < otherIcon.userData.vector.y) {
                icon.userData.vector.y *= -1
              } else {
                otherIcon.userData.vector.y *= -1
              }
            } else {
              icon.userData.vector.y *= -1
              otherIcon.userData.vector.y *= -1
            }
          }
          // both icons are moving right and collide
          if (testIcon.userData.vector.x > 0 && otherIcon.userData.vector.x > 0) {
            // icon is faster than otherIcon
            if (testIcon.userData.vector.x > otherIcon.userData.vector.x) {
              icon.userData.vector.x *= -1
              // otherIcon faster than icon
            } else {
              otherIcon.userData.vector.x *= -1
            }
            // both icons are moving left and collide
          } else if (testIcon.userData.vector.x < 0 && otherIcon.userData.vector.x < 0) {
            // icon is faster than otherIcon
            if (testIcon.userData.vector.x < otherIcon.userData.vector.x) {
              icon.userData.vector.x *= -1
            } else {
              // otherIcon is faster than icon
              otherIcon.userData.vector.x *= -1
            }
          } else {
            icon.userData.vector.x *= -1
            otherIcon.userData.vector.x *= -1
          }
        }
        break
      }
    }
    icon.position.x += icon.userData.vector.x * this.animationSpeed
  }

  updateIconYPosition(icon) {
    // icon.position.y += icon.userData.vector.y * this.animationSpeed
    let testIcon = icon
    testIcon.position.y += testIcon.userData.vector.y * this.animationSpeed
    // let collision = false
    for (const otherIcon of this.icons) {
      if (otherIcon.userData.kind === 'title') return
      if (otherIcon.uuid === icon.uuid) return
      const box1 = new THREE.Box3().setFromObject(icon)
      // const padding = new THREE.Vector3(-1, -1, 0)
      // box1.expandByVector(padding)
      const box2 = new THREE.Box3().setFromObject(otherIcon)
      // box2.expandByVector(padding)
      if (box1.intersectsBox(box2)) {
        // collision = true
        const yMinCollision = box1.containsPoint(box2.min.y)
        const yMaxCollision = box1.containsPoint(box2.max.y)

        if (yMinCollision || yMaxCollision) {
          // both icons are moving down
          if (testIcon.userData.vector.y > 0 && otherIcon.userData.vector.y > 0) {
            // icon is moving faster than otherIcon
            if (testIcon.userData.vector.y > otherIcon.userData.vector.y) {
              icon.userData.vector.y *= -1
              // otherIcon is moving faster than icon
            } else {
              otherIcon.userData.vector.y *= -1
            }
            // both icons are moving up
          } else if (testIcon.userData.vector.y < 0 && otherIcon.userData.vector.y < 0) {
            // icon is moving faster than otherIcon
            if (testIcon.userData.vector.y < otherIcon.userData.vector.y) {
              icon.userData.vector.y *= -1
            } else {
              otherIcon.userData.vector.y *= -1
            }
          } else {
            icon.userData.vector.y *= -1
            otherIcon.userData.vector.y *= -1
          }
        }
        // const xMinCollision = box1.containsPoint(box2.min.x)
        // const xMaxCollision = box1.containsPoint(box2.max.x)
        // if (xMinCollision || xMaxCollision) {
        //   // both icons are moving right and collide
        //   if (testIcon.userData.vector.x > 0 && otherIcon.userData.vector.x > 0) {
        //     // icon is faster than otherIcon
        //     if (testIcon.userData.vector.x > otherIcon.userData.vector.x) {
        //       icon.userData.vector.x *= -1
        //       // otherIcon faster than icon
        //     } else {
        //       otherIcon.userData.vector.x *= -1
        //     }
        //     // both icons are moving left and collide
        //   } else if (testIcon.userData.vector.x < 0 && otherIcon.userData.vector.x < 0) {
        //     // icon is faster than otherIcon
        //     if (testIcon.userData.vector.x < otherIcon.userData.vector.x) {
        //       icon.userData.vector.x *= -1
        //     } else {
        //       // otherIcon is faster than icon
        //       otherIcon.userData.vector.x *= -1
        //     }
        //   } else {
        //     icon.userData.vector.x *= -1
        //     otherIcon.userData.vector.x *= -1
        //   }
        // }
        break
      }
    }
    icon.position.y += icon.userData.vector.y * this.animationSpeed
  }

  animate() {
    this.scene.traverse((icon) => {
      if (icon.name && icon.userData.kind === 'icon') {
        this.detectWallCollision(icon)
        this.updateIconXPosition(icon)
        this.updateIconYPosition(icon)
        // icon.position.y += icon.userData.vector.y * this.animationSpeed
      }
    })
    // eslint-disable-next-line @typescript-eslint/unbound-method
    requestAnimationFrame(this.animate)
    this.renderer.render(this.scene, this.camera)
  }
}

export default PepHeader
