<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from 'radix-vue'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardPropsEmits } from 'radix-vue'

const props = defineProps<SliderRootProps>()
const emits = defineEmits<SliderRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <SliderRoot
    class="relative w-full flex touch-none select-none items-center"
    v-bind="forwarded"
  >
    <SliderTrack class="relative h-1.5 w-full grow overflow-hidden rounded-full bg-accent5">
      <SliderRange class="absolute h-full bg-accent9" />
    </SliderTrack>
    <SliderThumb
      v-for="(_, key) in modelValue"
      :key="key"
      class="block size-4 border border-accent7 rounded-full bg-gray1 transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray12"
    />
  </SliderRoot>
</template>
