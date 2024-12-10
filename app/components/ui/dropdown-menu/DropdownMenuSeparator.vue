<script setup lang="ts">
import {
  DropdownMenuSeparator,
  type DropdownMenuSeparatorProps,
} from 'radix-vue'

const props = defineProps<DropdownMenuSeparatorProps>()
</script>

<template>
  <DropdownMenuSeparator v-bind="props" class="my-1 h-px bg-gray3 -mx-1" />
</template>
