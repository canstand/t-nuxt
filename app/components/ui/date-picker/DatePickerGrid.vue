<script lang="ts" setup>
import { DatePickerGrid, type DatePickerGridProps, useForwardProps } from 'radix-vue'

const props = defineProps<DatePickerGridProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DatePickerGrid
    class="w-full border-collapse space-y-1"
    v-bind="forwardedProps"
  >
    <slot />
  </DatePickerGrid>
</template>
