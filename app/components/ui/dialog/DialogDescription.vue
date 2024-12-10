<script setup lang="ts">
import { DialogDescription, type DialogDescriptionProps, useForwardProps } from 'radix-vue'

const props = defineProps<DialogDescriptionProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DialogDescription
    v-bind="forwardedProps"
    class="text-sm text-gray11"
  >
    <slot />
  </DialogDescription>
</template>
