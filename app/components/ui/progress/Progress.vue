<script setup lang="ts">
import {
  ProgressIndicator,
  ProgressRoot,
  type ProgressRootProps,
} from 'radix-vue'

const props = withDefaults(
  defineProps<ProgressRootProps>(),
  {
    modelValue: 0,
  },
)
</script>

<template>
  <ProgressRoot
    v-bind="props"
    class="relative h-2 w-full overflow-hidden rounded-full bg-accent3"
  >
    <ProgressIndicator
      class="h-full w-full flex-1 bg-accent9 transition-all"
      :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"
    />
  </ProgressRoot>
</template>
