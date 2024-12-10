<script setup lang="ts">
import { Label } from 'radix-vue'
</script>

<template>
  <Label
    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    <slot />
  </Label>
</template>
