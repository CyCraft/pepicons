<script lang="ts" setup>
import {
  PopAirplane,
  PopBattery,
  PopBicycle,
  PopBook,
  PopCamera,
  PopCar,
  PrintAirplane,
  PrintBattery,
  PrintBicycle,
  PrintBook,
  PrintCamera,
  PrintCar,
} from '../../icons.ts'
</script>

<template>
  <div class="example">
    <PopAirplane />
    <PopBattery />
    <PopBicycle />
    <PopBook />
    <PopCamera />
    <PopCar />
    <PrintAirplane />
    <PrintBattery />
    <PrintBicycle />
    <PrintBook />
    <PrintCamera />
    <PrintCar />
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
</style>
