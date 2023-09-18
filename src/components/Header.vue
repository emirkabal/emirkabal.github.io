<template>
  <Transition
    enter-active-class="duration-700 ease-out"
    enter-from-class="transform translate-y-8 opacity-0"
    enter-to-class="opacity-700 transform translate-y-0"
    leave-active-class="opacity-0"
  >
    <header
      v-if="$route.name === 'index'"
      class="flex items-center justify-between"
    >
      <div class="tracking-wide">
        <h1 class="text-4xl font-bold md:text-5xl">Emir Kabal</h1>
        <p class="text-base text-gray-600 dark:text-gray-300 md:text-xl">
          Full-stack developer
        </p>
      </div>
      <img
        src="~/assets/images/me.jpg"
        alt="Emir Kabal"
        loading="lazy"
        class="h-24 w-24 rounded-full md:h-36 md:w-36"
      />
    </header>
    <header
      v-else
      class="z-10 rounded-xl bg-gray-200 px-4 py-2 shadow backdrop-blur-3xl dark:bg-slate-800/40"
    >
      <ul class="flex items-center gap-2 font-semibold">
        <li class="flex flex-shrink-0 items-center gap-2">
          <NuxtLink to="/" class="transition-opacity hover:opacity-75">
            <img
              src="~/assets/images/me.jpg"
              alt="Emir Kabal"
              loading="lazy"
              class="h-6 w-6 rounded-full"
            />
          </NuxtLink>
          <span class="text-gray-600 dark:text-gray-300">/</span>
        </li>
        <li
          v-for="(item, index) in $route.fullPath.split('/').slice(1)"
          :key="index"
          class="flex items-center gap-2"
        >
          <NuxtLink
            class="line-clamp-1 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
            :to="`${
              index < $route.fullPath.split('/').slice(1).length - 1
                ? `/${item}`
                : $route.path
            }`"
          >
            {{ item }}
          </NuxtLink>
          <span class="text-gray-600 dark:text-gray-300">{{
            index < $route.fullPath.split('/').slice(1).length - 1 ? '/' : ''
          }}</span>
        </li>
      </ul>
    </header>
  </Transition>
</template>
