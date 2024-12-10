<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <textarea v-model="modelValue" class="min-h-[60px] w-full flex border border-gray7 rounded-md bg-transparent px-3 py-2 text-sm shadow-sm disabled:cursor-not-allowed placeholder:text-gray11 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray12" />
</template>
