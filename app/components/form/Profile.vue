<script setup lang="ts">
import { Cross1Icon } from '@radix-icons/vue'
import { toTypedSchema } from '@vee-validate/zod'
import { FieldArray, Field as UiFormField, useForm } from 'vee-validate'
import { h, ref } from 'vue'
import * as z from 'zod'
import { toast } from '../ui/toast/use-toast'

const verifiedEmails = ref(['m@example.com', 'm@google.com', 'm@support.com'])

const profileFormSchema = toTypedSchema(z.object({
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.',
    }),
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
  bio: z.string().max(160, { message: 'Bio must not be longer than 160 characters.' }).min(4, { message: 'Bio must be at least 2 characters.' }),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: 'Please enter a valid URL.' }),
      }),
    )
    .optional(),
}))

const { handleSubmit, resetForm } = useForm({
  validationSchema: profileFormSchema,
  initialValues: {
    bio: 'I own a computer.',
    urls: [
      { value: 'https://shadcn.com' },
      { value: 'http://twitter.com/shadcn' },
    ],
  },
})

const onSubmit = handleSubmit((values) => {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-accent9 p-4' }, h('code', { class: 'text-accent-fg' }, JSON.stringify(values, null, 2))),
  })
})
</script>

<template>
  <div>
    <h3 class="text-lg font-medium">
      Profile
    </h3>
    <p class="text-sm text-gray11">
      This is how others will see you on the site.
    </p>
  </div>
  <UiDivider />
  <form class="space-y-8" @submit="onSubmit">
    <UiFormField v-slot="{ componentField }" name="username">
      <UiFormItem>
        <UiFormLabel>Username</UiFormLabel>
        <UiFormControl>
          <UiInput type="text" placeholder="shadcn" v-bind="componentField" />
        </UiFormControl>
        <UiFormDescription>
          This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.
        </UiFormDescription>
        <UiFormMessage />
      </UiFormItem>
    </UiFormField>

    <UiFormField v-slot="{ componentField }" name="email">
      <UiFormItem>
        <UiFormLabel>Email</UiFormLabel>

        <UiSelect v-bind="componentField">
          <UiFormControl>
            <UiSelectTrigger>
              <UiSelectValue placeholder="Select an email" />
            </UiSelectTrigger>
          </UiFormControl>
          <UiSelectContent>
            <UiSelectGroup>
              <UiSelectItem v-for="email in verifiedEmails" :key="email" :value="email">
                {{ email }}
              </UiSelectItem>
            </UiSelectGroup>
          </UiSelectContent>
        </UiSelect>
        <UiFormDescription>
          You can manage verified email addresses in your email settings.
        </UiFormDescription>
        <UiFormMessage />
      </UiFormItem>
    </UiFormField>

    <UiFormField v-slot="{ componentField }" name="bio">
      <UiFormItem>
        <UiFormLabel>Bio</UiFormLabel>
        <UiFormControl>
          <UiTextarea placeholder="Tell us a little bit about yourself" v-bind="componentField" />
        </UiFormControl>
        <UiFormDescription>
          You can <span>@mention</span> other users and organizations to link to them.
        </UiFormDescription>
        <UiFormMessage />
      </UiFormItem>
    </UiFormField>

    <div>
      <FieldArray v-slot="{ fields, push, remove }" name="urls">
        <div v-for="(field, index) in fields" :key="`urls-${field.key}`">
          <UiFormField v-slot="{ componentField }" :name="`urls[${index}].value`">
            <UiFormItem>
              <UiFormLabel :class="[{ 'sr-only': index !== 0 }]">
                URLs
              </UiFormLabel>
              <UiFormDescription :class="[{ 'sr-only': index !== 0 }]">
                Add links to your website, blog, or social media profiles.
              </UiFormDescription>
              <div class="relative flex items-center">
                <UiFormControl>
                  <UiInput type="url" v-bind="componentField" />
                </UiFormControl>
                <button type="button" class="absolute end-0 py-2 pe-3 text-gray11 hover:text-gray12" @click="remove(index)">
                  <Cross1Icon class="w-3" />
                </button>
              </div>
              <UiFormMessage />
            </UiFormItem>
          </UiFormField>
        </div>

        <UiButton
          type="button"
          variant="outline"
          size="sm"
          class="mt-2 w-20 text-xs"
          @click="push({ value: '' })"
        >
          Add URL
        </UiButton>
      </FieldArray>
    </div>

    <div class="flex justify-start gap-2">
      <UiButton type="submit">
        Update profile
      </UiButton>

      <UiButton
        type="button"
        variant="outline"
        @click="resetForm"
      >
        Reset form
      </UiButton>
    </div>
  </form>
</template>
