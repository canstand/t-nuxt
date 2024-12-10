<script setup lang="ts">
import { TabsList, type TabsListProps } from 'radix-vue'

const props = defineProps<TabsListProps>()
</script>

<template>
  <TabsList
    v-bind="props"
    class="relative inline-grid h-10 w-full items-center rounded-lg bg-gray3 p-1 text-gray11"
  >
    <slot />
  </TabsList>
</template>
