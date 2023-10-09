<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from 'ufo'
import { useRuntimeConfig, computed } from '#imports'

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

const loaded = ref(false)
const error = ref(false)
</script>

<template>
  <div
    :class="{
      'my-4': !loaded || !error
    }"
  >
    <div
      v-if="!loaded || error"
      class="relative aspect-video rounded-xl bg-gray-200 dark:bg-neutral-800"
      :class="{
        'animate-pulse': !loaded && !error
      }"
    >
      <div
        v-if="error"
        class="absolute inset-0 flex flex-col items-center justify-center"
      >
        <IconsNoImage class="h-12 w-12 text-gray-700 dark:text-gray-300" />
      </div>
    </div>
    <img
      :src="refinedSrc"
      loading="lazy"
      @load="loaded = true"
      @error=";[(loaded = false), (error = true)]"
      :alt="alt"
      :width="width"
      :height="height"
      class="h-full w-full object-contain object-center"
      :class="{
        'pointer-events-none absolute inset-0 left-0 top-0 -z-50 !h-0 !w-0 opacity-0':
          !loaded,
        'opacity-100': loaded
      }"
    />
  </div>
</template>
