<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
const { copy } = useClipboard()

defineProps<{
  code?: string
  language?: string
  filename?: string
  highlights?: number[]
  meta?: string
}>()
</script>

<template>
  <div class="relative">
    <button
      v-if="code"
      @click="copy(code)"
      class="absolute right-0 top-0 m-2 select-none rounded bg-[#1f2937] text-gray-600 transition-colors hover:text-gray-300 dark:bg-[#0b0b0b] dark:text-neutral-600 dark:hover:text-neutral-300"
    >
      <IconsClipboard class="h-6 w-6" />
    </button>
    <slot />
  </div>
</template>
