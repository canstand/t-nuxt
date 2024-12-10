<script setup lang="ts">
import { ChevronRightIcon } from '@radix-icons/vue'
import {
  DropdownMenuSubTrigger,
  type DropdownMenuSubTriggerProps,
  useForwardProps,
} from 'radix-vue'

const props = defineProps<DropdownMenuSubTriggerProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DropdownMenuSubTrigger
    v-bind="forwardedProps"
    class="flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-gray3 focus:bg-gray3"
  >
    <slot />
    <ChevronRightIcon class="ml-auto size-4" />
  </DropdownMenuSubTrigger>
</template>
