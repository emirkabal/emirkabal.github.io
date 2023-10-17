<script setup>
const { getImage } = useImage()
const route = useRoute()
const { data } = await useAsyncData(route.params.slug.toString(), () =>
  queryContent('blog/' + route.params.slug).findOne()
)

const { url: imageUrl } = getImage(data.value.image)

const title = data.value.title
const description =
  data.value.short_description || 'Gönderiyi okumak için ziyaret et.'

useSeoMeta({
  titleTemplate: '%s - Emir Kabal',
  title,
  ogTitle: title,
  ogUrl: 'https://emirkabal.com' + data.value._path,
  ogImage: imageUrl,
  twitterImage: imageUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  description,
  ogDescription: description,
  twitterDescription: description
})
</script>
<template>
  <div class="mt-8">
    <article v-if="data" class="mb-24">
      <header
        class="mb-8 space-y-2 border-b border-b-gray-200 pb-8 dark:border-b-neutral-800"
      >
        <ProseImg
          :src="data.image"
          :alt="data.title + ' Fotoğrafı'"
          class="mb-4 w-full rounded-xl prose-img:rounded-xl prose-img:border prose-img:object-cover dark:prose-img:border-neutral-800"
          maxHeight="288px"
        />
        <h1 class="text-2xl font-black sm:text-4xl">
          {{ data.title }}
        </h1>
        <p class="text-gray-600 dark:text-gray-300">
          {{ data.short_description }}
        </p>
        <div class="flex flex-wrap gap-2">
          <time
            class="self-center text-sm font-bold text-neutral-700 dark:text-neutral-300"
          >
            {{ $moment(data.createdAt).locale('tr').format('D MMMM YYYY') }}
          </time>
          <span
            class="inline-block rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-neutral-800 dark:text-neutral-300"
            v-if="data.tags && data.tags.length > 0"
            v-for="tag in data.tags"
          >
            #{{ tag }}
          </span>
        </div>
      </header>
      <ContentRenderer
        class="prose max-w-none dark:prose-invert prose-headings:mb-2 prose-headings:mt-4 prose-a:no-underline prose-img:rounded-xl prose-img:border dark:prose-img:border-neutral-800 dark:prose-hr:border-neutral-800"
        :value="data"
      />
    </article>
    <div v-else>
      <div class="sm:text-xl">This post could not be found.</div>
    </div>
  </div>
</template>
