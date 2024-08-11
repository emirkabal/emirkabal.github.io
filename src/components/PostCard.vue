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
    <NuxtLink class="card" :to="post._path">
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
