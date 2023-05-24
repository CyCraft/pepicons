<script lang="ts" setup>
import Pepicon from '../Pepicon.vue'
</script>

<template>
  <div class="example">
    <Pepicon type="pop" name="airplane" size="xs" />
    <Pepicon type="pop" name="battery" size="sm" />
    <Pepicon type="pop" name="bicycle" size="md" />
    <Pepicon type="pop" name="book" size="lg" />
    <Pepicon type="pop" name="camera" size="xl" />
    <Pepicon type="pop" name="car" size="xxl" />
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
