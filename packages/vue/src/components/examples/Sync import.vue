<script lang="ts" setup>
import { PopAirplane } from '../../index'
import { PopBattery } from '../../index'
import { PopBicycle } from '../../index'
import { PopBook } from '../../index'
import { PopCamera } from '../../index'
import { PopCar } from '../../index'
import { PrintAirplane } from '../../index'
import { PrintBattery } from '../../index'
import { PrintBicycle } from '../../index'
import { PrintBook } from '../../index'
import { PrintCamera } from '../../index'
import { PrintCar } from '../../index'
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
