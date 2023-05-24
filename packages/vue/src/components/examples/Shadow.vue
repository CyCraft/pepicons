<docs darkPreview>You can update the shadow and its opacity individually</docs>

<script lang="ts" setup>
import Pepicon from '../Pepicon.vue'
</script>

<template>
  <div class="example">
    <Pepicon name="airplane" type="print" color="lightcoral" shadow="red" :opacity="1" />
    <Pepicon name="battery" type="print" color="lightcoral" shadow="red" :opacity="1" />
    <Pepicon name="bicycle" type="print" color="lightcoral" shadow="red" :opacity="1" />
    <Pepicon name="book" type="print" color="lightcoral" shadow="red" :opacity="1" />
    <Pepicon name="camera" type="print" color="lightcoral" shadow="red" :opacity="1" />
    <Pepicon name="car" type="print" color="lightcoral" shadow="red" :opacity="1" />
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
