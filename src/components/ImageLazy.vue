<template>
  <img ref="lazyRef" :alt="props.src">
</template>

<script setup>
import { useLazyload } from 'vue3-lazyload'
import { ref } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  }
})

const src = ref(props.src)
const lazyRef = useLazyload(src)
</script>