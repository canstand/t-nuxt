<script setup lang="ts">

</script>

<template>
  <div class="relative [&>[data-slot=input]]:has-[[data-slot=decrement]]:pl-5 [&>[data-slot=input]]:has-[[data-slot=increment]]:pr-5">
    <slot />
  </div>
</template>
