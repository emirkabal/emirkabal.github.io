<script setup>
const route = useRoute()
const { data } = await useAsyncData(route.params.slug.toString(), () =>
  queryContent('blog/' + route.params.slug).findOne()
)

const title = data.value.title
const description =
  data.value.short_description || 'Gönderiyi okumak için ziyaret et.'
useSeoMeta({
  titleTemplate: '%s - Emir Kabal',
  title,
  ogTitle: title,
  ogUrl: 'https://emirkabal.com' + data.value._path,
  twitterTitle: title,
  description,
  ogDescription: description,
  twitterDescription: description
})
</script>
<template>
  <main class="mt-8">
    <div v-if="data">
      <article class="mb-24">
        <header
          class="mb-8 space-y-2 border-b border-b-slate-300 pb-8 dark:border-b-slate-800"
        >
          <h1 class="text-4xl font-bold">
            {{ data.title }}
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            {{ data.short_description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <time
              class="self-center font-semibold text-gray-700 dark:text-gray-400"
            >
              {{ $moment(data.createdAt).locale('tr').format('DD MMMM YYYY') }}
            </time>

            <span
              class="inline-block rounded bg-gray-100 px-2 py-1 text-gray-700 dark:bg-slate-800/90 dark:text-gray-300"
              v-if="data.tags && data.tags.length > 0"
              v-for="tag in data.tags"
            >
              #{{ tag }}
            </span>
          </div>
        </header>
        <ContentRenderer
          class="prose max-w-none dark:prose-invert prose-h2:my-0 prose-h2:text-2xl prose-h2:font-semibold prose-h3:my-2 prose-h3:text-xl prose-p:mb-4 prose-p:text-xl prose-a:no-underline prose-img:my-4 prose-img:rounded-xl prose-img:shadow-md prose-video:rounded-xl"
          :value="data"
        />
      </article>
    </div>
    <div v-else>
      <div class="text-xl">This post could not be found.</div>
    </div>
  </main>
</template>
