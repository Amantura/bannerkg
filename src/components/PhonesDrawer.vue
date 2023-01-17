<template>
  <transition
      enter-active-class="transform transition-all ease-out duration-200"
      leave-active-class="transform transition-all ease-out duration-200"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
  <div v-if="visible" @click="close" class="fixed !m-0 inset-0 bg-black/50 z-[100]">

  </div>
  </transition>

  <transition
      enter-active-class="transform transition-all ease-out duration-200"
      leave-active-class="transform transition-all ease-out duration-200"
      enter-from-class="translate-y-full"
      leave-to-class="translate-y-full"
    >
  <div v-if="visible" class="fixed space-y-4 min-h-[35vh] z-[100] !m-0 inset-x-0 bottom-0 bg-white rounded-t-3xl px-6 py-6">
    <div class="flex font-semibold items-center justify-between">
      <h5>Контакты</h5>
      <button @click="close">
        <Times />
      </button>
    </div>

    <div class="flex flex-col space-y-3">
      <a href="tel:+996 702 703 703" class="px-4 bg-gray-100 border rounded-lg  py-3">
          +996 702 703 703
        </a>
        <a href="tel:+996 999 703 703"  class="px-4  bg-gray-100 border rounded-lg py-3">
          +996 999 703 703
        </a>
        <a href="tel:+996 222 703 703" class="px-4  bg-gray-100 border rounded-lg py-3">
          +996 222 703 703
        </a>
    </div>
  </div>
  </transition>
</template>

<script setup>
import Times from './icons/Times.vue'
import { ref } from 'vue'

defineExpose({
  open, close
})

const visible = ref(false)

function open() {
  visible.value = true
}

function close() {
  visible.value = false
}
</script>