<script lang="ts" setup>
import { PopAirplane } from '../../../dist/index.es'
import { PopBattery } from '../../../dist/index.es'
import { PopBicycle } from '../../../dist/index.es'
import { PopBook } from '../../../dist/index.es'
import { PopCamera } from '../../../dist/index.es'
import { PopCar } from '../../../dist/index.es'
import { PrintAirplane } from '../../../dist/index.es'
import { PrintBattery } from '../../../dist/index.es'
import { PrintBicycle } from '../../../dist/index.es'
import { PrintBook } from '../../../dist/index.es'
import { PrintCamera } from '../../../dist/index.es'
import { PrintCar } from '../../../dist/index.es'
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
