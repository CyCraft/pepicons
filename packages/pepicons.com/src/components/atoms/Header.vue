<template>
  <div class="header-container">
    <!-- temporary svg here to figure out svg w/ matterjs -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28.328"
      height="28.328"
      viewBox="0 0 28.328 28.328"
    >
      <path
        id="グリーン四角"
        d="M 0,0 H 25.081 V 25.081 H 0 Z"
        transform="translate(0 3.491) rotate(-8)"
        fill="#55bbc5"
      />
    </svg>
  </div>
</template>

<style lang="sass">
=flex-center
  display: flex
  justify-content: center
  align-items: center
.header-container
  width: 1186px
  // height: 143.48px
  height: 500px
  border-style: solid
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Header',
  props: {
    /**
     * @example 'airplane'
     */
    name: { type: String, required: true },
  },
  methods: {},
  mounted() {},
  setup() {
    return {}
  },
})
</script>
