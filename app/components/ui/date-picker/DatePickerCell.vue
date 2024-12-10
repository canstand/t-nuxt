<script lang="ts" setup>
import { DatePickerCell, type DatePickerCellProps } from 'radix-vue'

const props = defineProps<DatePickerCellProps>()
</script>

<template>
  <DatePickerCell
    class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-accent5 [&:has([data-selected][data-outside-view])]:bg-accent5"
    v-bind="props"
  >
    <slot />
  </DatePickerCell>
</template>
