<script setup lang="ts">
import { AccordionItem, type AccordionItemProps } from 'radix-vue'

const props = defineProps<AccordionItemProps>()
</script>

<template>
  <AccordionItem
    v-bind="props"
    class="border-b"
  >
    <slot />
  </AccordionItem>
</template>
