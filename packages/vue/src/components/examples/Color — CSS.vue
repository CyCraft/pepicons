<script lang="ts" setup>
import Pepicon from '../Pepicon.vue'
</script>

<template>
  <div class="example">
    <Pepicon name="airplane" class="mediumslateblue" />
    <Pepicon name="battery" class="mediumslateblue" />
    <Pepicon name="bicycle" class="mediumslateblue" />
    <Pepicon name="book" class="mediumslateblue" />
    <Pepicon name="camera" class="mediumslateblue" />
    <Pepicon name="car" class="mediumslateblue" />
  </div>
</template>

<style scoped>
.mediumslateblue {
  color: mediumslateblue;
}
.example {
  display: flex;
  flex-wrap: wrap;
}
.example > * {
  margin: 1rem;
}
</style>
