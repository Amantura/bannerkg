<template>
  <div class="fixed bottom-[120px] z-10 w-16 flex flex-col items-center space-y-3 right-5">
    <a :href="link.to" target="_blank" rel="noreferrer" v-for="link in props.links" class="w-16 text-white h-16 flex-shrink-0 rounded-full flex-center" :class="link.class" :key="link.title">
      <component :is="link.icon" />
    </a>

    <button @click="drawer.open" class="w-16 text-white h-16 bg-blue-400 flex-shrink-0 rounded-full flex-center" >
      <Phone />
    </button>
    
    <PhonesDrawer ref="drawer" />
  </div>
</template>

<script setup>
import PhonesDrawer from './PhonesDrawer.vue'
import Phone from './icons/Phone.vue'
import { ref } from 'vue'

const props = defineProps({
  links: {
    type: Array,
    required: true
  }
})

const drawer = ref(null)
</script>