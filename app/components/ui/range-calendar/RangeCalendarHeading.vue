<script lang="ts" setup>
import { RangeCalendarHeading, type RangeCalendarHeadingProps, useForwardProps } from 'radix-vue'

const props = defineProps<RangeCalendarHeadingProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <RangeCalendarHeading
    v-slot="{ headingValue }"
    class="text-sm text-gray12 font-medium"
    v-bind="forwardedProps"
  >
    <slot :heading-value>
      {{ headingValue }}
    </slot>
  </RangeCalendarHeading>
</template>
