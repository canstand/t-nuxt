<script setup lang="ts">
import { DialogTitle, type DialogTitleProps, useForwardProps } from 'radix-vue'

const props = defineProps<DialogTitleProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DialogTitle
    v-bind="forwardedProps"
    class="text-lg font-medium leading-none tracking-tight"
  >
    <slot />
  </DialogTitle>
</template>
