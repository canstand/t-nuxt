<script setup lang="ts">
import { TagsInputInput, type TagsInputInputProps, useForwardProps } from 'radix-vue'

const props = defineProps<TagsInputInputProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <TagsInputInput v-bind="forwardedProps" class="min-h-5 flex-1 bg-transparent px-1 text-sm focus:outline-none" />
</template>
