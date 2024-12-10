<script setup lang="ts">
import { AlertDialogTitle, type AlertDialogTitleProps } from 'radix-vue'

const props = defineProps<AlertDialogTitleProps>()
</script>

<template>
  <AlertDialogTitle
    v-bind="props"
    class="text-lg font-semibold"
  >
    <slot />
  </AlertDialogTitle>
</template>
