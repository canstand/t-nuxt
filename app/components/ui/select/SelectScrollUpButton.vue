<script setup lang="ts">
import { ChevronUpIcon } from '@radix-icons/vue'
import { SelectScrollUpButton, type SelectScrollUpButtonProps, useForwardProps } from 'radix-vue'

const props = defineProps<SelectScrollUpButtonProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <SelectScrollUpButton v-bind="forwardedProps" class="flex cursor-default items-center justify-center py-1">
    <slot>
      <ChevronUpIcon />
    </slot>
  </SelectScrollUpButton>
</template>
