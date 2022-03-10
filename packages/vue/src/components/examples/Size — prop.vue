<script lang="ts" setup>
import Pepicon from '../Pepicon.vue'
</script>

<template>
  <div class="example">
    <Pepicon name="airplane" size="xs" />
    <Pepicon name="battery" size="sm" />
    <Pepicon name="bicycle" size="md" />
    <Pepicon name="book" size="lg" />
    <Pepicon name="camera" size="xl" />
    <Pepicon name="car" size="xxl" />
  </div>
</template>

<style scoped>
.example {
  display: flex;
  flex-wrap: wrap;
}
.example > * {
  margin: 1rem;
  color: mediumslateblue;
}
</style>
