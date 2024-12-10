<script setup lang="ts">
import { AlertDialogCancel, type AlertDialogCancelProps } from 'radix-vue'
import { buttonVariants } from '../button/Button.vue'

const props = defineProps<AlertDialogCancelProps>()
</script>

<template>
  <AlertDialogCancel v-bind="props" class="mt-2 sm:mt-0" :class="buttonVariants({ variant: 'outline' })">
    <slot />
  </AlertDialogCancel>
</template>
