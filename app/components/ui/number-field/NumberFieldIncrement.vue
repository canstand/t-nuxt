<script setup lang="ts">
import type { NumberFieldIncrementProps } from 'radix-vue'
import { PlusIcon } from '@radix-icons/vue'
import { NumberFieldIncrement, useForwardProps } from 'radix-vue'

const props = defineProps<NumberFieldIncrementProps>()

const forwarded = useForwardProps(props)
</script>

<template>
  <NumberFieldIncrement data-slot="increment" v-bind="forwarded" class="absolute right-0 top-1/2 p-3 -translate-y-1/2 disabled:cursor-not-allowed disabled:opacity-20">
    <slot>
      <PlusIcon class="h-4 w-4" />
    </slot>
  </NumberFieldIncrement>
</template>
