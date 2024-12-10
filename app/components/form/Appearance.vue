<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field as UiFormField, useForm } from 'vee-validate'
import { h } from 'vue'
import * as z from 'zod'
import { toast } from '../ui/toast/use-toast'

const appearanceFormSchema = toTypedSchema(z.object({
  theme: z.enum(['light', 'dark'], {
    required_error: 'Please select a theme.',
  }),
  font: z.enum(['inter', 'manrope', 'system'], {
    invalid_type_error: 'Select a font',
    required_error: 'Please select a font.',
  }),
}))

const { handleSubmit } = useForm({
  validationSchema: appearanceFormSchema,
  initialValues: {
    theme: 'light',
    font: 'inter',
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
      Appearence
    </h3>
    <p class="text-sm text-gray11">
      Customize the appearance of the app. Automatically switch between day and night themes.
    </p>
  </div>
  <UiDivider />
  <form class="space-y-8" @submit="onSubmit">
    <UiFormField v-slot="{ field }" name="font">
      <UiFormItem>
        <UiFormLabel>Font</UiFormLabel>
        <div class="relative w-[200px]">
          <UiFormControl>
            <UiSelect v-bind="field">
              <UiSelectTrigger class="w-[200px] appearance-none bg-transparent font-normal">
                <UiSelectValue placeholder="Select" />
              </UiSelectTrigger>

              <UiSelectContent>
                <UiSelectGroup>
                  <UiSelectItem value="inter">
                    Inter
                  </UiSelectItem>
                  <UiSelectItem value="manrope">
                    Manrope
                  </UiSelectItem>
                  <UiSelectItem value="system">
                    System
                  </UiSelectItem>
                </UiSelectGroup>
              </UiSelectContent>
            </UiSelect>
          </UiFormControl>
        </div>
        <UiFormDescription>
          Set the font you want to use in the dashboard.
        </UiFormDescription>
        <UiFormMessage />
      </UiFormItem>
    </UiFormField>

    <UiFormField v-slot="{ componentField }" type="radio" name="theme">
      <UiFormItem class="space-y-1">
        <UiFormLabel>Theme</UiFormLabel>
        <UiFormDescription>
          Select the theme for the dashboard.
        </UiFormDescription>
        <UiFormMessage />

        <UiRadioGroup
          class="grid grid-cols-2 max-w-md gap-8 pt-2"
          v-bind="componentField"
        >
          <UiFormItem>
            <UiFormLabel class="[&:has([data-state=checked])>div]:border-accent10">
              <UiFormControl>
                <UiRadioGroupItem value="light" class="sr-only" />
              </UiFormControl>
              <div class="items-center border-2 border-gray7 rounded-md p-1 hover:border-gray8">
                <div class="rounded-sm bg-[#ecedef] p-2 space-y-2">
                  <div class="rounded-md bg-white p-2 shadow-sm space-y-2">
                    <div class="h-2 w-20 rounded-lg bg-[#ecedef]" />
                    <div class="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                  </div>
                  <div class="flex items-center rounded-md bg-white p-2 shadow-sm space-x-2">
                    <div class="h-4 w-4 rounded-full bg-[#ecedef]" />
                    <div class="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                  </div>
                  <div class="flex items-center rounded-md bg-white p-2 shadow-sm space-x-2">
                    <div class="h-4 w-4 rounded-full bg-[#ecedef]" />
                    <div class="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                  </div>
                </div>
              </div>
              <span class="block w-full p-2 text-center font-normal">
                Light
              </span>
            </UiFormLabel>
          </UiFormItem>
          <UiFormItem>
            <UiFormLabel class="[&:has([data-state=checked])>div]:border-accent10">
              <UiFormControl>
                <UiRadioGroupItem value="dark" class="sr-only" />
              </UiFormControl>
              <div class="hover:text-accent-foreground items-center border-2 border-gray7 rounded-md p-1 hover:bg-gray4">
                <div class="rounded-sm bg-black p-2 space-y-2">
                  <div class="rounded-md bg-gray11 p-2 shadow-sm space-y-2">
                    <div class="h-2 w-20 rounded-lg bg-gray9" />
                    <div class="h-2 w-[100px] rounded-lg bg-gray9" />
                  </div>
                  <div class="flex items-center rounded-md bg-gray11 p-2 shadow-sm space-x-2">
                    <div class="h-4 w-4 rounded-full bg-gray9" />
                    <div class="h-2 w-[100px] rounded-lg bg-gray9" />
                  </div>
                  <div class="flex items-center rounded-md bg-gray11 p-2 shadow-sm space-x-2">
                    <div class="h-4 w-4 rounded-full bg-gray9" />
                    <div class="h-2 w-[100px] rounded-lg bg-gray9" />
                  </div>
                </div>
              </div>
              <span class="block w-full p-2 text-center font-normal">
                Dark
              </span>
            </UiFormLabel>
          </UiFormItem>
        </UiRadioGroup>
      </UiFormItem>
    </UiFormField>

    <div class="flex justify-start">
      <UiButton type="submit">
        Update preferences
      </UiButton>
    </div>
  </form>
</template>
