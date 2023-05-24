<docs darkExample>Update the shadow to be able to tweak usage on dark backgrounds</docs>

<script lang="ts" setup>
import Pepicon from '../Pepicon.vue'
</script>

<template>
  <div class="example">
    <Pepicon name="airplane" type="print" color="lightcoral" shadow="black" />
    <Pepicon name="battery" type="print" color="lightcoral" shadow="black" />
    <Pepicon name="bicycle" type="print" color="lightcoral" shadow="black" />
    <Pepicon name="book" type="print" color="lightcoral" shadow="black" />
    <Pepicon name="camera" type="print" color="lightcoral" shadow="black" />
    <Pepicon name="car" type="print" color="lightcoral" shadow="black" />
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
