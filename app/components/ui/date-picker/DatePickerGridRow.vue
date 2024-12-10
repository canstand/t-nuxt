<script lang="ts" setup>
import { DatePickerGridRow, type DatePickerGridRowProps, useForwardProps } from 'radix-vue'

const props = defineProps<DatePickerGridRowProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DatePickerGridRow class="flex" v-bind="forwardedProps">
    <slot />
  </DatePickerGridRow>
</template>
