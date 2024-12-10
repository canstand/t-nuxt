<script lang="ts" setup>
import { RangeCalendarHeadCell, type RangeCalendarHeadCellProps, useForwardProps } from 'radix-vue'

const props = defineProps<RangeCalendarHeadCellProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <RangeCalendarHeadCell class="w-8 rounded-md text-[0.8rem] text-gray11 font-normal" v-bind="forwardedProps">
    <slot />
  </RangeCalendarHeadCell>
</template>
