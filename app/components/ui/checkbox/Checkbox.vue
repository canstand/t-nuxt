<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from 'radix-vue'
import { CheckIcon } from '@radix-icons/vue'
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'radix-vue'

const props = defineProps<CheckboxRootProps>()
const emits = defineEmits<CheckboxRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    class="peer size-4 shrink-0 border border-gray12 rounded shadow disabled:cursor-not-allowed data-[state=checked]:bg-gray12 data-[state=checked]:text-gray-fg disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray12"
  >
    <CheckboxIndicator class="h-full w-full flex items-center justify-center text-current">
      <slot>
        <CheckIcon class="size-4" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
