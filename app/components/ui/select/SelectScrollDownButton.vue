<script setup lang="ts">
import { ChevronDownIcon } from '@radix-icons/vue'
import { SelectScrollDownButton, type SelectScrollDownButtonProps, useForwardProps } from 'radix-vue'

const props = defineProps<SelectScrollDownButtonProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <SelectScrollDownButton v-bind="forwardedProps" class="flex cursor-default items-center justify-center py-1">
    <slot>
      <ChevronDownIcon />
    </slot>
  </SelectScrollDownButton>
</template>
