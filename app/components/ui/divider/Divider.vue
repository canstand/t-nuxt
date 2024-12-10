<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'

const props = withDefaults(defineProps<Props>(), {
  size: '2xs',
  type: 'solid',
  orientation: 'horizontal',
})

const horizontal = computed(() => props.orientation === 'horizontal')

const borderVariants = cva(
  'flex border-gray6',
  {
    variants: {
      type: {
        solid: 'border-solid',
        dotted: 'border-dotted',
        dashed: 'border-dashed',
      },
      orientation: {
        horizontal: 'w-full',
        vertical: 'h-full',
      },
      size: {
        '2xs': '',
        'xs': '',
        'sm': '',
        'md': '',
        'lg': '',
        'xl': '',
      },
    },
    compoundVariants: [
      { orientation: 'horizontal', size: '2xs', class: 'border-t' },
      { orientation: 'horizontal', size: 'xs', class: 'border-t-[2px]' },
      { orientation: 'horizontal', size: 'sm', class: 'border-t-[3px]' },
      { orientation: 'horizontal', size: 'md', class: 'border-t-[4px]' },
      { orientation: 'horizontal', size: 'lg', class: 'border-t-[5px]' },
      { orientation: 'horizontal', size: 'xl', class: 'border-t-[6px]' },
      { orientation: 'vertical', size: '2xs', class: 'border-s' },
      { orientation: 'vertical', size: 'xs', class: 'border-s-[2px]' },
      { orientation: 'vertical', size: 'sm', class: 'border-s-[3px]' },
      { orientation: 'vertical', size: 'md', class: 'border-s-[4px]' },
      { orientation: 'vertical', size: 'lg', class: 'border-s-[5px]' },
      { orientation: 'vertical', size: 'xl', class: 'border-s-[6px]' },
    ],
    defaultVariants: {
      type: 'solid',
      size: '2xs',
      orientation: 'horizontal',
    },
  },
)

interface DividerProps extends VariantProps<typeof borderVariants> {}

interface Props {
  type?: DividerProps['type']
  orientation?: DividerProps['orientation']
  size?: DividerProps['size']
  icon?: string
  label?: string
}
</script>

<template>
  <div class="w-full flex items-center justify-center text-center" :class="horizontal ? 'flex-row' : 'flex-col'">
    <div :class="[borderVariants({ type, orientation, size })]" />
    <template v-if="label || icon || $slots.default">
      <div
        class="flex text-gray11 font-medium"
        :class="horizontal ? 'mx-3 whitespace-nowrap' : 'my-2'"
      >
        <slot>
          <span v-if="label">
            {{ label }}
          </span>
          <div v-else-if="icon" :name="icon" class="size-5 flex-shrink-0" />
        </slot>
      </div>
    </template>
    <div :class="[borderVariants({ type, orientation, size })]" />
  </div>
</template>
