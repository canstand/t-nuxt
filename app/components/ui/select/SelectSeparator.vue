<script setup lang="ts">
import { SelectSeparator, type SelectSeparatorProps } from 'radix-vue'

const props = defineProps<SelectSeparatorProps>()
</script>

<template>
  <SelectSeparator v-bind="props" class="my-1 h-px bg-gray3 -mx-1" />
</template>
