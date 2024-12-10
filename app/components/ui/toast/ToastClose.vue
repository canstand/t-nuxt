<script setup lang="ts">
import { Cross2Icon } from '@radix-icons/vue'
import { ToastClose, type ToastCloseProps } from 'radix-vue'

const props = defineProps<ToastCloseProps>()
</script>

<template>
  <ToastClose v-bind="props" class="absolute right-1 top-1 rounded-md p-1 text-gray11 opacity-0 transition-opacity group-[.destructive]:text-error9 hover:text-gray12 focus:opacity-100 group-hover:opacity-100 focus:outline-none focus:ring-1 group-[.destructive]:hover:text-error10 group-[.destructive]:focus:ring-error8 group-[.destructive]:focus:ring-offset-error11">
    <Cross2Icon class="h-4 w-4" />
  </ToastClose>
</template>
