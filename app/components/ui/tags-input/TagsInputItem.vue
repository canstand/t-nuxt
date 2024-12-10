<script setup lang="ts">
import { TagsInputItem, type TagsInputItemProps, useForwardProps } from 'radix-vue'

const props = defineProps<TagsInputItemProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <TagsInputItem v-bind="forwardedProps" class="h-5 flex items-center rounded-md bg-gray3 ring-offset-gray4 data-[state=active]:ring-2 data-[state=active]:ring-offset-2 data-[state=active]:ring-gray8">
    <slot />
  </TagsInputItem>
</template>
