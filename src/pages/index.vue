<script setup lang="ts">
import { projects, social, links, footer } from '@/utils/constants'
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

    <section class="my-8">
      <h3 class="mb-2 text-xl font-bold">Projects</h3>
      <ul class="grid grid-cols-2 gap-4">
        <li v-for="item in projects" :key="item.url">
          <ProjectCard :data="item" />
        </li>
      </ul>
    </section>

    <section class="my-8" v-if="posts && posts.length > 0">
      <h3 class="mb-2 text-xl font-bold">Recent Posts</h3>
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
      <h3 class="mb-2 text-xl font-bold">Helpful</h3>
      <ul class="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <li v-for="item in links" :key="item.name">
          <NuxtLink
            class="card flex items-center gap-1"
            :to="item.url"
            :external="item.external"
            :target="item.external ? '_blank' : '_self'"
            rel="noopener noreferrer nofollow"
          >
            {{ item.name }}
            <IconsExternal v-if="item.external" />
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section class="my-8">
      <h3 class="text-xl font-bold">Social</h3>
      <ul class="flex flex-wrap gap-x-4 gap-y-0.5">
        <li
          v-for="item in social"
          :key="item.name"
          class="flex-shrink-0 text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white sm:text-lg"
        >
          <a
            class="flex items-center gap-1"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <component :is="item.icon" class="h-4 w-4" />
            {{ item.name }}
          </a>
        </li>
      </ul>
    </section>

    <footer class="my-8">
      <ul class="flex flex-wrap gap-x-2 gap-y-0.5">
        <li
          v-for="item in footer"
          :key="item.name"
          class="text*sm flex-shrink-0 text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white"
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
