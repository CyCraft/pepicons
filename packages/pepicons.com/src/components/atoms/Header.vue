<template>
  <div class="header-container" />
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

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import { Engine, Render, Bodies, World, Events, Body, Mouse, MouseConstraint } from 'matter-js'

export default defineComponent({
  name: 'Header',
  props: {
    /**
     * @example 'airplane'
     */
    name: { type: String, required: true },
  },
  methods: {},
  mounted() {
    const headerContainer = document.querySelector('.header-container').getBoundingClientRect()
    const headerWidth = headerContainer.width
    const headerHeight = headerContainer.height

    // create an engine
    const engine = Engine.create()

    // create a renderer
    const render = Render.create({
      element: document.querySelector('.header-container'),
      engine: engine,
      options: {
        width: headerWidth,
        height: headerHeight,
        showAxes: true,
        showCollisions: true,
      },
    })

    // create two boxes and 4 walls
    const boxA = Bodies.rectangle(400, 200, 25, 25)
    const boxB = Bodies.rectangle(450, 50, 25, 25)

    const wallWidth = 25
    // shifting walls towards center w/ wallWidth so they are visible during dev
    const topWall = Bodies.rectangle(headerWidth / 2, wallWidth, headerWidth, wallWidth, {
      isStatic: true,
    })
    const leftWall = Bodies.rectangle(wallWidth, headerHeight / 2, wallWidth, headerHeight, {
      isStatic: true,
    })
    const rightWall = Bodies.rectangle(
      headerWidth - wallWidth,
      headerHeight / 2,
      wallWidth,
      headerHeight,
      {
        isStatic: true,
      },
    )
    const bottomWall = Bodies.rectangle(
      headerWidth / 2,
      headerHeight - wallWidth,
      headerWidth,
      wallWidth,
      {
        isStatic: true,
      },
    )

    // add all of the bodies to the world
    World.add(engine.world, [boxA, boxB, topWall, leftWall, bottomWall, rightWall])

    // use this for relative sizing
    // Render.lookAt(render, {
    //   min: { x: 0, y: 0 },
    //   max: { x: 1186, y: 500 },
    // })

    Events.on(engine, 'beforeUpdate', function (event: Object) {
      const dy = 5 * Math.sin(engine.timing.timestamp * 0.0025)
      const dx = 10 * Math.sin(engine.timing.timestamp * 0.001)
      // this creates a strange duplicate/ghosting effect but would be cool to figure out
      // Body.setVelocity(boxA, { x: 0, y: dy - boxA.position.y })
      Body.setPosition(boxA, { x: dx + 100, y: dy + 250 })
      Body.rotate(boxA, dy * 0.001)
    })

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      })

    World.add(engine.world, mouseConstraint)

    // keep the mouse in sync with rendering
    render.mouse = mouse

    // run the engine
    Engine.run(engine)

    // run the renderer
    Render.run(render)
  },
  setup() {
    return {}
  },
})
</script>
