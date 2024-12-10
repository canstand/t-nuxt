<script setup lang="ts">
import { SelectLabel, type SelectLabelProps } from 'radix-vue'

const props = defineProps<SelectLabelProps>()
</script>

<template>
  <SelectLabel v-bind="props" class="px-2 py-1.5 text-sm font-medium">
    <slot />
  </SelectLabel>
</template>
