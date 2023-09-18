<script setup>
const route = useRoute()
const { data, pending } = await useAsyncData(route.params.slug.toString(), () =>
  queryContent('blog/' + route.params.slug).findOne()
)
</script>
<template>
  <main class="mt-8">
    <div v-if="pending">
      <div class="flex justify-center">
        <div
          class="h-32 w-32 animate-spin rounded-full border-b-2 border-gray-900"
        ></div>
      </div>
    </div>
    <div v-else-if="data">
      <article class="mb-24">
        <header class="mb-8 space-y-2 border-b border-b-slate-800 pb-8">
          <h1 class="text-4xl font-bold">{{ data.title }}</h1>
          <p class="text-xl text-gray-300">{{ data.short_description }}</p>
          <div class="flex flex-wrap gap-2">
            <time class="rounded bg-slate-800/90 px-2 py-1">
              {{ $moment(data.createdAt).locale('tr').format('DD MMMM YYYY') }}
            </time>
            <div class="flex gap-2" v-if="data.tags && data.tags.length > 0">
              <span
                class="rounded bg-slate-800/90 px-2 py-1"
                v-for="tag in data.tags"
              >
                #{{ tag }}
              </span>
            </div>
          </div>
        </header>
        <ContentRenderer
          class="prose prose-invert max-w-none prose-h2:my-0 prose-h2:text-2xl prose-h2:font-semibold prose-h3:my-2 prose-h3:text-xl prose-p:my-2 prose-p:text-xl prose-a:no-underline prose-img:my-4 prose-img:rounded-xl prose-video:rounded-xl"
          :value="data"
        />
      </article>
    </div>
    <div v-else>
      <div class="text-xl">This post could not be found.</div>
    </div>
  </main>
</template>
