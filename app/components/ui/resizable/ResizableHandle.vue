<script setup lang="ts">
import { DragHandleDots2Icon } from '@radix-icons/vue'
import { SplitterResizeHandle, type SplitterResizeHandleEmits, type SplitterResizeHandleProps, useForwardPropsEmits } from 'radix-vue'

const props = defineProps<SplitterResizeHandleProps & { withHandle?: boolean }>()
const emits = defineEmits<SplitterResizeHandleEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <SplitterResizeHandle v-bind="forwarded" class="relative w-px flex items-center justify-center bg-gray6 after:absolute after:inset-y-0 after:left-1/2 [&[data-orientation=vertical]]:h-px [&[data-orientation=vertical]]:w-full after:w-1 [&[data-orientation=vertical]>div]:rotate-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-gray12 [&[data-orientation=vertical]]:after:left-0 [&[data-orientation=vertical]]:after:h-1 [&[data-orientation=vertical]]:after:w-full [&[data-orientation=vertical]]:after:translate-x-0 after:-translate-x-1/2 [&[data-orientation=vertical]]:after:-translate-y-1/2">
    <template v-if="props.withHandle">
      <div class="z-10 h-4 w-3 flex items-center justify-center border rounded-sm bg-gray6">
        <DragHandleDots2Icon class="h-2.5 w-2.5" />
      </div>
    </template>
  </SplitterResizeHandle>
</template>
