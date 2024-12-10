<script setup lang="ts">
import { TagsInputItemText, type TagsInputItemTextProps, useForwardProps } from 'radix-vue'

const props = defineProps<TagsInputItemTextProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <TagsInputItemText v-bind="forwardedProps" class="rounded bg-transparent px-2 py-0.5 text-sm" />
</template>
