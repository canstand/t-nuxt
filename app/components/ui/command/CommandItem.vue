<script setup lang="ts">
import type { ComboboxItemEmits, ComboboxItemProps } from 'radix-vue'
import { ComboboxItem, useForwardPropsEmits } from 'radix-vue'

const props = defineProps<ComboboxItemProps>()
const emits = defineEmits<ComboboxItemEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <ComboboxItem
    v-bind="forwarded"
    class="relative flex cursor-default select-none rounded px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gray3 data-[highlighted]:text-gray12 data-[disabled]:opacity-50"
  >
    <slot />
  </ComboboxItem>
</template>
