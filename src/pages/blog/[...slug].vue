<script setup>
const { getImage } = useImage()
const route = useRoute()
const { data } = await useAsyncData(route.params.slug.toString(), () =>
  queryContent('blog/' + route.params.slug).findOne()
)

const { data: nav } = await useAsyncData(`${route.params.slug}-prev-next`, () =>
  queryContent('blog')
    .only(['_path', 'title'])
    .sort({
      createdAt: 'desc'
    })
    .findSurround('/blog/' + route.params.slug)
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
      <div class="mt-12 flex w-full flex-col gap-2 sm:flex-row">
        <NuxtLink
          class="group flex w-full cursor-pointer items-center justify-between gap-x-2 rounded border border-gray-300 bg-gray-50/40 px-4 py-2 text-right text-gray-600 transition-colors hover:border-gray-400 hover:text-black dark:border-neutral-800 dark:bg-neutral-800/40 dark:text-gray-300 dark:hover:border-neutral-700 dark:hover:text-white"
          :class="{
            'cursor-default border-0 !text-gray-400 !opacity-75': !nav[1]
          }"
          :to="nav[1]?._path"
        >
          <IconsArrow
            class="inline-block h-6 w-6 flex-shrink-0 rotate-180 opacity-80 transition-opacity group-hover:opacity-100"
          />
          <div>
            <div class="text-xs opacity-80">Sonraki Gönderi</div>
            <div class="line-clamp-1 text-sm font-semibold">
              {{ nav[1]?.title || 'Yok' }}
            </div>
          </div>
        </NuxtLink>

        <NuxtLink
          class="group flex w-full cursor-pointer items-center justify-between gap-x-2 rounded border border-gray-300 bg-gray-50/40 px-4 py-2 text-gray-600 transition-colors hover:border-gray-400 hover:text-black dark:border-neutral-800 dark:bg-neutral-800/40 dark:text-gray-300 dark:hover:border-neutral-700 dark:hover:text-white"
          :class="{
            'cursor-default border-0 !text-gray-400 !opacity-75': !nav[0]
          }"
          :to="nav[0]?._path"
        >
          <div>
            <div class="text-xs opacity-80">Önceki Gönderi</div>
            <div class="line-clamp-1 text-sm font-semibold">
              {{ nav[0]?.title || 'Yok' }}
            </div>
          </div>
          <IconsArrow
            class="inline-block h-6 w-6 flex-shrink-0 opacity-80 transition-opacity group-hover:opacity-100"
          />
        </NuxtLink>
      </div>
    </article>
    <div v-else>
      <div class="sm:text-xl">This post could not be found.</div>
    </div>
  </div>
</template>
