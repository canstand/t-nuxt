<script setup lang="ts">
const url = ref('http://example.com/link/to/document')
</script>

<template>
  <UiCard>
    <UiCardHeader>
      <UiCardTitle>Share this document</UiCardTitle>
      <UiCardDescription>
        Anyone with the link can view this document.
      </UiCardDescription>
    </UiCardHeader>
    <UiCardContent>
      <div class="flex space-x-2">
        <UiInput :model-value="url" read-only />
        <UiButton variant="secondary" class="shrink-0">
          Copy Link
        </UiButton>
      </div>
      <Separator class="my-4" />
      <div class="space-y-4">
        <h4 class="text-sm font-medium">
          People with access
        </h4>
        <div class="grid gap-6">
          <div class="flex items-center justify-between space-x-4">
            <div class="flex items-center space-x-4">
              <UiAvatar>
                <UiAvatarImage src="/avatars/03.png" />
                <UiAvatarFallback>OM</UiAvatarFallback>
              </UiAvatar>
              <div>
                <p class="text-sm font-medium leading-none">
                  Olivia Martin
                </p>
                <p class="text-muted-foreground text-sm">
                  m@example.com
                </p>
              </div>
            </div>
            <UiSelect default-value="edit">
              <UiSelectTrigger class="ml-auto w-[110px]">
                <UiSelectValue placeholder="Select" />
              </UiSelectTrigger>
              <UiSelectContent>
                <UiSelectItem value="edit">
                  Can edit
                </UiSelectItem>
                <UiSelectItem value="view">
                  Can view
                </UiSelectItem>
              </UiSelectContent>
            </UiSelect>
          </div>
          <div class="flex items-center justify-between space-x-4">
            <div class="flex items-center space-x-4">
              <UiAvatar>
                <UiAvatarImage src="/avatars/05.png" />
                <UiAvatarFallback>IN</UiAvatarFallback>
              </UiAvatar>
              <div>
                <p class="text-sm font-medium leading-none">
                  Isabella Nguyen
                </p>
                <p class="text-muted-foreground text-sm">
                  b@example.com
                </p>
              </div>
            </div>
            <UiSelect default-value="view">
              <UiSelectTrigger class="ml-auto w-[110px]">
                <UiSelectValue placeholder="Select" />
              </UiSelectTrigger>
              <UiSelectContent>
                <UiSelectItem value="edit">
                  Can edit
                </UiSelectItem>
                <UiSelectItem value="view">
                  Can view
                </UiSelectItem>
              </UiSelectContent>
            </UiSelect>
          </div>
          <div class="flex items-center justify-between space-x-4">
            <div class="flex items-center space-x-4">
              <UiAvatar>
                <UiAvatarImage src="/avatars/01.png" />
                <UiAvatarFallback>SD</UiAvatarFallback>
              </UiAvatar>
              <div>
                <p class="text-sm font-medium leading-none">
                  Sofia Davis
                </p>
                <p class="text-muted-foreground text-sm">
                  p@example.com
                </p>
              </div>
            </div>
            <UiSelect default-value="view">
              <UiSelectTrigger class="ml-auto w-[110px]">
                <UiSelectValue placeholder="Select" />
              </UiSelectTrigger>
              <UiSelectContent>
                <UiSelectItem value="edit">
                  Can edit
                </UiSelectItem>
                <UiSelectItem value="view">
                  Can view
                </UiSelectItem>
              </UiSelectContent>
            </UiSelect>
          </div>
        </div>
      </div>
    </UiCardContent>
  </UiCard>
</template>
