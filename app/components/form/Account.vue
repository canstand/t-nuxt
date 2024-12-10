<script setup lang="ts">
import { CaretSortIcon, CheckIcon } from '@radix-icons/vue'
import { toTypedSchema } from '@vee-validate/zod'
import { Form as UiForm, Field as UiFormField } from 'vee-validate'
import * as z from 'zod'
import { toast } from '../ui/toast/use-toast'

const open = ref(false)

const languages = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Spanish', value: 'es' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Russian', value: 'ru' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Korean', value: 'ko' },
  { label: 'Chinese', value: 'zh' },
] as const

const accountFormSchema = toTypedSchema(z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.',
    }),
  dob: z.date({
    required_error: 'A date of birth is required.',
  }),
  language: z.string().nonempty({
    message: 'Please select a language.',
  }),
}))

// https://github.com/logaretm/vee-validate/issues/3521
// https://github.com/logaretm/vee-validate/discussions/3571
async function onSubmit(values: any) {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-accent9 p-4' }, h('code', { class: 'text-accent-fg' }, JSON.stringify(values, null, 2))),
  })
}
</script>

<template>
  <div>
    <h3 class="text-lg font-medium">
      Account
    </h3>
    <p class="text-sm text-gray11">
      Update your account settings. Set your preferred language and timezone.
    </p>
  </div>
  <UiDivider />
  <UiForm v-slot="{ setValues }" :validation-schema="accountFormSchema" class="space-y-8" @submit="onSubmit">
    <UiFormField v-slot="{ componentField }" name="name">
      <UiFormItem>
        <UiFormLabel>Name</UiFormLabel>
        <UiFormControl>
          <UiInput type="text" placeholder="Your name" v-bind="componentField" />
        </UiFormControl>
        <UiFormDescription>
          This is the name that will be displayed on your profile and in emails.
        </UiFormDescription>
        <UiFormMessage />
      </UiFormItem>
    </UiFormField>

    <!-- <UiFormField v-slot="{ componentField, value }" name="dob">
      <UiFormItem class="flex flex-col">
        <UiFormLabel>Date of birth</UiFormLabel>
        <UiPopover>
          <UiPopoverTrigger as-child>
            <UiFormControl>
              <UiButton
                variant="outline" class="w-[280px] pl-3 text-left font-normal" :class="[
                  { 'text-muted-foreground': !value },
                ]"
              >
                <span>{{ value ? format(value, "PPP") : "Pick a date" }}</span>
                <CalendarIcon class="ml-auto h-4 w-4 opacity-50" />
              </UiButton>
            </UiFormControl>
          </UiPopoverTrigger>
          <UiPopoverContent class="p-0">
            <UiCalendar v-bind="componentField" />
          </UiPopoverContent>
        </UiPopover>
        <UiFormDescription>
          Your date of birth is used to calculate your age.
        </UiFormDescription>
        <UiFormMessage />
      </UiFormItem>
    </UiFormField> -->

    <UiFormField v-slot="{ value }" name="language">
      <UiFormItem class="flex flex-col">
        <UiFormLabel>Language</UiFormLabel>

        <UiPopover v-model:open="open">
          <UiPopoverTrigger as-child>
            <UiFormControl>
              <UiButton
                variant="outline" role="combobox" :aria-expanded="open" class="w-[200px] justify-between"
                :class="[{ 'text-gray11': !value }]"
              >
                {{ value ? languages.find(
                  (language) => language.value === value,
                )?.label : 'Select language...' }}

                <CaretSortIcon class="ml-2 h-5 w-5 shrink-0 opacity-50" />
              </UiButton>
            </UiFormControl>
          </UiPopoverTrigger>
          <UiPopoverContent class="w-[200px] p-0">
            <UiCommand>
              <UiCommandInput placeholder="Search language..." />
              <UiCommandList>
                <UiCommandEmpty>No language found.</UiCommandEmpty>
                <UiCommandGroup>
                  <UiCommandItem
                    v-for="language in languages" :key="language.value" :value="language.label"
                    @select="() => {
                      setValues({
                        language: language.value,
                      })
                      open = false
                    }"
                  >
                    <CheckIcon
                      class="mr-2 h-5 w-5"
                      :class="[
                        value === language.value ? 'opacity-100' : 'opacity-0',
                      ]"
                    />
                    {{ language.label }}
                  </UiCommandItem>
                </UiCommandGroup>
              </UiCommandList>
            </UiCommand>
          </UiPopoverContent>
        </UiPopover>

        <UiFormDescription>
          This is the language that will be used in the dashboard.
        </UiFormDescription>
        <UiFormMessage />
      </UiFormItem>
    </UiFormField>

    <div class="flex justify-start">
      <UiButton type="submit">
        Update account
      </UiButton>
    </div>
  </UiForm>
</template>
