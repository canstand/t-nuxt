<script setup lang="ts">
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from 'radix-vue'

const props = defineProps<TabsTriggerProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <TabsTrigger
    v-bind="forwardedProps"
    class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-gray4 transition-colors duration-200 ease-out disabled:pointer-events-none data-[state=active]:bg-gray1 data-[state=active]:text-gray12 disabled:opacity-50 data-[state=active]:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray12"
  >
    <slot />
  </TabsTrigger>
</template>
