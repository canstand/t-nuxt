<script lang="ts" setup>
import { CalendarGridRow, type CalendarGridRowProps, useForwardProps } from 'radix-vue'

const props = defineProps<CalendarGridRowProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <CalendarGridRow class="flex" v-bind="forwardedProps">
    <slot />
  </CalendarGridRow>
</template>
