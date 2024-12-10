<script lang="ts" setup>
import { CalendarHeader, type CalendarHeaderProps, useForwardProps } from 'radix-vue'

const props = defineProps<CalendarHeaderProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <CalendarHeader class="relative w-full flex items-center justify-between pt-1" v-bind="forwardedProps">
    <slot />
  </CalendarHeader>
</template>
