<script lang="ts" setup>
import Pepicon from '../Pepicon.vue'
</script>

<template>
  <div class="example">
    <Pepicon type="pop" name="airplane" color="mediumslateblue" wrap="off" />
    <Pepicon type="pop" name="battery" color="mediumslateblue" wrap="off" />
    <Pepicon type="pop" name="bicycle" color="mediumslateblue" wrap="off" />
    <Pepicon type="pop" name="book" color="mediumslateblue" wrap="off" />
    <Pepicon type="pop" name="camera" color="mediumslateblue" wrap="off" />
    <Pepicon type="pop" name="car" color="mediumslateblue" wrap="off" />
  </div>
  <div class="example">
    <Pepicon type="print" name="airplane" color="mediumslateblue" wrap="off" />
    <Pepicon type="print" name="battery" color="mediumslateblue" wrap="off" />
    <Pepicon type="print" name="bicycle" color="mediumslateblue" wrap="off" />
    <Pepicon type="print" name="book" color="mediumslateblue" wrap="off" />
    <Pepicon type="print" name="camera" color="mediumslateblue" wrap="off" />
    <Pepicon type="print" name="car" color="mediumslateblue" wrap="off" />
  </div>
  <div class="example">
    <Pepicon type="pencil" name="airplane" color="mediumslateblue" wrap="off" />
    <Pepicon type="pencil" name="battery" color="mediumslateblue" wrap="off" />
    <Pepicon type="pencil" name="bicycle" color="mediumslateblue" wrap="off" />
    <Pepicon type="pencil" name="book" color="mediumslateblue" wrap="off" />
    <Pepicon type="pencil" name="camera" color="mediumslateblue" wrap="off" />
    <Pepicon type="pencil" name="car" color="mediumslateblue" wrap="off" />
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
