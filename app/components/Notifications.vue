<script setup lang="ts">
import { BellIcon, EyeNoneIcon, PersonIcon } from '@radix-icons/vue'
</script>

<template>
  <UiCard>
    <UiCardHeader class="pb-3">
      <UiCardTitle>Notifications</UiCardTitle>
      <UiCardDescription>
        Choose what you want to be notified about.
      </UiCardDescription>
    </UiCardHeader>
    <UiCardContent class="grid gap-1">
      <div class="flex items-start rounded-md p-2 transition-all -mx-2 space-x-4 hover:bg-gray3">
        <BellIcon class="mt-px h-5 w-5" />
        <div class="space-y-1">
          <p class="text-sm font-medium leading-none">
            Everything
          </p>
          <p class="text-sm text-gray11">
            Email digest, mentions & all activity.
          </p>
        </div>
      </div>
      <div class="flex items-start rounded-md bg-gray3 p-2 transition-all -mx-2 space-x-4">
        <PersonIcon class="mt-px h-5 w-5" />
        <div class="space-y-1">
          <p class="text-sm font-medium leading-none">
            Available
          </p>
          <p class="text-sm text-gray11">
            Only mentions and comments.
          </p>
        </div>
      </div>
      <div class="hover:text-accent-foreground flex items-start rounded-md p-2 transition-all -mx-2 space-x-4 hover:bg-gray3">
        <EyeNoneIcon class="mt-px h-5 w-5" />
        <div class="space-y-1">
          <p class="text-sm font-medium leading-none">
            Ignoring
          </p>
          <p class="text-sm text-gray11">
            Turn off all notifications.
          </p>
        </div>
      </div>
    </UiCardContent>
  </UiCard>
</template>
