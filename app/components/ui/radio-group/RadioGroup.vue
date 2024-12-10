<script setup lang="ts">
import { RadioGroupRoot, type RadioGroupRootEmits, type RadioGroupRootProps, useForwardPropsEmits } from 'radix-vue'

const props = defineProps<RadioGroupRootProps>()
const emits = defineEmits<RadioGroupRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <RadioGroupRoot
    class="grid gap-2"
    v-bind="forwarded"
  >
    <slot />
  </RadioGroupRoot>
</template>
