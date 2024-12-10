<script setup lang="ts">
import type { ComboboxContentEmits, ComboboxContentProps } from 'radix-vue'
import { ComboboxContent, useForwardPropsEmits } from 'radix-vue'

const props = withDefaults(defineProps<ComboboxContentProps>(), {
  dismissable: false,
})
const emits = defineEmits<ComboboxContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <ComboboxContent v-bind="forwarded" class="max-h-[300px] overflow-x-hidden overflow-y-auto">
    <div role="presentation">
      <slot />
    </div>
  </ComboboxContent>
</template>
