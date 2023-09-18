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

const title = 'Son Gönderiler'
const description = 'Emir Kabal tarafından yazılan son gönderileri okuyun.'
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
    <h1 class="text-3xl font-bold">Son Gönderiler</h1>
    <div
      class="my-12 space-y-4"
      v-for="group in groups"
      :key="group.date.toString()"
    >
      <h2 class="text-2xl font-bold">
        {{ $moment(group.date).locale('tr').format('MMMM YYYY') }}
      </h2>
      <ul class="space-y-2">
        <li v-for="post in group.posts" :key="post._path">
          <NuxtLink
            :to="post._path"
            class="flex w-full min-w-0 items-center justify-between rounded border border-gray-700 px-4 py-2 text-xl font-semibold text-gray-300 transition-colors hover:border-white hover:text-white"
          >
            <h3 class="line-clamp-1">
              {{ post.title }}
            </h3>
            <time class="flex-shrink-0 pl-4 text-xs">
              {{ $moment(post.createdAt).locale('tr').format('DD MMM') }}
            </time>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </main>
</template>
