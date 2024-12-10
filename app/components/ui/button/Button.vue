<script lang="ts">
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

interface ButtonVariantProps extends VariantProps<typeof buttonVariants> {}

export const buttonVariants = cva(
  'focus-visible:ring-hue12 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors hue-gray disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
            'bg-accent9 text-accent-fg shadow hover:bg-accent10',
        destructive:
            'bg-error9 text-error-fg shadow-sm hover:bg-error10',
        outline:
            'border border-hue7 bg-transparent shadow-sm hover:bg-hue3 hover:text-hue-12',
        secondary:
            'bg-gray3  shadow-sm hover:bg-gray4',
        ghost: 'hover:bg-hue3 hover:text-hue12',
        link: 'text-accent12 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)
</script>

<script lang="ts" setup>
// eslint-disable-next-line import/first
import { Primitive, type PrimitiveProps } from 'radix-vue'

withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
  as: 'button',
})

interface Props extends PrimitiveProps {
  variant?: ButtonVariantProps['variant']
  size?: ButtonVariantProps['size']
  as?: string
}
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="[buttonVariants({ variant, size })]"
  >
    <slot />
  </Primitive>
</template>
