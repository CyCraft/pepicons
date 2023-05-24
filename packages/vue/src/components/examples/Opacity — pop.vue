<script lang="ts" setup>
import Pepicon from '../Pepicon.vue'
</script>

<template>
  <div class="example">
    <Pepicon type="pop" name="airplane" :opacity="0.4" />
    <Pepicon type="pop" name="battery" :opacity="0.4" />
    <Pepicon type="pop" name="bicycle" :opacity="0.4" />
    <Pepicon type="pop" name="book" :opacity="0.4" />
    <Pepicon type="pop" name="camera" :opacity="0.4" />
    <Pepicon type="pop" name="car" :opacity="0.4" />
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
