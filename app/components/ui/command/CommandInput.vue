<script setup lang="ts">
import { MagnifyingGlassIcon } from '@radix-icons/vue'
import { ComboboxInput, type ComboboxInputProps, useForwardProps } from 'radix-vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<ComboboxInputProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <div class="flex items-center border-b border-gray6 px-3" cmdk-input-wrapper>
    <MagnifyingGlassIcon class="mr-2 size-4 shrink-0 opacity-50" />
    <ComboboxInput
      v-bind="{ ...forwardedProps, ...$attrs }"
      auto-focus
      class="h-10 w-full flex rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed placeholder:text-gray11 disabled:opacity-50"
    />
  </div>
</template>
