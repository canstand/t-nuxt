<template>
  <div class="p-10 pb-16 md:block space-y-6">
    <div class="space-y-0.5">
      <h2 class="text-2xl font-bold tracking-tight">
        Settings
      </h2>
      <p class="text-gray11">
        Manage your account settings and set e-mail preferences.
      </p>
    </div>
    <UiDivider class="my-6" />
    <div class="flex flex-col lg:flex-row space-y-8 lg:space-x-12 lg:space-y-0">
      <aside class="-mx-4 lg:w-1/5">
        <SidebarNav />
      </aside>
      <div class="flex-1 lg:max-w-2xl">
        <div class="space-y-6">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
