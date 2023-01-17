<template>
  <section id="portfolio" class="wrapper pt-[60px] pb-[30px] lg:py-[80px]">
    <div class="flex justify-center lg:justify-start px-2">
      <h2 class="font-semibold border-orange-400 md:pb-2 text-3xl border-b-[5px]">Наши работы</h2>
    </div>
    <div class="xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid pt-10 gap-4">
      <photo-provider>
        <photo-consumer v-for="image in images" :key="image" :intro="image" :src="image">
          <ImageLazy :src="image" class="bg-gray-100 h-64 w-full object-cover hover:scale-105 transition-all duration-200 cursor-pointer hover:shadow-lg object-center flex-shrink-0 h-54 shadow-sm rounded-lg" />
        </photo-consumer>
      </photo-provider>
    </div>
  </section>
</template>

<script setup>
import ImageLazy from './ImageLazy.vue'
const images = [
  '/portfolio/1.jpg',
  '/portfolio/2.jpg',
  '/portfolio/3.jpg',
  '/portfolio/4.png',
  '/portfolio/5.jpg',
  '/portfolio/6.jpg',
  '/portfolio/7.jpg',
  '/portfolio/8.jpg',
  '/portfolio/9.jpg',
  '/portfolio/10.jpg',
  '/portfolio/11.jpg',
  '/portfolio/12.jpg',
  '/portfolio/13.jpg',
  '/portfolio/14.jpg',
  '/portfolio/15.jpg',
  '/portfolio/16.jpg',
  '/portfolio/17.jpg',
  '/portfolio/18.jpeg',
  '/portfolio/20.jpg',
  '/portfolio/21.jpg',
  '/portfolio/22.jpg',
  '/portfolio/23.jpg',
  '/portfolio/24.jpg',
  '/portfolio/25.jpg',
  '/portfolio/26.jpeg',
  '/portfolio/28.jpg',
  '/portfolio/29.jpg',
  '/portfolio/30.jpg',
  '/portfolio/31.jpg',
  '/portfolio/32.jpg',
  '/portfolio/33.jpg',
  '/portfolio/34.jpg',
]
</script>
