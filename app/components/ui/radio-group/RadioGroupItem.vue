<script setup lang="ts">
import { CheckIcon } from '@radix-icons/vue'
import {
  RadioGroupIndicator,
  RadioGroupItem,
  type RadioGroupItemProps,
  useForwardProps,
} from 'radix-vue'

const props = defineProps<RadioGroupItemProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <RadioGroupItem
    v-bind="forwardedProps"
    class="aspect-square size-4 border border-gray12 rounded-full shadow disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus-visible:ring-1 focus-visible:ring-gray12"
  >
    <RadioGroupIndicator class="flex items-center justify-center">
      <CheckIcon class="h-3.5 w-3.5 fill-accent9" />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
