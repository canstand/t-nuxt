<script setup lang="ts">
import type { NumberFieldDecrementProps } from 'radix-vue'
import { MinusIcon } from '@radix-icons/vue'
import { NumberFieldDecrement, useForwardProps } from 'radix-vue'

const props = defineProps<NumberFieldDecrementProps>()

const forwarded = useForwardProps(props)
</script>

<template>
  <NumberFieldDecrement data-slot="decrement" v-bind="forwarded" class="absolute left-0 top-1/2 p-3 -translate-y-1/2 disabled:cursor-not-allowed disabled:opacity-20">
    <slot>
      <MinusIcon class="h-4 w-4" />
    </slot>
  </NumberFieldDecrement>
</template>
