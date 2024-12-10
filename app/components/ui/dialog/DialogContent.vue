<script setup lang="ts">
import { Cross2Icon } from '@radix-icons/vue'
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'radix-vue'

defineOptions({
  inheritAttrs: false,
})
const props = defineProps<DialogContentProps>()
const emits = defineEmits<DialogContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0"
    />
    <DialogContent
      v-bind="forwarded"
      class="fixed left-1/2 top-1/2 z-50 grid max-w-lg w-full gap-4 border bg-gray1 p-6 shadow-lg duration-200 -translate-x-1/2 -translate-y-1/2 sm:rounded-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[state=open]:slide-in-from-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=closed]:slide-out-to-left-1/2"
    >
      <slot />

      <DialogClose
        class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-gray4 transition-opacity disabled:pointer-events-none data-[state=open]:bg-gray3 data-[state=open]:text-gray11 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray8"
      >
        <Cross2Icon class="size-4" />
        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
