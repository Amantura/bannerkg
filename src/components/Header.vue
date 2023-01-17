<script setup>
import { useWindowScroll } from '@vueuse/core'
import External from './icons/External.vue';
import Menu from './icons/Menu.vue'
import Drawer from './Drawer.vue'
import { ref } from 'vue'

const drawer = ref(null)

const { y } = useWindowScroll()
const links = [
  {
    title: 'Главная',
    to: '#main',
  },
  {
    title: 'О нас',
    to: '#about',
  },
  {
    title: 'Услуги',
    to: '#services',
  },
  {
    title: 'Наши работы',
    to: '#portfolio'
  },
  {
    title: 'Контакты',
    to: '#contacts',
  },
]
</script>

<template>
  <header :class="{'bg-orange-600 !h-[70px]': y > 40}"
    class="w-full transition-all duration-200 fixed top-0 inset-x-0 flex lg:h-[100px] h-[80px] xl:text-lg justify-center text-white">
    <div class="wrapper flex justify-between items-center space-x-3">
      <div class="flex items-center space-x-5">
        <button @click="drawer.open" class="lg:hidden">
          <Menu width="30" height="30" />
        </button>
        <a class="flex space-x-2 md:space-x-4 items-center" href="#">
          <p class="xl:text-3xl uppercase font-bold">Banner.kg</p>
          <img src="/logo.svg" alt="logo banner.kg" class="w-[50px]">
        </a>
      </div>
      <nav class="flex items-center font-medium uppercase">
        <a v-for="link in links"
          class="px-4 py-2 hidden lg:block rounded-lg xl:text-base text-sm hover:bg-white/10 duration-200"
          :key="link.title" :href="link.to">{{ link.title }}</a>
        <span class="relative ml-5 group">
          <a href="https://lazer.kg" target="_blank"
            class="md:px-6 px-3 flex font-bold space-x-2 md:py-3 py-2 rounded-lg bg-orange-500">
            <span>Lazer.kg</span>
            <External class="text-white/60 pb-1 xl:pb-0" />
          </a>
          <div
            class="absolute normal-case opacity-0 group-hover:opacity-100 shadow group-hover:visible invisible transition-all duration-200 text-black text-sm w-[300px] top-[70px] left-0 bg-white rounded-lg px-4 py-3">
            Производство и реализация сувенирной продукции
          </div>
        </span>
      </nav>
    </div>
  </header>

  <Drawer ref="drawer" :links="links" />
</template>