<script setup lang="ts">
const { $formatDate } = useNuxtApp()

const { data: posts } = await useAsyncData('homepage-posts', () =>
  queryContent('blog')
    .limit(5)
    .sort({
      createdAt: -1
    })
    .only(['title', 'createdAt', '_path', 'short_description'])
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
    name: 'repositories',
    url: '/repositories'
  },
  {
    name: 'privacy-policy',
    url: '/privacy-policy'
  }
]
</script>
<template>
  <main>
    <section class="my-4">
      <ContentDoc
        :head="false"
        class="prose max-w-none dark:prose-invert prose-headings:my-0 prose-headings:font-semibold prose-h2:text-xl prose-p:leading-6 prose-a:no-underline sm:prose-h2:text-2xl sm:prose-p:text-lg"
        path="/about"
      />
    </section>

    <!-- <section class="my-8">
      <h4 class="mb-2 text-xl font-bold">Projects</h4>
      <ul>
        <li></li>
      </ul>
    </section> -->

    <section class="my-8" v-if="posts && posts.length > 0">
      <h2 class="mb-2 text-xl font-bold">Recent Posts</h2>
      <ul class="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <PostCard
          v-for="post in posts"
          :key="post.createdAt"
          :post="{
            title: post.title,
            short_description: post.short_description,
            createdAt: post.createdAt,
            _path: post._path
          }"
        />
        <li>
          <NuxtLink
            class="group inline-block w-full cursor-pointer rounded border border-gray-300 bg-gray-50/40 px-4 py-2 text-gray-600 transition-colors hover:border-gray-400 hover:text-black dark:border-neutral-800 dark:bg-neutral-800/40 dark:text-gray-300 dark:hover:border-neutral-700 dark:hover:text-white"
            to="/blog"
          >
            <div class="flex items-center justify-between">
              <h3 class="line-clamp-1 text-sm font-semibold">
                Want to read more?
              </h3>
              <IconsArrow
                class="inline-block h-5 w-5 opacity-80 transition-opacity group-hover:opacity-100"
              />
            </div>
            <p class="line-clamp-2 text-xs opacity-80">
              Visit my blog for a variety of engaging posts. Currently only
              available in Turkish.
            </p>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section class="my-8">
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
    </section>

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
  </main>
</template>
