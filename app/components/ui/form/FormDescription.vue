<script lang="ts" setup>
import { useFormField } from './useFormField'

const { formDescriptionId } = useFormField()
</script>

<template>
  <p
    :id="formDescriptionId"
    class="text-sm text-gray11"
  >
    <slot />
  </p>
</template>
