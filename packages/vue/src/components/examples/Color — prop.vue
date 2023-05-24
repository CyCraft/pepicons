<script lang="ts" setup>
import Pepicon from '../Pepicon.vue'
</script>

<template>
  <div class="example">
    <Pepicon type="pop" name="airplane" color="mediumslateblue" />
    <Pepicon type="pop" name="battery" color="mediumslateblue" />
    <Pepicon type="pop" name="bicycle" color="mediumslateblue" />
    <Pepicon type="pop" name="book" color="mediumslateblue" />
    <Pepicon type="pop" name="camera" color="mediumslateblue" />
    <Pepicon type="pop" name="car" color="mediumslateblue" />
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
