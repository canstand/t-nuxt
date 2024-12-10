<script setup lang="ts">
import {
  AlertDialogDescription,
  type AlertDialogDescriptionProps,
} from 'radix-vue'

const props = defineProps<AlertDialogDescriptionProps>()
</script>

<template>
  <AlertDialogDescription
    v-bind="props"
    class="text-sm text-gray11"
  >
    <slot />
  </AlertDialogDescription>
</template>
