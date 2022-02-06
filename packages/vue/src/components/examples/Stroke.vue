<script lang="ts" setup>
import Pepicon from '../Pepicon.vue'
</script>

<template>
  <div class="example">
    <Pepicon name="airplane" type="print" stroke="lightcoral" color="black" />
    <Pepicon name="battery" type="print" stroke="lightcoral" color="black" />
    <Pepicon name="bicycle" type="print" stroke="lightcoral" color="black" />
    <Pepicon name="book" type="print" stroke="lightcoral" color="black" />
    <Pepicon name="camera" type="print" stroke="lightcoral" color="black" />
    <Pepicon name="car" type="print" stroke="lightcoral" color="black" />
  </div>
</template>

<style scoped>
.example {
  background: #1d1d1d;
  display: flex;
  flex-wrap: wrap;
}
.example > * {
  margin: 1rem;
}
</style>
