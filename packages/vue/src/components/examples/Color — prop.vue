<script lang="ts" setup>
import Pepicon from '../Pepicon.vue'
</script>

<template>
  <div class="example">
    <Pepicon name="airplane" color="mediumslateblue" />
    <Pepicon name="battery" color="mediumslateblue" />
    <Pepicon name="bicycle" color="mediumslateblue" />
    <Pepicon name="book" color="mediumslateblue" />
    <Pepicon name="camera" color="mediumslateblue" />
    <Pepicon name="car" color="mediumslateblue" />
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
