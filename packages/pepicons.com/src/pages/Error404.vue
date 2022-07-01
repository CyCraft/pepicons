<template>
  <div class="_error-page text-white text-center">
    <div style="font-size: 30vh">404</div>

    <div class="text-h2" style="opacity: 0.4">Oops. Nothing here...</div>

    <router-link to="/" tag="button" class="_button">Go Home</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyComponent',
  props: {},
  setup(props) {
    return {}
  },
})
</script>

<style lang="sass">
@import '../css/variables'

._error-page
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  height: 100vh
  width: 100vw
  background-color: #2196f3
  user-select: none
  ._button
    all: unset
    color: rgb(33, 150, 243)
    background-color: white
    padding: 8px 12px
    border-radius: 4px
    margin-top: 48px
    cursor: pointer
    font-family: Montserrat, sans-serif, sans
    font-size: 14px
    font-weight: 300
    text-align: center
    text-decoration-thickness: auto
    text-size-adjust: 100%
    text-transform: none
    user-select: none
</style>
