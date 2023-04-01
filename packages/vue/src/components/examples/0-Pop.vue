<script lang="ts" setup>
import Pepicon from '../Pepicon.vue'
</script>

<template>
  <div class="example">
    <Pepicon name="airplane" type="pop" />
    <Pepicon name="battery" type="pop" />
    <Pepicon name="bicycle" type="pop" />
    <Pepicon name="book" type="pop" />
    <Pepicon name="camera" type="pop" />
    <Pepicon name="car" type="pop" />
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
