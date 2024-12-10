<script setup lang="ts">
import { TagsInputRoot, type TagsInputRootEmits, type TagsInputRootProps, useForwardPropsEmits } from 'radix-vue'

const props = defineProps<TagsInputRootProps>()
const emits = defineEmits<TagsInputRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <TagsInputRoot v-bind="forwarded" class="flex flex-wrap items-center gap-2 border border-gray7 rounded-md bg-transparent px-3 py-1.5 text-sm">
    <slot />
  </TagsInputRoot>
</template>
