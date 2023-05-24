<script lang="ts" setup>
import Pepicon from '../Pepicon.vue'
</script>

<template>
  <div class="example">
    <Pepicon type="pop" name="airplane" class="xs" />
    <Pepicon type="pop" name="battery" class="sm" />
    <Pepicon type="pop" name="bicycle" class="md" />
    <Pepicon type="pop" name="book" class="lg" />
    <Pepicon type="pop" name="camera" class="xl" />
    <Pepicon type="pop" name="car" class="xxl" />
  </div>
</template>

<style scoped>
.example {
  display: flex;
  flex-wrap: wrap;
}
.example > * {
  margin: 1rem;
  color: mediumslateblue;
}

.xs {
  width: 4px;
}
.sm {
  width: 8px;
}
.md {
  width: 12px;
}
.lg {
  width: 16px;
}
.xl {
  width: 18px;
}
.xxl {
  width: 22px;
}
</style>
