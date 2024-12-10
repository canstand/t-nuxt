<script lang="ts" setup>
import { CalendarHeadCell, type CalendarHeadCellProps, useForwardProps } from 'radix-vue'

const props = defineProps<CalendarHeadCellProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <CalendarHeadCell class="w-8 rounded-md text-[0.8rem] text-gray11 font-normal" v-bind="forwardedProps">
    <slot />
  </CalendarHeadCell>
</template>
