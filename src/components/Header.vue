<script setup>
const height = ref('144px')
const headerMain = ref(null)

watch(headerMain, () => {
  if (headerMain.value && headerMain.value.clientHeight) {
    height.value = headerMain.value.clientHeight + 'px'
  }
})
</script>

<template>
  <Transition
    enter-active-class="duration-700 ease-out"
    enter-from-class="transform translate-y-8 opacity-0"
    enter-to-class="opacity-700 transform translate-y-0"
    leave-active-class="opacity-0"
  >
    <nav
      v-if="$route.name === 'index'"
      ref="headerMain"
      class="flex items-center justify-between"
    >
      <div class="tracking-wide">
        <h1 class="text-4xl font-bold sm:text-5xl">Emir Kabal</h1>
        <p class="text-base text-gray-600 dark:text-gray-300 sm:text-xl">
          Full-stack developer
        </p>
      </div>
      <img
        src="~/assets/images/me.jpg"
        alt="Emir Kabal"
        loading="lazy"
        class="h-24 w-24 rounded-full sm:h-36 sm:w-36"
      />
    </nav>
    <nav
      v-else
      class="z-10 rounded-lg border bg-gray-100/60 px-4 py-2 backdrop-blur-3xl dark:border-transparent dark:bg-slate-800/40"
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
          <span class="text-gray-400 dark:text-gray-600">/</span>
        </li>
        <li
          v-for="(item, index) in $route.path.split('/').slice(1)"
          :key="index"
          class="flex items-center gap-2"
        >
          <NuxtLink
            class="line-clamp-1 text-gray-800 transition-colors dark:text-gray-100"
            :to="`${
              index < $route.path.split('/').slice(1).length - 1
                ? `/${item}`
                : $route.path
            }`"
          >
            {{ item }}
          </NuxtLink>
          <span class="text-gray-400 dark:text-gray-600">{{
            index < $route.fullPath.split('/').slice(1).length - 1 ? '/' : ''
          }}</span>
        </li>
      </ul>
    </nav>
  </Transition>
</template>
