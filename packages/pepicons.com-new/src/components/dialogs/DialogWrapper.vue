<template>
  <transition name="modal-animation">
    <div v-if="isVisible" class="modal" @click.stop="$emit('close')">
      <transition name="modal-animation-inner">
        <div @click.stop v-if="$slots.default" class="relative">
          <!--Modal Content-->
          <div
            class="relative flex justify-center w-full bg-container-bg items-center rounded-lg z-30"
          >
            <!-- header -->
            <div v-if="kind !== 'basic'" class="text-center text-2xl font-bold text-black mt-6">
              {{ title }}
            </div>
            <button
              v-if="kind !== 'basic'"
              class="absolute top-4 right-6 w-7 cursor-pointer"
              @click.stop="$emit('close')"
            >
              <IconClose
                data-cy="modal-wrapper-close-button"
                theme="filled"
                size="60%"
                fill="#5C5C5C"
              />
            </button>

            <!-- body -->
            <div class="mt-7">
              <slot />
            </div>

            <!-- footer -->
          </div>
        </div>
      </transition>
    </div>
  </transition>
  <q-dialog
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
  </q-dialog>
</template>

<style lang="sass" scoped>
@import '../css/variables.sass'

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
  transition: opacity .3s cubic-bezier(0.52, 0.02, 0.19, 1.02)

// you dont need enter-to and leave-from since they are automatically assumed to be 1
.modal-animation-enter-from,
.modal-animation-leave-to
  opacity: 0

.modal-animation-inner-enter-active,
.modal-animation-inner-leave-active
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear

.modal-animation-inner-enter-from
  opacity: 0
  transform: scale(0.2)
.modal-animation-inner-leave-to
  transform: scale(0.2)
</style>

<script lang="js">
import { isFunction } from 'is-what'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DialogWrapper',
  props: {
    /**
     * Display a generic `✗` close button on the top-right.
     */
    showCloseButton: { type: Boolean, default: false },
    /**
     * The events that will be bound to the dialog component (with `v-on="dialogEvents"`)
     */
    dialogEvents: { type: Object, default: () => ({}) },
    /**
     * The props that will be bound to the dialog component (with `v-bind="dialogProps"`)
     */
    dialogProps: { type: Object, default: () => ({}) },
    /**
     * The component to show in the dialog. Can be a direct Vue component instance or a string with the component name (if registered).
     * @type {*}
     */
    slotComponent: { type: undefined },
    /**
     * The props that will be bound to the slot component (with `v-bind="slotProps"`). When passed a function it will receive the DialogWrapper context `(this)` as param and must return an object (with `this` you can use the context to do `hide()` etc.)
     */
    slotProps: { type: [Object, Function], default: () => ({}) },
    /**
     * The events that will be listened to, on the slot component (with `v-on="slotEvents"`). When passed a function it will receive the DialogWrapper context `(this)` as param and must return an object (with `this` you can use the context to do `hide()` etc.)
     */
    slotEvents: { type: [Object, Function], default: () => ({}) },
  },
  setup() {
    const { slotProps, slotEvents } = this
    const innerSlotProps = isFunction(slotProps) ? slotProps(this) : slotProps
    const innerSlotEvents = isFunction(slotEvents) ? slotEvents(this) : slotEvents

    // following method is REQUIRED
    // (don't change its name --> "show")
    function show () {
      if (!this.$refs.dialog) return
      this.$refs.dialog.show()
    }

    // following method is REQUIRED
    // (don't change its name --> "hide")
    function hide () {
      if (!this.$refs.dialog) return
      this.$refs.dialog.hide()
    }

    function onDialogHide (val) {
      if (val !== undefined) {
        return this.Ok(val)
      }
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit('hide')
    }

    function Ok (val) {
      // on Ok, it is REQUIRED to
      // emit "ok" event (with optional payload)
      // before hiding the QDialog
      this.$emit('ok', val)
      // or with payload: this.$emit('ok', { ... })

      // then hiding dialog
      this.hide()
    }

    function onCancelClick () {
      // we just need to hide dialog
      this.hide()
    }
    return {
      innerSlotProps,
      innerSlotEvents,
    }
}
})
</script>
