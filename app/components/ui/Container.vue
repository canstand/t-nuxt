<script setup lang="ts">
withDefaults(defineProps<Props>(), {
  as: 'div',
})

interface Props {
  as?: string
}
</script>

<template>
  <component :is="as" class="mx-auto max-w-7xl w-full">
    <slot />
  </component>
</template>
