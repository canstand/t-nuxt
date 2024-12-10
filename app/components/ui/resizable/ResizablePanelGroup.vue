<script setup lang="ts">
import { SplitterGroup, type SplitterGroupEmits, type SplitterGroupProps, useForwardPropsEmits } from 'radix-vue'

const props = defineProps<SplitterGroupProps>()
const emits = defineEmits<SplitterGroupEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <SplitterGroup v-bind="forwarded" class="h-full w-full flex data-[panel-group-direction=vertical]:flex-col">
    <slot />
  </SplitterGroup>
</template>
