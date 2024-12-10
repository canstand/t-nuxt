<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <input v-model="model" class="h-9 w-full flex border border-gray7 rounded-md bg-transparent px-3 py-1 text-sm shadow-sm transition-colors disabled:cursor-not-allowed file:border-0 file:bg-transparent file:text-sm placeholder:text-gray11 file:font-medium disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray12">
</template>
