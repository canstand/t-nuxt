<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div class="relative w-full overflow-x-auto">
    <table class="w-full caption-bottom text-sm" :class="[props.class]">
      <slot />
    </table>
  </div>
</template>
