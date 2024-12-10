<script lang="ts" setup>
import { CalendarGrid, type CalendarGridProps, useForwardProps } from 'radix-vue'

const props = defineProps<CalendarGridProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <CalendarGrid
    class="w-full border-collapse space-y-1"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarGrid>
</template>
