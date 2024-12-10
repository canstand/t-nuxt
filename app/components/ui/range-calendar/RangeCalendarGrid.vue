<script lang="ts" setup>
import { RangeCalendarGrid, type RangeCalendarGridProps, useForwardProps } from 'radix-vue'

const props = defineProps<RangeCalendarGridProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <RangeCalendarGrid
    class="w-full border-collapse space-y-1"
    v-bind="forwardedProps"
  >
    <slot />
  </RangeCalendarGrid>
</template>
