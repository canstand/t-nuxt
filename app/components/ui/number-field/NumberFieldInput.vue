<script setup lang="ts">
import { NumberFieldInput, type NumberFieldInputProps } from 'radix-vue'

defineProps<NumberFieldInputProps>()
</script>

<template>
  <NumberFieldInput
    data-slot="input"
    class="h-9 w-full flex border border-gray7 rounded-md bg-transparent py-1 text-center text-sm shadow-sm transition-colors disabled:cursor-not-allowed placeholder:text-gray11 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray12"
  />
</template>
