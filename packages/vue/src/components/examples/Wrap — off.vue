<script lang="ts" setup>
import Pepicon from '../Pepicon.vue'
</script>

<template>
  <div class="example">
    <Pepicon type="pop" name="airplane-off" color="mediumslateblue" />
    <Pepicon type="pop" name="battery-off" color="mediumslateblue" />
    <Pepicon type="pop" name="bicycle-off" color="mediumslateblue" />
    <Pepicon type="pop" name="book-off" color="mediumslateblue" />
    <Pepicon type="pop" name="camera-off" color="mediumslateblue" />
    <Pepicon type="pop" name="car-off" color="mediumslateblue" />
  </div>
  <div class="example">
    <Pepicon type="print" name="airplane-off" color="mediumslateblue" />
    <Pepicon type="print" name="battery-off" color="mediumslateblue" />
    <Pepicon type="print" name="bicycle-off" color="mediumslateblue" />
    <Pepicon type="print" name="book-off" color="mediumslateblue" />
    <Pepicon type="print" name="camera-off" color="mediumslateblue" />
    <Pepicon type="print" name="car-off" color="mediumslateblue" />
  </div>
  <div class="example">
    <Pepicon type="pencil" name="airplane-off" color="mediumslateblue" />
    <Pepicon type="pencil" name="battery-off" color="mediumslateblue" />
    <Pepicon type="pencil" name="bicycle-off" color="mediumslateblue" />
    <Pepicon type="pencil" name="book-off" color="mediumslateblue" />
    <Pepicon type="pencil" name="camera-off" color="mediumslateblue" />
    <Pepicon type="pencil" name="car-off" color="mediumslateblue" />
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
