<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'
import { AvatarRoot, type PrimitiveProps } from 'radix-vue'

interface AvatarVariantProps extends VariantProps<typeof avatarVariant> {}

withDefaults(defineProps<Props>(), {
  size: 'sm',
  shape: 'circle',
})

const avatarVariant = cva(
  'inline-flex items-center bg-gray3 justify-center font-normal select-none shrink-0 overflow-hidden',
  {
    variants: {
      size: {
        sm: 'h-10 w-10 text-xs',
        base: 'h-16 w-16 text-2xl',
        lg: 'h-32 w-32 text-5xl',
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-md',
      },
    },
    defaultVariants: {
      size: 'sm',
      shape: 'circle',
    },
  },
)

interface Props extends PrimitiveProps {
  size?: AvatarVariantProps['size']
  shape?: AvatarVariantProps['shape']
}
</script>

<template>
  <AvatarRoot :class="[avatarVariant({ size, shape })]">
    <slot />
  </AvatarRoot>
</template>
