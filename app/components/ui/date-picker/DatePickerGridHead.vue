<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { DatePickerGridHead, type DatePickerGridHeadProps } from 'radix-vue'

const props = defineProps<DatePickerGridHeadProps & { class?: HTMLAttributes['class'] }>()
</script>

<template>
  <DatePickerGridHead v-bind="props">
    <slot />
  </DatePickerGridHead>
</template>
