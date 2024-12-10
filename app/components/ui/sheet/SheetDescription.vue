<script setup lang="ts">
import { DialogDescription, type DialogDescriptionProps } from 'radix-vue'

const props = defineProps<DialogDescriptionProps>()
</script>

<template>
  <DialogDescription
    class="text-sm text-gray11"
    v-bind="props"
  >
    <slot />
  </DialogDescription>
</template>
