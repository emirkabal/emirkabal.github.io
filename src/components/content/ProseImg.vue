<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from 'ufo'
const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  },
  maxHeight: {
    type: [String, Number],
    default: undefined
  }
})

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    const _base = withLeadingSlash(
      withTrailingSlash(useRuntimeConfig().app.baseURL)
    )
    if (_base !== '/' && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src)
    }
  }
  return props.src
})
const state = useState(refinedSrc.value, () => {
  return {
    isLoading: true,
    error: false
  }
})
</script>

<template>
  <div class="my-4">
    <div
      v-if="state.isLoading || state.error"
      class="relative aspect-video w-full rounded-xl bg-gray-200 dark:bg-neutral-800"
      :class="{
        'animate-pulse': state.isLoading && !state.error
      }"
      :style="{
        maxHeight: props.maxHeight
      }"
    >
      <div
        v-if="state.error"
        class="absolute inset-0 flex flex-col items-center justify-center"
      >
        <IconsNoImage class="h-12 w-12 text-gray-700 dark:text-gray-300" />
      </div>
    </div>
    <NuxtImg
      :src="refinedSrc"
      loading="lazy"
      @load="state.isLoading = false"
      @error="state.error = true"
      :alt="alt"
      format="webp"
      sizes="100vw sm:50vw md:768px"
      class="h-full w-full object-contain object-center"
      :class="{
        'pointer-events-none invisible absolute inset-0 left-0 top-0 !h-0 !w-0':
          state.isLoading
      }"
      :style="{
        maxHeight: maxHeight
      }"
    />
  </div>
</template>
