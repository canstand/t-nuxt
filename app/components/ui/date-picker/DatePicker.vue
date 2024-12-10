<script setup lang="ts">
import { getLocalTimeZone } from '@internationalized/date'
import { CalendarIcon } from '@radix-icons/vue'
import {
  DatePickerContent,
  DatePickerField,
  DatePickerRoot,
  type DatePickerRootEmits,
  type DatePickerRootProps,
  DatePickerTrigger,
} from 'radix-vue'
import { useForwardPropsEmits } from 'radix-vue'
import { DatePickerCalendar } from '.'

const props = defineProps<DatePickerRootProps>()
const emit = defineEmits<DatePickerRootEmits>()

const hasValue = computed(() => props.modelValue !== undefined)

const forwarded = useForwardPropsEmits(props, emit)
</script>

<template>
  <DatePickerRoot v-bind="forwarded">
    <DatePickerField v-slot="{ modelValue }" class="w-40 flex select-none items-center justify-between border border-transparent rounded-lg bg-white p-1 text-center data-[invalid]:border-error7">
      <DatePickerTrigger as-child>
        <Button
          variant="outline"
          class="w-full text-start font-normal" :class="hasValue ? '' : 'text-gray11'"
          as="div"
        >
          <span>{{ modelValue ? modelValue.toDate(getLocalTimeZone()).toLocaleDateString() : 'Pick a date' }}</span>
          <CalendarIcon class="ms-auto size-4 op50" />
        </Button>
      </DatePickerTrigger>
    </DatePickerField>
    <DatePickerContent
      :side-offset="4"
      class="border border-gray6 rounded-lg rounded-md bg-white shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2"
    >
      <DatePickerCalendar />
    </DatePickerContent>
  </DatePickerRoot>
</template>
