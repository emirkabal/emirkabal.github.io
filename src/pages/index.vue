<script setup>
const { data: posts } = await useAsyncData('homepage-posts', () =>
  queryContent('blog')
    .limit(4)
    .sort({
      createdAt: -1
    })
    .only(['title', 'createdAt', '_path'])
    .find()
)

const social = [
  {
    name: 'github',
    url: 'https://github.com/emirkabal'
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/emirkabal/'
  },
  {
    name: 'twitter',
    url: 'https://x.com/emirkabal'
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/emirkaball'
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/@kabal3345'
  },
  {
    name: 'discord',
    url: 'https://discord.gg/M5ZSEux'
  }
]

const footer = [
  {
    name: 'api-docs',
    url: 'https://api-docs.emirkabal.com'
  },
  {
    name: 'branding',
    url: '/branding'
  },
  {
    name: 'bank-accounts',
    url: '/bank-accounts'
  },
  {
    name: 'privacy-policy',
    url: '/privacy-policy'
  }
]
</script>
<template>
  <main>
    <div class="my-8">
      <ContentDoc
        :head="false"
        class="prose max-w-none dark:prose-invert prose-h2:my-0 prose-h2:font-semibold prose-p:text-xl prose-a:no-underline"
        path="/about"
      />
    </div>

    <div class="my-8" v-if="posts && posts.length > 0">
      <div class="mb-2 flex items-center gap-2">
        <h3 class="text-2xl font-semibold">Blog</h3>
        <NuxtLink
          to="/blog"
          class="mt-1 text-sm text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white md:text-base"
          >See all posts (Turkish only)</NuxtLink
        >
      </div>
      <ul class="grid grid-cols-1 gap-2 md:grid-cols-2">
        <li v-for="post in posts" :key="post.createdAt">
          <NuxtLink
            class="inline-block w-full rounded border border-gray-300 px-4 py-2 text-gray-600 transition-colors hover:border-gray-600 hover:text-black dark:border-gray-800 dark:text-gray-300 dark:hover:border-gray-200 dark:hover:text-white"
            :to="post._path"
          >
            <h3 class="line-clamp-1 md:text-lg">{{ post.title }}</h3>
            <time class="line-clamp-1 text-xs">
              {{ $moment(post.createdAt).locale('tr').format('DD MMM YYYY') }}
            </time>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div class="my-8">
      <h4 class="text-2xl font-semibold">Social</h4>
      <ul class="flex flex-wrap gap-x-2 gap-y-2">
        <li
          v-for="item in social"
          :key="item.name"
          class="flex-shrink-0 text-xl text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white"
        >
          <a
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </div>

    <footer class="my-8">
      <h5 class="text-2xl font-semibold">Helpful</h5>
      <ul class="flex flex-wrap gap-x-2 gap-y-2">
        <li
          v-for="item in footer"
          :key="item.name"
          class="flex-shrink-0 text-xl text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white"
        >
          <a
            v-if="item.url.startsWith('http')"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {{ item.name }}
          </a>
          <NuxtLink v-else :to="item.url">{{ item.name }}</NuxtLink>
        </li>
      </ul>
    </footer>
  </main>
</template>
