<script setup lang="ts">
const { data } = await useFetch('/api/pageview')

const time = useTimeAgo(() => data.value?.startAt || 0)
</script>

<template>
  <div text-gray11>
    <span text-gray12 font-500>{{ data?.pageview }}</span>
    page views since
    <span text-gray12>{{ time }}</span>
  </div>
</template>
