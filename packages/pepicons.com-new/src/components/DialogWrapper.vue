<template>
  <div v-if="kind === 'normal'">
    <transition name="modal-animation">
      <div v-if="isVisible" class="modal" @click.stop="$emit('close')">
        <transition name="modal-animation-inner">
          <div @click.stop v-if="$slots.default" style="position: relative">
            <!--Modal Content-->
            <div style="position: relative; display: flex; justify-content: center; width: 100%">
              <!-- header -->
              <!-- body -->
              <div>
                <slot />
              </div>
              <!-- footer -->
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
  <div v-if="kind === 'colorPicker'">
    <transition name="modal-animation">
      <div v-if="isVisible" class="modal" @click.stop="$emit('close')">
        <transition name="modal-animation-inner">
          <div @click.stop v-if="$slots.default" style="position: relative">
            <!--Modal Content-->
            <div style="position: relative; display: flex; justify-content: center; width: 100%">
              <!-- header -->
              <!-- body -->
              <div>
                <slot />
              </div>
              <!-- footer -->
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
  <!-- <q-dialog
    ref="dialog"
    @hide="onDialogHide"
    v-on="dialogEvents"
    v-bind="{ ...dialogProps, style: '', class: '' }"
  >
    <div :class="['dialog-wrapper', dialogProps.class].flat()" :style="dialogProps.style">
      <component :is="slotComponent" v-bind="innerSlotProps" v-on="innerSlotEvents" />
      <q-btn
        v-if="showCloseButton"
        @click="hide"
        class="_close"
        icon="close"
        color="primary"
        size="lg"
        flat
      />
      <q-inner-loading :showing="dialogProps.loading">
        <q-spinner size="50px" color="primary" />
      </q-inner-loading>
    </div>
  </q-dialog> -->
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
  height: 100vh
  width: 100vw
  background-color: rgba(0, 0, 0, 0.4)
  z-index: 20


.dialog-wrapper
  position: relative
  background: none
  min-width: 280px
  max-width: 80vw
  ._close
    position: absolute
    top: 0
    right: 0

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
<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'ModalWrapper',
  props: {
    isVisible: Boolean,
    kind: {
      type: String as PropType<'normal' | 'colorPicker'>,
      default: 'normal',
    },
  },
  emits: ['close'],
  setup() {},
})
</script>
