<template>
  <Transition
    enter-active-class="duration-700 ease-out"
    enter-from-class="transform translate-y-8 opacity-0"
    enter-to-class="opacity-700 transform translate-y-0"
    leave-active-class="opacity-0"
  >
    <nav
      v-if="$route.name === 'index'"
      class="flex items-center justify-between"
    >
      <div class="tracking-wide">
        <div class="flex items-center gap-x-2.5">
          <h1 class="flex-shrink-0 text-xl font-black sm:text-4xl">
            Emir Kabal
          </h1>
          <Presence />
        </div>
        <h6
          class="text-sm leading-4 text-gray-700 dark:text-gray-300 sm:text-base"
        >
          A full-stack software developer from Turkey.
        </h6>
      </div>
      <img
        src="~/assets/images/me.jpg"
        alt="Emir Kabal"
        loading="lazy"
        class="ml-4 h-16 w-16 cursor-pointer rounded-lg sm:mr-0"
      />
    </nav>
    <nav
      v-else
      class="z-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 backdrop-blur-3xl dark:border-neutral-800 dark:bg-neutral-800/60"
    >
      <ul class="flex items-center gap-2 font-semibold">
        <li class="flex flex-shrink-0 items-center gap-2">
          <NuxtLink to="/" class="transition-opacity hover:opacity-80">
            <img
              src="~/assets/images/me.jpg"
              alt="Emir Kabal"
              loading="lazy"
              class="h-6 w-6 rounded-full"
            />
          </NuxtLink>
          <span class="font-semibold text-gray-400 dark:text-neutral-600"
            >/</span
          >
        </li>
        <li
          v-for="(item, index) in $route.path.split('/').slice(1)"
          :key="index"
          class="flex items-center gap-2"
        >
          <NuxtLink
            class="line-clamp-1 text-gray-800 transition-colors dark:text-white"
            :to="`${
              index < $route.path.split('/').slice(1).length - 1
                ? `/${item}`
                : $route.path
            }`"
          >
            {{ item }}
          </NuxtLink>
          <span class="font-semibold text-gray-400 dark:text-neutral-600">{{
            index < $route.fullPath.split('/').slice(1).length - 1 ? '/' : ''
          }}</span>
        </li>
      </ul>
    </nav>
  </Transition>
</template>
