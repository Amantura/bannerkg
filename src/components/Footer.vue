<template>
  <footer id="contacts" class="bg-orange-600 py-10 text-white">
    <div class="wrapper flex flex-wrap md:flex-nowrap !px-10 lg:!px-4 pb-10">
      <div class="xl:w-2/5 lg:w-1/4 hidden lg:block pt-4">
        <a class="flex space-x-4 items-center" href="#">
          <p class="text-3xl uppercase font-bold">Banner.kg</p>
          <img src="/logo.svg" alt="logo banner.kg" class="w-[50px]">
        </a>
      </div>
      <div class="lg:w-1/5 sm:w-1/2 hidden md:block md:w-1/3 w-full">
        <h3 class="font-semibold py-6 text-2xl">Меню</h3>

        <div class="flex flex-col space-y-1">
          <a class="flex hover:underline items-center space-x-2" v-for="link in links" :key="link.title" :href="link.to">
            <LeftArrow class="text-white/60" />
            <span>{{ link.title }}</span>
          </a>
        </div>
      </div>
      <div class="xl:w-1/5 lg:w-1/4 sm:w-1/2 md:w-1/3 w-full">
        <h3 class="font-semibold py-6 text-2xl">Контакты</h3>

        <div class="flex flex-col space-y-2">
          <a class="flex items-center space-x-2" v-for="phone in phones" :key="phone" :href="`tel:${phone}`">
            <Phone class="text-white/60" />
            <span>{{ phone }}</span>
          </a>

          <a class="flex items-center space-x-2" target="_blank" rel="noreferrer" href="https://instagram.com/banner.kg">
            <Instagram class="text-white/60" />
            <span>@banner.kg</span>
          </a>
          <a class="flex items-center space-x-2" href="mailto:312banner.kg@gmail.com">
            <Mail class="text-white/60" />
            <span>312banner.kg@gmail.com</span>
          </a>
        </div>
      </div>
      <div class="xl:w-1/5 lg:w-1/4 w-1/2 md:w-1/3">
        <h3 class="font-semibold py-6 text-2xl">Адрес</h3>

        <div class="flex flex-col space-y-1">
          <a href="#" class="flex items-center space-x-2">
            <Marker class="text-white/60" />
            <span>
              г. Бишкек <br>
              ул. Салиева 53б
            </span>
          </a>

          <p class="pt-3">
            <span class="font-semibold text-xl">График работы</span>
            <br>
            <span class="flex items-center space-x-2 pt-3">
              <Clock class="text-white/60" />
              <span>пн - сб 09:00 - 18:00</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Marker from '../components/icons/Marker.vue'
import Clock from '../components/icons/Clock.vue'
import LeftArrow from '../components/icons/LeftArrow.vue'
import Phone from '../components/icons/Phone.vue'
import Instagram from '../components/icons/Instagram.vue'
import Mail from '../components/icons/Mail.vue'

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

const phones = [
  '+996 509 703 703',
  '+996 990 703 703',
]
</script>