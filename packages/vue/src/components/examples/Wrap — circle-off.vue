<script lang="ts" setup>
import Pepicon from '../Pepicon.vue'
</script>

<template>
  <div class="example">
    <Pepicon type="pop" name="airplane-circle-off" color="mediumslateblue" />
    <Pepicon type="pop" name="battery-circle-off" color="mediumslateblue" />
    <Pepicon type="pop" name="bicycle-circle-off" color="mediumslateblue" />
    <Pepicon type="pop" name="book-circle-off" color="mediumslateblue" />
    <Pepicon type="pop" name="camera-circle-off" color="mediumslateblue" />
    <Pepicon type="pop" name="car-circle-off" color="mediumslateblue" />
  </div>
  <div class="example">
    <Pepicon type="print" name="airplane-circle-off" color="mediumslateblue" />
    <Pepicon type="print" name="battery-circle-off" color="mediumslateblue" />
    <Pepicon type="print" name="bicycle-circle-off" color="mediumslateblue" />
    <Pepicon type="print" name="book-circle-off" color="mediumslateblue" />
    <Pepicon type="print" name="camera-circle-off" color="mediumslateblue" />
    <Pepicon type="print" name="car-circle-off" color="mediumslateblue" />
  </div>
  <div class="example">
    <Pepicon type="pencil" name="airplane-circle-off" color="mediumslateblue" />
    <Pepicon type="pencil" name="battery-circle-off" color="mediumslateblue" />
    <Pepicon type="pencil" name="bicycle-circle-off" color="mediumslateblue" />
    <Pepicon type="pencil" name="book-circle-off" color="mediumslateblue" />
    <Pepicon type="pencil" name="camera-circle-off" color="mediumslateblue" />
    <Pepicon type="pencil" name="car-circle-off" color="mediumslateblue" />
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
