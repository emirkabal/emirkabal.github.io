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
  <div>
    <!-- <div
      class="mt-2 inline-block cursor-pointer rounded bg-green-500 px-3 py-1 text-white"
    >
      Listening to <span class="font-semibold">The Weeknd</span> -
      <span class="font-semibold">Save Your Tears</span>
    </div> -->
    <div class="my-4">
      <ContentDoc
        :head="false"
        class="prose max-w-none dark:prose-invert prose-headings:my-0 prose-headings:font-semibold prose-h2:text-xl prose-p:leading-6 prose-a:no-underline sm:prose-h2:text-2xl sm:prose-p:text-lg"
        path="/about"
      />
    </div>

    <div class="my-8" v-if="posts && posts.length > 0">
      <div class="mb-2 flex items-center gap-2">
        <h3 class="text-xl font-bold">Blog</h3>
        <NuxtLink
          to="/blog"
          class="mt-1 text-sm text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white"
          >See all posts (Turkish only)</NuxtLink
        >
      </div>
      <ul class="grid grid-cols-1 gap-2 md:grid-cols-2">
        <li v-for="post in posts" :key="post.createdAt">
          <NuxtLink
            class="inline-block w-full cursor-pointer rounded border border-gray-300 bg-gray-50/40 px-4 py-2 text-gray-600 transition-colors hover:border-gray-400 hover:text-black dark:border-neutral-800 dark:bg-neutral-800/40 dark:text-gray-300 dark:hover:border-neutral-700 dark:hover:text-white"
            :to="post._path"
          >
            <h3 class="line-clamp-1">{{ post.title }}</h3>
            <time class="line-clamp-1 text-xs font-semibold">
              {{ $moment(post.createdAt).locale('tr').format('D MMM YYYY') }}
            </time>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div class="my-8">
      <h4 class="text-xl font-bold">Social</h4>
      <ul class="flex flex-wrap gap-x-2 gap-y-0.5">
        <li
          v-for="item in social"
          :key="item.name"
          class="flex-shrink-0 text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white sm:text-lg"
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
      <h5 class="text-xl font-bold">Helpful</h5>
      <ul class="flex flex-wrap gap-x-2 gap-y-0.5">
        <li
          v-for="item in footer"
          :key="item.name"
          class="flex-shrink-0 text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white sm:text-lg"
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
  </div>
</template>
