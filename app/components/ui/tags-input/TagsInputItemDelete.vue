<script setup lang="ts">
import { Cross2Icon } from '@radix-icons/vue'
import { TagsInputItemDelete, type TagsInputItemDeleteProps, useForwardProps } from 'radix-vue'

const props = defineProps<TagsInputItemDeleteProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <TagsInputItemDelete v-bind="forwardedProps" class="mr-1 flex rounded bg-transparent">
    <slot>
      <Cross2Icon class="size-4" />
    </slot>
  </TagsInputItemDelete>
</template>
