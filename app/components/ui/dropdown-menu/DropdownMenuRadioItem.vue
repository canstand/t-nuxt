<script setup lang="ts">
import { DotFilledIcon } from '@radix-icons/vue'
import {
  DropdownMenuItemIndicator,
  DropdownMenuRadioItem,
  type DropdownMenuRadioItemEmits,
  type DropdownMenuRadioItemProps,
  useForwardPropsEmits,
} from 'radix-vue'

const props = defineProps<DropdownMenuRadioItemProps>()

const emits = defineEmits<DropdownMenuRadioItemEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DropdownMenuRadioItem
    v-bind="forwarded"
    class="relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none focus:bg-gray3 data-[disabled]:opacity-50"
  >
    <span class="absolute left-2 h-3.5 w-3.5 flex items-center justify-center">
      <DropdownMenuItemIndicator>
        <DotFilledIcon class="size-4 fill-current" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuRadioItem>
</template>
