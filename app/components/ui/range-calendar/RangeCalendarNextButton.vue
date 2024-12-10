<script lang="ts" setup>
import { ChevronRightIcon } from '@radix-icons/vue'
import { RangeCalendarNext, type RangeCalendarNextProps, useForwardProps } from 'radix-vue'

const props = defineProps<RangeCalendarNextProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <RangeCalendarNext
    class="h-7 w-7 inline-flex items-center justify-center whitespace-nowrap border border-hue7 rounded-md text-sm shadow-sm transition-colors hue-gray disabled:pointer-events-none hover:bg-hue3 hover:text-hue-12 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-hue12"
    v-bind="forwardedProps"
  >
    <slot>
      <ChevronRightIcon class="size-4" />
    </slot>
  </RangeCalendarNext>
</template>
