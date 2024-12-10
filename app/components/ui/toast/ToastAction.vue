<script setup lang="ts">
import { ToastAction, type ToastActionProps } from 'radix-vue'

const props = defineProps<ToastActionProps>()
</script>

<template>
  <ToastAction v-bind="props" class="hover:bg-secondary focus:ring-ring group-[.destructive]:focus:ring-destructive group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:text-destructive-foreground h-8 inline-flex shrink-0 items-center justify-center border rounded-md bg-transparent px-3 text-sm font-medium transition-colors disabled:pointer-events-none group-[.destructive]:border-gray3/40 disabled:opacity-50 focus:outline-none focus:ring-1 group-[.destructive]:hover:bg-error3">
    <slot />
  </ToastAction>
</template>
