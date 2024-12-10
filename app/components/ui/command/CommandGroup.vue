<script setup lang="ts">
import type { ComboboxGroupProps } from 'radix-vue'
import { ComboboxGroup, ComboboxLabel } from 'radix-vue'

const props = defineProps<ComboboxGroupProps & {
  heading?: string
}>()
</script>

<template>
  <ComboboxGroup
    v-bind="props"
    class="overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-gray11 [&_[cmdk-group-heading]]:font-medium"
  >
    <ComboboxLabel v-if="heading" class="px-2 py-1.5 text-xs text-gray11 font-medium">
      {{ heading }}
    </ComboboxLabel>
    <slot />
  </ComboboxGroup>
</template>
