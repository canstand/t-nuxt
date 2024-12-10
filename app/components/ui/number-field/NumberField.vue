<script setup lang="ts">
import type { NumberFieldRootEmits, NumberFieldRootProps } from 'radix-vue'
import { NumberFieldRoot, useForwardPropsEmits } from 'radix-vue'

const props = defineProps<NumberFieldRootProps>()
const emits = defineEmits<NumberFieldRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <NumberFieldRoot v-bind="forwarded" class="grid gap-1.5">
    <slot />
  </NumberFieldRoot>
</template>
