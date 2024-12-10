<script setup lang="ts">
import { DropdownMenuLabel, type DropdownMenuLabelProps, useForwardProps } from 'radix-vue'

const props = defineProps<DropdownMenuLabelProps & { inset?: boolean }>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DropdownMenuLabel
    v-bind="forwardedProps"
    class="px-2 py-1.5 text-sm font-medium"
    :class="[{ 'pl-8': inset }]"
  >
    <slot />
  </DropdownMenuLabel>
</template>
