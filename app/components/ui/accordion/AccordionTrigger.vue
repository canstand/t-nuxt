<script setup lang="ts">
import { ChevronDownIcon } from '@radix-icons/vue'
import {
  AccordionHeader,
  AccordionTrigger,
  type AccordionTriggerProps,
} from 'radix-vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<AccordionTriggerProps>()
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="props"
      class="flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180 hover:underline"
    >
      <slot />
      <slot name="icon">
        <ChevronDownIcon class="size-4 shrink-0 transition-transform duration-200" aria-hidden />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
