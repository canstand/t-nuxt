<script lang="ts" setup>
import { DatePickerGridBody, type DatePickerGridBodyProps } from 'radix-vue'

const props = defineProps<DatePickerGridBodyProps>()
</script>

<template>
  <DatePickerGridBody v-bind="props" class="text-gray12">
    <slot />
  </DatePickerGridBody>
</template>
