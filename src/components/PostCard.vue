<script lang="ts" setup>
const { $formatDate } = useNuxtApp()

defineProps<{
  post: {
    _path?: string
    title?: string
    createdAt: string
    short_description?: string
  }
}>()
</script>

<template>
  <li>
    <NuxtLink
      class="group inline-block w-full cursor-pointer rounded border border-gray-300 bg-gray-50/40 px-4 py-2 text-gray-600 transition-colors hover:border-gray-400 hover:text-black dark:border-neutral-800 dark:bg-neutral-800/40 dark:text-gray-300 dark:hover:border-neutral-700 dark:hover:text-white"
      :to="post._path"
    >
      <div class="flex items-center justify-between">
        <h2 class="line-clamp-1 text-sm font-semibold">
          {{ post.title }}
        </h2>
        <time
          class="ml-2 flex-shrink-0 text-xs font-semibold opacity-80 transition-opacity group-hover:opacity-100"
        >
          {{ $formatDate(post.createdAt) }}
        </time>
      </div>
      <p class="line-clamp-2 text-xs opacity-80">
        {{ post.short_description }}
      </p>
    </NuxtLink>
  </li>
</template>
