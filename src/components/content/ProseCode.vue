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
      class="absolute right-0 top-0 select-none rounded-b-xl bg-[#24292e] p-2 text-gray-600 transition-colors hover:text-gray-300"
    >
      <IconsClipboard class="h-6 w-6" />
    </button>
    <slot />
  </div>
</template>
