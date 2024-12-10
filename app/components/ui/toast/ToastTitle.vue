<script setup lang="ts">
import { ToastTitle, type ToastTitleProps } from 'radix-vue'

const props = defineProps<ToastTitleProps>()
</script>

<template>
  <ToastTitle v-bind="props" class="text-sm font-medium [&+div]:text-xs">
    <slot />
  </ToastTitle>
</template>
