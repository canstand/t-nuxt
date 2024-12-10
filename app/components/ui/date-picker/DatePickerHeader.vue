<script lang="ts" setup>
import { DatePickerHeader, type DatePickerHeaderProps, useForwardProps } from 'radix-vue'

const props = defineProps<DatePickerHeaderProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DatePickerHeader class="relative w-full flex items-center justify-between pt-1" v-bind="forwardedProps">
    <slot />
  </DatePickerHeader>
</template>
