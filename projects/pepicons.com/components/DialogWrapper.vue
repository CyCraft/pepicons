<script lang="ts" setup>
const props = defineProps({
  isVisible: Boolean,
})
const emit = defineEmits(['close'])
</script>

<template>
  <transition name="modal-animation">
    <div v-if="isVisible" class="modal" @click.stop="$emit('close')">
      <transition name="modal-animation-inner">
        <div v-if="$slots.default" style="position: relative" @click.stop>
          <!--Modal Content-->
          <div style="position: relative; display: flex; justify-content: center; width: 100%">
            <!-- body -->
            <div>
              <slot />
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style lang="sass" scoped>
@import '../css/variables.sass'

.modal
  display: flex
  justify-content: center
  align-items: center
  position: fixed
  top: 0
  left: 0
  bottom: 0
  right: 0
  margin: 0
  background-color: rgba(0, 0, 0, 0.4)
  z-index: 20


.modal-animation-enter-active,
.modal-animation-leave-active
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02)

.modal-animation-enter-from,
.modal-animation-leave-to
  opacity: 0

.modal-animation-inner-enter-active
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s

.modal-animation-inner-leave-active
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02)

.modal-animation-inner-enter-from
  opacity: 0
  transform: scale(0.8)

.modal-animation-inner-leave-to
  transform: scale(0.8)
</style>
