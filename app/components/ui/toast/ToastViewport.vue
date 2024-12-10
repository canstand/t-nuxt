<script setup lang="ts">
import { ToastViewport, type ToastViewportProps } from 'radix-vue'

const props = defineProps<ToastViewportProps>()
</script>

<template>
  <ToastViewport v-bind="props" class="fixed top-0 z-[100] max-h-screen w-full flex flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto md:max-w-[420px] sm:flex-col" />
</template>
