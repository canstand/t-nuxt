<script setup lang="ts">
import { ChevronDownIcon, CircleIcon, PlusIcon, StarIcon } from '@radix-icons/vue'
</script>

<template>
  <UiCard>
    <UiCardHeader class="grid-cols-[minmax(0,1fr)_110px] items-start gap-4 !grid space-y-0">
      <div class="space-y-1">
        <UiCardTitle>shadcn/ui</UiCardTitle>
        <UiCardDescription>
          Beautifully designed components built with Radix UI and Tailwind
          CSS.
        </UiCardDescription>
      </div>
      <div class="flex items-center rounded-md bg-gray3 space-x-1">
        <UiButton variant="secondary" class="px-3 !shadow-none">
          <StarIcon class="mr-2 h-4 w-4" />
          Star
        </UiButton>
        <UiDivider orientation="vertical" class="h-5" />
        <UiDropdownMenu>
          <UiDropdownMenuTrigger as-child>
            <UiButton variant="secondary" class="px-2 !shadow-none">
              <ChevronDownIcon class="h-4 w-4" />
            </UiButton>
          </UiDropdownMenuTrigger>
          <UiDropdownMenuContent
            align="end"
            :align-offset="-5"
            class="w-[200px]"
          >
            <UiDropdownMenuLabel>Suggested Lists</UiDropdownMenuLabel>
            <UiDropdownMenuSeparator />
            <UiDropdownMenuCheckboxItem checked>
              Future Ideas
            </UiDropdownMenuCheckboxItem>
            <UiDropdownMenuCheckboxItem>My Stack</UiDropdownMenuCheckboxItem>
            <UiDropdownMenuCheckboxItem>Inspiration</UiDropdownMenuCheckboxItem>
            <UiDropdownMenuSeparator />
            <UiDropdownMenuItem>
              <PlusIcon class="mr-2 h-4 w-4" /> Create List
            </UiDropdownMenuItem>
          </UiDropdownMenuContent>
        </UiDropdownMenu>
      </div>
    </UiCardHeader>
    <UiCardContent>
      <div class="flex text-sm text-gray11 space-x-4">
        <div class="flex items-center">
          <CircleIcon class="mr-1 h-3 w-3 fill-sky9 text-sky9" />
          TypeScript
        </div>
        <div class="flex items-center">
          <StarIcon class="mr-1 h-3 w-3" />
          20k
        </div>
        <div>Updated April 2023</div>
      </div>
    </UiCardContent>
  </UiCard>
</template>
