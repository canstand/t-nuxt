<script lang="ts" setup>
import { useId } from 'radix-vue'
import { provide } from 'vue'
import { FORM_ITEM_INJECTION_KEY } from './injectionKeys'

const id = useId()
provide(FORM_ITEM_INJECTION_KEY, id)
</script>

<template>
  <div class="space-y-2">
    <slot />
  </div>
</template>
