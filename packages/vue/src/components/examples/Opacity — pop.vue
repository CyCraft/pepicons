<script lang="ts" setup>
import Pepicon from '../Pepicon.vue'
</script>

<template>
  <div class="example">
    <Pepicon name="airplane" :opacity="0.4" />
    <Pepicon name="battery" :opacity="0.4" />
    <Pepicon name="bicycle" :opacity="0.4" />
    <Pepicon name="book" :opacity="0.4" />
    <Pepicon name="camera" :opacity="0.4" />
    <Pepicon name="car" :opacity="0.4" />
  </div>
</template>

<style scoped>
.example {
  display: flex;
  flex-wrap: wrap;
}
.example > * {
  margin: 1rem;
}
</style>
