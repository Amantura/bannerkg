<template>
  <transition
      enter-active-class="transform transition-all ease-out duration-200"
      leave-active-class="transform transition-all ease-out duration-200"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
  <div v-if="visible" @click="close" class="fixed inset-0 bg-black/50 z-50"></div>
  </transition>
  <transition
      enter-active-class="transform transition-all ease-out duration-200"
      leave-active-class="transform transition-all ease-out duration-200"
      enter-from-class="-translate-x-full"
      leave-to-class="-translate-x-full"
    >
  <div v-if="visible" class="w-80 px-4 py-4 fixed flex flex-col h-screen overflow-hidden z-50 bg-orange-500 left-0 top-0">
    <a class="flex text-white space-x-4 py-3 px-2 items-center" href="#">
      <p class="text-2xl uppercase font-bold">Banner.kg</p>
      <img src="/logo.svg" alt="logo banner.kg" class="w-[50px]">
    </a>

    <div class="py-10 space-y-3 px-3 flex flex-col ">
      <button @click="toLink(link.to)" class="text-left text-xl text-white" v-for="link in links" :key="link.title">
        <span>{{ link.title }}</span>
      </button>
    </div>
  </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  links: {
    type: Array,
    required: true
  }
})

const visible = ref(false)

defineExpose({
  open, close
})

function toLink(url) {
  const el = document.createElement('a')
  el.href = url
  el.click()
  close()
}

function open() {
  visible.value = true
}

function close() {
  visible.value = false
}
</script>