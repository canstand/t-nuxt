<script lang="ts" setup>
import { DatePickerHeading, type DatePickerHeadingProps, useForwardProps } from 'radix-vue'

const props = defineProps<DatePickerHeadingProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DatePickerHeading
    v-slot="{ headingValue }"
    class="text-sm text-gray12 font-medium"
    v-bind="forwardedProps"
  >
    <slot :heading-value>
      {{ headingValue }}
    </slot>
  </DatePickerHeading>
</template>
