<script lang="ts" setup>
import { CalendarHeading, type CalendarHeadingProps, useForwardProps } from 'radix-vue'

const props = defineProps<CalendarHeadingProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <CalendarHeading
    v-slot="{ headingValue }"
    class="text-sm text-gray12 font-medium"
    v-bind="forwardedProps"
  >
    <slot :heading-value>
      {{ headingValue }}
    </slot>
  </CalendarHeading>
</template>
