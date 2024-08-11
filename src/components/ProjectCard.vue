<script setup lang="ts">
defineProps<{
  data: {
    title?: string
    description?: string
    images: string[]
    url?: string
  }
}>()
</script>

<template>
  <NuxtLink
    :to="
      data.url +
      '?utm_source=emirkabal.com&utm_medium=web&utm_campaign=portfolio'
    "
    external
    target="_blank"
    class="card"
  >
    <ProseImg
      class="aspect-video prose-img:rounded-xl prose-img:object-cover"
      :src="data.images[0]"
    />
    <div class="flex items-center gap-1">
      <h3 class="text-xl font-semibold tracking-tight">
        {{ data.title }}
      </h3>
      <IconsExternal />
    </div>
    <p class="text-sm leading-5">
      {{ data.description }}
    </p>
  </NuxtLink>
</template>
