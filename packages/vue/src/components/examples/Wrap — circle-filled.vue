<script lang="ts" setup>
import Pepicon from '../Pepicon.vue'
</script>

<template>
  <div class="example">
    <Pepicon type="pop" name="airplane-circle-filled" color="mediumslateblue" />
    <Pepicon type="pop" name="battery-circle-filled" color="mediumslateblue" />
    <Pepicon type="pop" name="bicycle-circle-filled" color="mediumslateblue" />
    <Pepicon type="pop" name="book-circle-filled" color="mediumslateblue" />
    <Pepicon type="pop" name="camera-circle-filled" color="mediumslateblue" />
    <Pepicon type="pop" name="car-circle-filled" color="mediumslateblue" />
  </div>
  <div class="example">
    <Pepicon type="print" name="airplane-circle-filled" color="mediumslateblue" />
    <Pepicon type="print" name="battery-circle-filled" color="mediumslateblue" />
    <Pepicon type="print" name="bicycle-circle-filled" color="mediumslateblue" />
    <Pepicon type="print" name="book-circle-filled" color="mediumslateblue" />
    <Pepicon type="print" name="camera-circle-filled" color="mediumslateblue" />
    <Pepicon type="print" name="car-circle-filled" color="mediumslateblue" />
  </div>
  <div class="example">
    <Pepicon type="pencil" name="airplane-circle-filled" color="mediumslateblue" />
    <Pepicon type="pencil" name="battery-circle-filled" color="mediumslateblue" />
    <Pepicon type="pencil" name="bicycle-circle-filled" color="mediumslateblue" />
    <Pepicon type="pencil" name="book-circle-filled" color="mediumslateblue" />
    <Pepicon type="pencil" name="camera-circle-filled" color="mediumslateblue" />
    <Pepicon type="pencil" name="car-circle-filled" color="mediumslateblue" />
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
