<script setup lang="ts">
import { ToastDescription, type ToastDescriptionProps } from 'radix-vue'

const props = defineProps<ToastDescriptionProps>()
</script>

<template>
  <ToastDescription class="text-sm opacity-90" v-bind="props">
    <slot />
  </ToastDescription>
</template>
