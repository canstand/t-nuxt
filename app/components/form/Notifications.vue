<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field as UiFormField, useForm } from 'vee-validate'
import { h } from 'vue'
import * as z from 'zod'
import { toast } from '../ui/toast/use-toast'

const notificationsFormSchema = toTypedSchema(z.object({
  type: z.enum(['all', 'mentions', 'none'], {
    required_error: 'You need to select a notification type.',
  }),
  mobile: z.boolean().default(false).optional(),
  communication_emails: z.boolean().default(false).optional(),
  social_emails: z.boolean().default(false).optional(),
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
}))

const { handleSubmit } = useForm({
  validationSchema: notificationsFormSchema,
  initialValues: {
    communication_emails: false,
    marketing_emails: false,
    social_emails: true,
    security_emails: true,
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
      Notifications
    </h3>
    <p class="text-sm text-gray11">
      Configure how you receive notifications.
    </p>
  </div>
  <UiDivider />
  <form class="space-y-8" @submit="onSubmit">
    <UiFormField v-slot="{ componentField }" type="radio" name="type">
      <UiFormItem class="!space-y-3">
        <UiFormLabel>Notify me about...</UiFormLabel>
        <UiFormControl>
          <UiRadioGroup
            class="flex flex-col space-y-1"
            v-bind="componentField"
          >
            <UiFormItem class="flex items-center space-x-3 !space-y-0">
              <UiFormControl>
                <UiRadioGroupItem value="all" />
              </UiFormControl>
              <UiFormLabel class="font-normal">
                All new messages
              </UiFormLabel>
            </UiFormItem>
            <UiFormItem class="flex items-center space-x-3 !space-y-0">
              <UiFormControl>
                <UiRadioGroupItem value="mentions" />
              </UiFormControl>
              <UiFormLabel class="font-normal">
                Direct messages and mentions
              </UiFormLabel>
            </UiFormItem>
            <UiFormItem class="flex items-center space-x-3 !space-y-0">
              <UiFormControl>
                <UiRadioGroupItem value="none" />
              </UiFormControl>
              <UiFormLabel class="font-normal">
                Nothing
              </UiFormLabel>
            </UiFormItem>
          </UiRadioGroup>
        </UiFormControl>
        <UiFormMessage />
      </UiFormItem>
    </UiFormField>

    <div>
      <h3 class="mb-4 text-lg font-medium">
        Email Notifications
      </h3>
      <div class="space-y-4">
        <UiFormField v-slot="{ handleChange, value }" type="checkbox" name="communication_emails">
          <UiFormItem class="flex flex-row items-center justify-between border rounded-lg p-4">
            <div class="space-y-0.5">
              <UiFormLabel class="text-base">
                Communication emails
              </UiFormLabel>
              <UiFormDescription>
                Receive emails about your account activity.
              </UiFormDescription>
            </div>
            <UiFormControl>
              <UiSwitch
                :checked="value"
                @update:checked="handleChange"
              />
            </UiFormControl>
          </UiFormItem>
        </UiFormField>

        <UiFormField v-slot="{ handleChange, value }" type="checkbox" name="marketing_emails">
          <UiFormItem class="flex flex-row items-center justify-between border rounded-lg p-4">
            <div class="space-y-0.5">
              <UiFormLabel class="text-base">
                Marketing emails
              </UiFormLabel>
              <UiFormDescription>
                Receive emails about new products, features, and more.
              </UiFormDescription>
            </div>
            <UiFormControl>
              <UiSwitch
                :checked="value"
                @update:checked="handleChange"
              />
            </UiFormControl>
          </UiFormItem>
        </UiFormField>

        <UiFormField v-slot="{ handleChange, value }" type="checkbox" name="social_emails">
          <UiFormItem class="flex flex-row items-center justify-between border rounded-lg p-4">
            <div class="space-y-0.5">
              <UiFormLabel class="text-base">
                Social emails
              </UiFormLabel>
              <UiFormDescription>
                Receive emails for friend requests, follows, and more.
              </UiFormDescription>
            </div>
            <UiFormControl>
              <UiSwitch
                :checked="value"
                @update:checked="handleChange"
              />
            </UiFormControl>
          </UiFormItem>
        </UiFormField>

        <UiFormField v-slot="{ handleChange, value }" type="checkbox" name="security_emails">
          <UiFormItem class="flex flex-row items-center justify-between border rounded-lg p-4">
            <div class="space-y-0.5">
              <UiFormLabel class="text-base">
                Security emails
              </UiFormLabel>
              <UiFormDescription>
                Receive emails about your account activity and security.
              </UiFormDescription>
            </div>
            <UiFormControl>
              <UiSwitch
                :checked="value"
                disabled
                aria-readonly
                @update:checked="handleChange"
              />
            </UiFormControl>
          </UiFormItem>
        </UiFormField>
      </div>
    </div>

    <UiFormField v-slot="{ handleChange, value }" type="checkbox" name="mobile">
      <UiFormItem class="flex flex-row items-start space-x-3 !space-y-0">
        <UiFormControl>
          <UiCheckbox
            :checked="value"
            @update:checked="handleChange"
          />
        </UiFormControl>
        <div class="leading-none space-y-1">
          <UiFormLabel>
            Use different settings for my mobile devices
          </UiFormLabel>
          <UiFormDescription>
            You can manage your mobile notifications in the
            <a href="/examples/forms">
              mobile settings
            </a> page.
          </UiFormDescription>
        </div>
      </UiFormItem>
    </UiFormField>

    <div class="flex justify-start">
      <UiButton type="submit">
        Update notifications
      </UiButton>
    </div>
  </form>
</template>
