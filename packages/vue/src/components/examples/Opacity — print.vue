<script lang="ts" setup>
import Pepicon from '../Pepicon.vue'
</script>

<template>
  <div class="example">
    <Pepicon name="airplane" type="print" :opacity="0.4" />
    <Pepicon name="battery" type="print" :opacity="0.4" />
    <Pepicon name="bicycle" type="print" :opacity="0.4" />
    <Pepicon name="book" type="print" :opacity="0.4" />
    <Pepicon name="camera" type="print" :opacity="0.4" />
    <Pepicon name="car" type="print" :opacity="0.4" />
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
