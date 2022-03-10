<script lang="ts" setup>
import Pepicon from '../Pepicon.vue'
</script>

<docs darkExample>Update the stroke to be able to tweak usage on dark backgrounds</docs>

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
  display: flex;
  flex-wrap: wrap;
}
.example > * {
  margin: 1rem;
}
</style>
