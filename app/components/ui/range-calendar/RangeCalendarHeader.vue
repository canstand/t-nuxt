<script lang="ts" setup>
import { RangeCalendarHeader, type RangeCalendarHeaderProps, useForwardProps } from 'radix-vue'

const props = defineProps<RangeCalendarHeaderProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <RangeCalendarHeader class="relative w-full flex items-center justify-between pt-1" v-bind="forwardedProps">
    <slot />
  </RangeCalendarHeader>
</template>
