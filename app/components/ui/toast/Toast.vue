<script setup lang="ts">
import type { ToastRootEmits, ToastRootProps } from 'radix-vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { ToastRoot, useForwardPropsEmits } from 'radix-vue'

const props = defineProps<ToastProps>()
const emits = defineEmits<ToastRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'border bg-background text-foreground',
        destructive:
                    'destructive group border-error6 bg-error3 text-error11',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

type ToastVariants = VariantProps<typeof toastVariants>

export interface ToastProps extends ToastRootProps {
  variant?: ToastVariants['variant']
  onOpenChange?: ((value: boolean) => void) | undefined
}
</script>

<template>
  <ToastRoot
    v-bind="forwarded"
    :class="toastVariants({ variant })"
    @update:open="onOpenChange"
  >
    <slot />
  </ToastRoot>
</template>
