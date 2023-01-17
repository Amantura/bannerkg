<template>
  <div class="fixed hidden lg:block right-0 top-[300px]">
    <div rel="noreferrer" class="w-16 bg-blue-400 relative h-16 rounded-l-lg hover:rounded-none duration-200 group text-white flex-center">
      <span class="text-xl">
        <component :is="Phone" />
      </span>

      <div  class="absolute space-y-3 flex flex-col py-3 top-0 bg-blue-400 whitespace-nowrap group-hover:right-16 flex-center rounded-l-lg px-4 invisible group-hover:visible -z-10 duration-200 transition-all opacity-0 group-hover:opacity-100 right-0">
        <a href="tel:+996 702 703 703" class="px-3 py-2">
          +996 702 703 703
        </a>
        <a href="tel:+996 999 703 703"  class="px-3 py-2">
          +996 999 703 703
        </a>
        <a href="tel:+996 222 703 703" class="px-3 py-2">
          +996 222 703 703
        </a>
      </div>
    </div>
    <a rel="noreferrer" target="_blank" v-for="link in links" :key="link.title" :href="link.to" :class="link.class" class="w-16 relative h-16 rounded-l-lg hover:rounded-none duration-200 group text-white flex-center">
      <span class="text-xl">
        <component :is="link.icon" />
      </span>

      <div :class="link.class" class="absolute top-0 h-full whitespace-nowrap group-hover:right-16 flex-center rounded-l-lg pl-4 invisible group-hover:visible -z-10 duration-200 transition-all opacity-0 group-hover:opacity-100 right-0">
        {{ link.title }}
      </div>
    </a>
  </div>

  <div @click="visible = !visible" :class="{'bg-gray-500': visible}" class="fixed duration-200 bottom-10 lg:hidden flex-center text-white right-5 w-16 h-16 shadow-xl rounded-full bg-orange-500">
    <transition
      enter-active-class="transform transition-all ease-out duration-200"
      leave-active-class="transform transition-all ease-out duration-200"
      enter-from-class="scale-0 opacity-0"
      leave-to-class="scale-0 opacity-0"
      mode="out-in"
    >
      <Message v-if="!visible" />
      <Times v-else />
    </transition>
  </div>

  <transition
      enter-active-class="transform transition-all ease-out duration-200"
      leave-active-class="transform transition-all ease-out duration-200"
      enter-from-class="translate-y-20 opacity-0"
      leave-to-class="translate-y-20 opacity-0"
      mode="out-in"
    >
  <Links :links="links" v-if="visible" />
  </transition>
</template>

<script setup>
import Instagram from './icons/Instagram.vue'
import Whatsapp from './icons/Whatsapp.vue'
import Telegram from './icons/Telegram.vue'
import Mail from './icons/Mail.vue'
import Lalafo from './icons/Lalafo.vue'
import Phone from './icons/Phone.vue'
import Message from './icons/Message.vue'
import Times from './icons/Times.vue'
import Links from './Links.vue'
import { ref } from 'vue'

const visible = ref(false)

const links = [
  {
    title: '@banner.kg',
    to: 'https://instagram.com/banner.kg',
    class: 'bg-rose-500',
    icon: Instagram
  },
  {
    title: '+996 702 703 703',
    to: 'https://wa.me/+996702703703',
    class: 'bg-green-500',
    icon: Whatsapp
  },
  {
    title: '@lazerkg',
    to: 'https://t.me/lazerkg',
    class: 'bg-blue-500',
    icon: Telegram
  },
  {
    title: '312banner.kg@gmail.com',
    to: 'mailto:312banner.kg@gmail.com',
    class: 'bg-red-500',
    icon: Mail
  },
  {
    title: '@lazer-kg',
    to: 'https://lalafo.kg/lazer-kg',
    class: 'bg-green-500',
    icon: Lalafo
  },
]
</script>