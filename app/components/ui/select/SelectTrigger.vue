<script setup lang="ts">
import { CaretSortIcon } from '@radix-icons/vue'
import { SelectIcon, SelectTrigger, type SelectTriggerProps, useForwardProps } from 'radix-vue'

const props = defineProps<SelectTriggerProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    class="h-9 w-full flex items-center justify-between whitespace-nowrap border border-gray7 rounded-md bg-transparent px-3 py-2 text-start text-sm shadow-sm ring-offset-gray4 disabled:cursor-not-allowed [&>span]:truncate data-[placeholder]:text-gray11 disabled:opacity-50 focus:outline-none focus:ring-1 focus:ring-gray8"
  >
    <slot />
    <SelectIcon as-child>
      <CaretSortIcon class="size-4 shrink-0 opacity-50" />
    </SelectIcon>
  </SelectTrigger>
</template>
