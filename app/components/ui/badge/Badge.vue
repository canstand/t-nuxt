<script lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-1 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray8 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-accent9 text-accent-fg shadow hover:bg-accent9A/80',
        secondary:
          'border-transparent bg-gray4 hover:bg-gray3',
        destructive:
          'border-transparent bg-error9 text-error-fg shadow hover:bg-error9A/80',
        outline: 'text-foreground',
        hue: 'border-transparent bg-hue9 text-hue-fg shadow hover:bg-hue9A/80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

type BadgeVariants = VariantProps<typeof badgeVariants>
</script>

<script setup lang="ts">
withDefaults(defineProps<{
  variant?: BadgeVariants['variant']
  as?: string
}>(), {
  variant: 'default',
  as: 'span',
})
</script>

<template>
  <component :is="as" :class="badgeVariants({ variant })">
    <slot />
  </component>
</template>
