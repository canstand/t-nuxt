<script setup lang="ts">
import {
  SwitchRoot,
  type SwitchRootEmits,
  type SwitchRootProps,
  SwitchThumb,
  useForwardPropsEmits,
} from 'radix-vue'

const props = defineProps<SwitchRootProps>()
const emits = defineEmits<SwitchRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <SwitchRoot
    v-bind="forwarded"
    class="peer h-5 w-9 inline-flex shrink-0 cursor-pointer items-center border-2 border-transparent rounded-full shadow-sm transition-colors disabled:cursor-not-allowed data-[state=checked]:bg-accent11 data-[state=unchecked]:bg-gray4 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray12 focus-visible:ring-offset-gray4"
  >
    <SwitchThumb
      class="pointer-events-none block size-4 rounded-full bg-gray1 shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
    >
      <slot name="thumb" />
    </SwitchThumb>
  </SwitchRoot>
</template>
