<script lang="ts" setup>
import { DatePickerHeadCell, type DatePickerHeadCellProps, useForwardProps } from 'radix-vue'

const props = defineProps<DatePickerHeadCellProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DatePickerHeadCell class="w-8 rounded-md text-[0.8rem] text-gray11 font-normal" v-bind="forwardedProps">
    <slot />
  </DatePickerHeadCell>
</template>
