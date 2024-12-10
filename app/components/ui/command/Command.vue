<script setup lang="ts">
import type { ComboboxRootEmits, ComboboxRootProps } from 'radix-vue'
import { ComboboxRoot, useForwardPropsEmits } from 'radix-vue'

const props = withDefaults(defineProps<ComboboxRootProps>(), {
  open: true,
  modelValue: '',
})

const emits = defineEmits<ComboboxRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <ComboboxRoot
    v-bind="forwarded"
    class="h-full w-full flex flex-col overflow-hidden rounded-md bg-gray1 text-gray12"
  >
    <slot />
  </ComboboxRoot>
</template>
