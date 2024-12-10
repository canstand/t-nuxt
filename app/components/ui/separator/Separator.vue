<script setup lang="ts">
import { Separator, type SeparatorProps } from 'radix-vue'

const props = defineProps<
  SeparatorProps & { label?: string }
>()
</script>

<template>
  <Separator
    v-bind="props"
    class="relative shrink-0 bg-gray6"
    :class=" props.orientation === 'vertical' ? 'w-px h-full' : 'h-px w-full' "
  >
    <span
      v-if="props.label"
      class="absolute left-1/2 top-1/2 flex items-center justify-center text-xs text-gray11 -translate-x-1/2 -translate-y-1/2"
      :class="props.orientation === 'vertical' ? 'w-[1px] px-1 py-2' : 'h-[1px] py-1 px-2'"
    >{{ props.label }}</span>
  </Separator>
</template>
