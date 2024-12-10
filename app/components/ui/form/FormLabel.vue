<script lang="ts" setup>
import { useFormField } from './useFormField'

const { error, formItemId } = useFormField()
</script>

<template>
  <UiLabel
    :class="[error ? 'text-error11' : '']"
    :for="formItemId"
  >
    <slot />
  </UiLabel>
</template>
