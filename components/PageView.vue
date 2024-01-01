<script setup lang="ts">
const { data } = await useFetch('/api/pageview')

const time = useTimeAgo(() => data.value?.startAt || 0)
</script>

<template>
  <div text-accent:80>
    <span text-accent font-500>{{ data?.pageview }}</span>
    page views since
    <span text-accent>{{ time }}</span>
  </div>
</template>
