<script lang="ts" setup>
import { RangeCalendarCellTrigger, type RangeCalendarCellTriggerProps, useForwardProps } from 'radix-vue'

const props = defineProps<RangeCalendarCellTriggerProps>()

const delegatedProps = computed(() => {
  const { ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarCellTrigger
    class="size-8 inline-flex items-center justify-center whitespace-nowrap rounded-md p-0 text-sm font-normal transition-colors hue-gray disabled:pointer-events-none [&[data-outside-view][data-selected]]:bg-accent3 [&[data-today]:not([data-selected])]:bg-accent3 data-[selection-end]:bg-accent9 data-[selection-start]:bg-accent9 hover:bg-hue3 [&[data-outside-view][data-selected]]:text-gray11 data-[disabled]:text-gray11 data-[outside-view]:text-gray11 data-[selection-end]:text-accent-fg data-[selection-start]:text-accent-fg data-[unavailable]:text-error9 data-[unavailable]:line-through [&[data-outside-view][data-selected]]:opacity-30 data-[disabled]:opacity-50 data-[outside-view]:opacity-50 data-[selected]:opacity-100 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-hue12 data-[selection-end]:hover:bg-accent10 data-[selection-start]:hover:bg-accent10 data-[selection-end]:focus:ring-accent8 data-[selection-start]:focus:ring-accent8"
    v-bind="forwardedProps"
  >
    <slot />
  </RangeCalendarCellTrigger>
</template>
