<script lang="ts" setup>
import { DatePickerCellTrigger, type DatePickerCellTriggerProps } from 'radix-vue'

const props = defineProps<DatePickerCellTriggerProps>()
</script>

<template>
  <DatePickerCellTrigger
    class="size-8 inline-flex items-center justify-center whitespace-nowrap rounded-md p-0 text-sm font-normal transition-colors disabled:pointer-events-none [&[data-outside-view][data-selected]]:bg-accent9A/50 [&[data-today]:not([data-selected])]:bg-accent5 data-[selected]:bg-accent9 hover:bg-accent3 [&[data-outside-view][data-selected]]:text-accent-fg data-[disabled]:text-gray11 data-[outside-view]:text-gray11 data-[selected]:text-accent-fg data-[unavailable]:text-error11 hover:text-accent12 data-[unavailable]:line-through [&[data-outside-view][data-selected]]:opacity-30 data-[disabled]:opacity-50 data-[outside-view]:opacity-50 data-[selected]:opacity-100 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent8 data-[selected]:focus:bg-accent10 data-[selected]:hover:bg-accent10 data-[selected]:hover:text-accent-fg"
    v-bind="props"
  >
    <slot />
  </DatePickerCellTrigger>
</template>
