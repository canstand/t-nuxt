<script lang="ts" setup>
import { RangeCalendarGridRow, type RangeCalendarGridRowProps, useForwardProps } from 'radix-vue'

const props = defineProps<RangeCalendarGridRowProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <RangeCalendarGridRow class="flex" v-bind="forwardedProps">
    <slot />
  </RangeCalendarGridRow>
</template>
