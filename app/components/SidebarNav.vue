<script setup lang="ts">
interface Item {
  title: string
  href: string
}

const $route = useRoute()

const sidebarNavItems: Item[] = [
  {
    title: 'Profile',
    href: '/examples/forms',
  },
  {
    title: 'Account',
    href: '/examples/forms/account',
  },
  {
    title: 'Appearance',
    href: '/examples/forms/appearance',
  },
  {
    title: 'Notifications',
    href: '/examples/forms/notifications',
  },
  {
    title: 'Display',
    href: '/examples/forms/display',
  },
]
</script>

<template>
  <nav class="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-1">
    <UiButton
      v-for="item in sidebarNavItems"
      :key="item.title"
      as="a"
      :href="item.href"
      variant="ghost"
      class="w-full text-left !justify-start"
      :class="[
        { 'bg-gray3 hover:bg-gray3': $route.path === `${item.href}` },
      ]"
    >
      {{ item.title }}
    </UiButton>
  </nav>
</template>
