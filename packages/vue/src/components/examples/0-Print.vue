<script lang="ts" setup>
import Pepicon from '../Pepicon.vue'
</script>

<template>
  <div class="example">
    <Pepicon name="airplane" type="print" />
    <Pepicon name="battery" type="print" />
    <Pepicon name="bicycle" type="print" />
    <Pepicon name="book" type="print" />
    <Pepicon name="camera" type="print" />
    <Pepicon name="car" type="print" />
  </div>
</template>

<style scoped>
.example {
  display: flex;
  flex-wrap: wrap;
  color: mediumslateblue;
}
.example > * {
  margin: 1rem;
}
</style>
