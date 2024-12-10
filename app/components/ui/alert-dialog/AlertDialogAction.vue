<script setup lang="ts">
import { AlertDialogAction, type AlertDialogActionProps } from 'radix-vue'
import { buttonVariants } from '../button/Button.vue'

const props = defineProps<AlertDialogActionProps>()
</script>

<template>
  <AlertDialogAction v-bind="props" :class="buttonVariants()">
    <slot />
  </AlertDialogAction>
</template>
