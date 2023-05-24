<script lang="ts" setup>
import Pepicon from '../Pepicon.vue'
</script>

<template>
  <div class="example">
    <Pepicon type="pop" name="airplane" class="mediumslateblue" />
    <Pepicon type="pop" name="battery" class="mediumslateblue" />
    <Pepicon type="pop" name="bicycle" class="mediumslateblue" />
    <Pepicon type="pop" name="book" class="mediumslateblue" />
    <Pepicon type="pop" name="camera" class="mediumslateblue" />
    <Pepicon type="pop" name="car" class="mediumslateblue" />
  </div>
</template>

<style scoped>
.mediumslateblue {
  color: mediumslateblue;
}
.example {
  display: flex;
  flex-wrap: wrap;
}
.example > * {
  margin: 1rem;
}
</style>
