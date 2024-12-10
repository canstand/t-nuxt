<script setup lang="ts">
import { AccordionContent, type AccordionContentProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<AccordionContentProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AccordionContent
    v-bind="delegatedProps"
    class="overflow-hidden data-[state=open]:accordion-down data-[state=closed]:accordion-up"
  >
    <div class="pb-4 pt-0" :class="props.class">
      <slot />
    </div>
  </AccordionContent>
</template>
