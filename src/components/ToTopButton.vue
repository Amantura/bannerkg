<template>
  <transition
    enter-active-class="transform transition-all ease-out duration-200"
    leave-active-class="transform transition-all ease-out duration-200"
    enter-from-class="opacity-0 scale-0"
    leave-to-class="opacity-0 scale-0"
  >
    <button @click="toTop" v-if="y > 100" class="fixed invisible lg:visible bottom-[70px] flex-center right-[70px] text-white w-[70px] h-[70px] rounded-full bg-orange-500 text-xl shadow-sm">
      <svg xmlns="http://www.w3.org/2000/svg" class="fill-current" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"/></svg>
    </button>
  </transition>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()

function toTop() {
  const el = document.createElement('a')
  el.href = '#main'
  el.click()
}
</script>