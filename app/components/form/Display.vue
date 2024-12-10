<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field as UiFormField, useForm } from 'vee-validate'
import { h } from 'vue'
import * as z from 'zod'
import { toast } from '../ui/toast/use-toast'

const items = [
  {
    id: 'recents',
    label: 'Recents',
  },
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'applications',
    label: 'Applications',

  },
  {
    id: 'desktop',
    label: 'Desktop',

  },
  {
    id: 'downloads',
    label: 'Downloads',

  },
  {
    id: 'documents',
    label: 'Documents',

  },
] as const

const displayFormSchema = toTypedSchema(z.object({
  items: z.array(z.string()).refine(value => value.some(item => item), {
    message: 'You have to select at least one item.',
  }),
}))

const { handleSubmit } = useForm({
  validationSchema: displayFormSchema,
  initialValues: {
    items: ['recents', 'home'],
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
      Display
    </h3>
    <p class="text-sm text-gray11">
      Turn items on or off to control what's displayed in the app.
    </p>
  </div>
  <UiDivider />
  <form @submit="onSubmit">
    <UiFormField name="items">
      <UiFormItem>
        <div class="mb-4">
          <UiFormLabel class="text-base">
            Sidebar
          </UiFormLabel>
          <UiFormDescription>
            Select the items you want to display in the sidebar.
          </UiFormDescription>
        </div>

        <UiFormField v-for="item in items" v-slot="{ value, handleChange }" :key="item.id" name="items">
          <UiFormItem :key="item.id" class="flex flex-row items-start space-x-3 !space-y-0">
            <UiFormControl>
              <UiCheckbox
                :checked="value.includes(item.id)"
                @update:checked="(checked) => {
                  if (Array.isArray(value)) {
                    handleChange(checked ? [...value, item.id] : value.filter(id => id !== item.id))
                  }
                }"
              />
            </UiFormControl>
            <UiFormLabel class="font-normal">
              {{ item.label }}
            </UiFormLabel>
          </UiFormItem>
        </UiFormField>
        <UiFormMessage />
      </UiFormItem>
    </UiFormField>

    <div class="mt-4 flex justify-start">
      <UiButton type="submit">
        Update display
      </UiButton>
    </div>
  </form>
</template>
