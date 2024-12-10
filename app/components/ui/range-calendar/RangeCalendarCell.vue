<script lang="ts" setup>
import { RangeCalendarCell, type RangeCalendarCellProps, useForwardProps } from 'radix-vue'

const props = defineProps<RangeCalendarCellProps>()

const delegatedProps = computed(() => {
  const { ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarCell
    class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md [&:has([data-selected])]:bg-accent5 [&:has([data-selected][data-outside-view])]:bg-accent3 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md"
    v-bind="forwardedProps"
  >
    <slot />
  </RangeCalendarCell>
</template>
