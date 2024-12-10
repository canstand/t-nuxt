<script setup lang="ts">
import type { ComboboxSeparatorProps } from 'radix-vue'
import { ComboboxSeparator } from 'radix-vue'

const props = defineProps<ComboboxSeparatorProps>()
</script>

<template>
  <ComboboxSeparator
    v-bind="props"
    class="h-px bg-gray6 -mx-1"
  >
    <slot />
  </ComboboxSeparator>
</template>
