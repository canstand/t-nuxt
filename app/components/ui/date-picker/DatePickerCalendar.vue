<script lang="ts" setup>
import { DatePickerCalendar } from 'radix-vue'
import { DatePickerCell, DatePickerCellTrigger, DatePickerGrid, DatePickerGridBody, DatePickerGridHead, DatePickerGridRow, DatePickerHeadCell, DatePickerHeader, DatePickerHeading, DatePickerNextButton, DatePickerPrevButton } from '.'
</script>

<template>
  <DatePickerCalendar
    v-slot="{ grid, weekDays }"
    class="p-3"
  >
    <DatePickerHeader>
      <DatePickerPrevButton />
      <DatePickerHeading />
      <DatePickerNextButton />
    </DatePickerHeader>

    <div class="mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
      <DatePickerGrid v-for="month in grid" :key="month.value.toString()">
        <DatePickerGridHead>
          <DatePickerGridRow>
            <DatePickerHeadCell v-for="day in weekDays" :key="day">
              {{ day }}
            </DatePickerHeadCell>
          </DatePickerGridRow>
        </DatePickerGridHead>
        <DatePickerGridBody>
          <DatePickerGridRow v-for="(weekDates, index) in month.rows" :key="`weekDate-${index}`" class="mt-2 w-full">
            <DatePickerCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
            >
              <DatePickerCellTrigger
                :day="weekDate"
                :month="month.value"
              />
            </DatePickerCell>
          </DatePickerGridRow>
        </DatePickerGridBody>
      </DatePickerGrid>
    </div>
  </DatePickerCalendar>
</template>
