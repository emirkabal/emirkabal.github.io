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
        <NuxtLink
          :to="repo.link"
          external
          target="_blank"
          rel="noopener noreferrer nofollow"
          class="card"
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
        </NuxtLink>
      </li>
      <li v-else-if="status === 'error'" class="text-red-700">
        Fetch error. Please try again later.
      </li>
      <li
        v-else
        v-for="i in 6"
        :key="'repop' + i"
        class="h-[70px] w-full animate-pulse rounded-xl bg-gray-200 dark:bg-neutral-800"
      ></li>
    </ul>

    <NuxtLink
      to="https://github.com/emirkabal"
      external
      target="_blank"
      rel="noopener noreferrer nofollow"
      class="group mt-8 flex w-full items-center justify-between gap-6 rounded-3xl border border-gray-300 bg-gradient-to-r from-violet-600 to-violet-300 p-4 text-black transition hover:ring-2 hover:ring-klue hover:ring-opacity-50 hover:ring-offset-2 dark:border-neutral-800 dark:from-gray-950 dark:to-gray-900 dark:text-white dark:hover:ring-offset-neutral-800 sm:p-6"
    >
      <div class="select-none space-y-2 tracking-tight sm:space-y-0">
        <h2
          class="bg-gradient-to-r from-lime-300 to-blue-200 bg-clip-text text-xl font-extrabold leading-6 text-transparent dark:from-lime-300 dark:to-klue sm:text-2xl"
        >
          Want to see more repositories?
        </h2>
        <p
          class="text-xs leading-4 text-gray-100 dark:text-gray-300 sm:text-sm"
        >
          ~ visit my github for more repositories.
        </p>
      </div>
      <IconsSocialGithub
        class="mr-4 h-10 w-10 flex-shrink-0 transition-transform group-hover:rotate-3 group-hover:scale-125"
      />
    </NuxtLink>
  </main>
</template>
