<script lang="ts" setup>
import Pepicon from '../Pepicon.vue'
</script>

<template>
  <div class="example">
    <Pepicon type="pop" name="airplane" color="mediumslateblue" wrap="round" />
    <Pepicon type="pop" name="battery" color="mediumslateblue" wrap="round" />
    <Pepicon type="pop" name="bicycle" color="mediumslateblue" wrap="round" />
    <Pepicon type="pop" name="book" color="mediumslateblue" wrap="round" />
    <Pepicon type="pop" name="camera" color="mediumslateblue" wrap="round" />
    <Pepicon type="pop" name="car" color="mediumslateblue" wrap="round" />
  </div>
  <div class="example">
    <Pepicon type="print" name="airplane" color="mediumslateblue" wrap="round" />
    <Pepicon type="print" name="battery" color="mediumslateblue" wrap="round" />
    <Pepicon type="print" name="bicycle" color="mediumslateblue" wrap="round" />
    <Pepicon type="print" name="book" color="mediumslateblue" wrap="round" />
    <Pepicon type="print" name="camera" color="mediumslateblue" wrap="round" />
    <Pepicon type="print" name="car" color="mediumslateblue" wrap="round" />
  </div>
  <div class="example">
    <Pepicon type="pencil" name="airplane" color="mediumslateblue" wrap="round" />
    <Pepicon type="pencil" name="battery" color="mediumslateblue" wrap="round" />
    <Pepicon type="pencil" name="bicycle" color="mediumslateblue" wrap="round" />
    <Pepicon type="pencil" name="book" color="mediumslateblue" wrap="round" />
    <Pepicon type="pencil" name="camera" color="mediumslateblue" wrap="round" />
    <Pepicon type="pencil" name="car" color="mediumslateblue" wrap="round" />
  </div>
  <div class="example">
    <Pepicon type="pencil" name="airplane-round" color="mediumslateblue" />
    <Pepicon type="pencil" name="battery-round" color="mediumslateblue" />
    <Pepicon type="pencil" name="bicycle-round" color="mediumslateblue" />
    <Pepicon type="pencil" name="book-round" color="mediumslateblue" />
    <Pepicon type="pencil" name="camera-round" color="mediumslateblue" />
    <Pepicon type="pencil" name="car-round" color="mediumslateblue" />
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
