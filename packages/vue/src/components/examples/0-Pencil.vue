<script lang="ts" setup>
import Pepicon from '../Pepicon.vue'
</script>

<template>
  <div class="example">
    <Pepicon name="airplane" type="pencil" />
    <Pepicon name="battery" type="pencil" />
    <Pepicon name="bicycle" type="pencil" />
    <Pepicon name="book" type="pencil" />
    <Pepicon name="camera" type="pencil" />
    <Pepicon name="car" type="pencil" />
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
