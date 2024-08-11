<script setup lang="ts">
const { data: repos, status } = await useLazyFetch<Repository[]>(
  'https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=emirkabal',
  {
    server: false
  }
)

const title = 'Repositories'
const description = 'List of repositories that I have pinned on GitHub.'
useSeoMeta({
  titleTemplate: '%s - Emir Kabal',
  title,
  ogTitle: title,
  ogUrl: 'https://emirkabal.com/repositories',
  twitterTitle: title,
  description,
  ogDescription: description,
  twitterDescription: description
})
</script>
<template>
  <main class="mt-8">
    <h1 class="mb-2 text-xl font-bold">Pinned Repositories</h1>
    <ul class="grid gap-2 sm:grid-cols-2">
      <li v-if="status === 'success'" v-for="repo in repos" :key="repo.repo">
        <a
          :href="repo.link"
          target="_blank"
          rel="noopener noreferrer nofollow"
          class="group inline-block h-full w-full cursor-pointer rounded border border-gray-300 bg-gray-50/40 px-4 py-2 text-gray-600 transition-colors hover:border-gray-400 hover:text-black dark:border-neutral-800 dark:bg-neutral-800/40 dark:text-gray-300 dark:hover:border-neutral-700 dark:hover:text-white"
        >
          <div class="flex items-center justify-between">
            <h3 class="line-clamp-1 text-sm font-semibold">
              {{ repo.repo }}
            </h3>
            <span class="ml-2 flex items-center gap-x-1 text-xs font-semibold">
              {{ repo.stars }}
              <IconsStar class="-mt-0.5 inline-block h-4 w-4 text-klue" />
            </span>
          </div>
          <p class="line-clamp-2 text-xs opacity-80">
            {{ repo.description }}
          </p>
        </a>
      </li>
      <li v-else-if="status === 'error'" class="text-red-700">
        Fetch error. Please try again later.
      </li>
      <li
        v-else
        v-for="i in 6"
        :key="'repop' + i"
        class="h-[70px] w-full animate-pulse rounded bg-gray-200 dark:bg-neutral-800"
      ></li>
    </ul>
  </main>
</template>
