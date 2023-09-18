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
        <p class="text-base text-gray-300 md:text-xl">Full-stack developer</p>
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
      class="z-10 rounded-xl bg-slate-800/40 px-4 py-2 backdrop-blur-3xl"
    >
      <ul class="flex items-center gap-2 font-semibold">
        <li class="flex gap-2">
          <NuxtLink to="/" class="transition-opacity hover:opacity-75">
            <img
              src="~/assets/images/me.jpg"
              alt="Emir Kabal"
              loading="lazy"
              class="h-6 w-6 rounded-full"
            />
          </NuxtLink>
          <span class="text-gray-300">/</span>
        </li>
        <li
          v-for="(item, index) in $route.fullPath.split('/').slice(1)"
          :key="index"
          class="flex gap-2"
        >
          <NuxtLink
            class="line-clamp-1 text-white transition-colors hover:text-gray-300"
            :to="`${
              index < $route.fullPath.split('/').slice(1).length - 1
                ? `/${item}`
                : $route.path
            }`"
          >
            {{ item }}
          </NuxtLink>
          <span class="text-gray-300">{{
            index < $route.fullPath.split('/').slice(1).length - 1 ? '/' : ''
          }}</span>
        </li>
      </ul>
    </header>
  </Transition>
</template>
