<script lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'
</script>

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
import { computed, type HTMLAttributes } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<SheetContentProps>()

const emits = defineEmits<DialogContentEmits>()

const sheetVariants = cva(
  'fixed z-50 gap-4 bg-gray1 p-6 border-gray3 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
            'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
            'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
)

 type SheetVariants = VariantProps<typeof sheetVariants>

interface SheetContentProps extends DialogContentProps {
  class?: HTMLAttributes['class']
  side?: SheetVariants['side']
  to?: string | HTMLElement
}

const delegatedProps = computed(() => {
  const { side, to, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal :to="to">
    <DialogOverlay
      class="fixed inset-0 z-50 bg-black6A/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0"
    />
    <DialogContent
      :class="sheetVariants({ side })"
      v-bind="{ ...forwarded, ...$attrs }"
    >
      <slot />

      <DialogClose
        aria-label="Close"
        class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-gray8 transition-opacity disabled:pointer-events-none data-[state=open]:bg-gray2 hover:opacity-100 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray8"
      >
        <Cross2Icon class="size-4" />
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
