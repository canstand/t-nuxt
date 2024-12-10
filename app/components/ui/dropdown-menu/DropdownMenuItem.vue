<script setup lang="ts">
import { DropdownMenuItem, type DropdownMenuItemProps, useForwardProps } from 'radix-vue'

const props = defineProps<DropdownMenuItemProps & { inset?: boolean }>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DropdownMenuItem
    v-bind="forwardedProps"
    class="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none [&>svg]:size-4 [&>svg]:shrink-0 focus:bg-gray3 data-[disabled]:opacity-50"
    :class="inset ? 'pl-8' : ''"
  >
    <slot />
  </DropdownMenuItem>
</template>
