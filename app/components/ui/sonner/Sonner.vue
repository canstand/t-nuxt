<script lang="ts" setup>
import { Toaster as Sonner, type ToasterProps } from 'vue-sonner'

const props = defineProps<ToasterProps>()
</script>

<template>
  <Sonner
    class="toaster group"
    v-bind="props"
    :toast-options="{
      classes: {
        toast: 'group toast group-[.toaster]:bg-gray1 group-[.toaster]:text-gray12 group-[.toaster]:border-gray6 group-[.toaster]:shadow-lg',
        description: 'group-[.toast]:text-gray11',
        actionButton:
          'group-[.toast]:bg-accent9 group-[.toast]:text-accent-fg',
        cancelButton:
          'group-[.toast]:bg-gray3 group-[.toast]:text-gray11',
      },
    }"
  />
</template>
