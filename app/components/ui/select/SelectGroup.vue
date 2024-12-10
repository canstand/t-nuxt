<script setup lang="ts">
import { SelectGroup, type SelectGroupProps } from 'radix-vue'

const props = defineProps<SelectGroupProps>()
</script>

<template>
  <SelectGroup class="w-full p-1" v-bind="props">
    <slot />
  </SelectGroup>
</template>
