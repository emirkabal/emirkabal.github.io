<script setup lang="ts">
import { Post } from '~/@types'
const { data } = await useAsyncData<Post[]>(
  'posts',
  () =>
    queryContent('blog')
      .limit(4)
      .sort({
        createdAt: -1
      })
      .only(['title', 'createdAt', '_path'])
      .find() as Promise<Post[]>
)

const groups = computed(() => {
  if (!data.value) return []

  const dates = data.value
    .map((post) => {
      const date = new Date(post.createdAt)
      return {
        month: date.getMonth(),
        year: date.getFullYear()
      }
    })
    .filter((date, index, self) => {
      return (
        self.findIndex(
          (d) => d.month === date.month && d.year === date.year
        ) === index
      )
    })

  return dates.map((date) => {
    return {
      date: new Date(date.year, date.month),
      posts: !data.value
        ? []
        : data.value.filter((post) => {
            const postDate = new Date(post.createdAt)
            return (
              postDate.getMonth() === date.month &&
              postDate.getFullYear() === date.year
            )
          })
    }
  })
})

const title = 'Blog'
const description =
  'Emir Kabal tarafından yazılan son blog gönderilerini okuyun.'
useSeoMeta({
  titleTemplate: '%s - Emir Kabal',
  title,
  ogTitle: title,
  ogUrl: 'https://emirkabal.com/blog',
  twitterTitle: title,
  description,
  ogDescription: description,
  twitterDescription: description
})
</script>

<template>
  <main class="mt-8">
    <h1 class="text-3xl font-bold">Blog</h1>
    <h2 class="text-xl text-gray-600 dark:text-gray-300">Son Gönderiler</h2>
    <div
      class="my-8 space-y-4"
      v-for="group in groups"
      :key="group.date.toString()"
    >
      <h6 class="text-2xl font-bold">
        {{ $moment(group.date).locale('tr').format('MMMM YYYY') }}
      </h6>
      <ul class="space-y-2">
        <li v-for="post in group.posts" :key="post._path">
          <NuxtLink
            :to="post._path"
            class="flex w-full min-w-0 items-center justify-between rounded border border-gray-300 px-4 py-2 text-gray-600 transition-colors hover:border-gray-600 hover:text-black dark:border-gray-600 dark:text-gray-300 dark:hover:border-white dark:hover:text-white md:text-lg"
          >
            <span class="line-clamp-1">
              {{ post.title }}
            </span>
            <time class="flex-shrink-0 pl-4 text-xs font-semibold">
              {{ $moment(post.createdAt).locale('tr').format('DD MMM') }}
            </time>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </main>
</template>