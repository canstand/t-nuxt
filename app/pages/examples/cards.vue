import PaymentMethod from '~/components/PaymentMethod.vue';
<template>
  <div class="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
    <div class="grid col-span-2 items-start gap-6 lg:col-span-1">
      <UiContainer>
        <CreateAccount />
      </UiContainer>
      <UiContainer>
        <PaymentMethod />
      </UiContainer>
    </div>
    <div class="grid col-span-2 items-start gap-6 lg:col-span-1">
      <UiContainer>
        <TeamMembers />
      </UiContainer>
      <UiContainer>
        <ShareDocument />
      </UiContainer>
      <UiContainer>
        <DatePicker />
      </UiContainer>
      <UiContainer>
        <Notifications />
      </UiContainer>
    </div>
    <div class="grid col-span-2 items-start gap-6 lg:col-span-2 xl:col-span-1 lg:grid-cols-2 xl:grid-cols-1">
      <UiContainer>
        <ReportAnIssue />
      </UiContainer>
      <UiContainer>
        <GitHubCard />
      </UiContainer>
      <UiContainer>
        <CookieSettings />
      </UiContainer>
    </div>
  </div>
</template>
