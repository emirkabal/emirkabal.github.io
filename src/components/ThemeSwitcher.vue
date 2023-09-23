<script setup>
const mode = useColorMode()
const isDark = computed(() => mode.value === 'dark')

const isAppearanceTransition =
  typeof document !== 'undefined' &&
  document.startViewTransition &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * https://github.com/hooray
 * https://github.com/vuejs/vitepress/pull/2347
 */
const toggleDark = (event) => {
  if (!isAppearanceTransition || !event) {
    mode.preference = isDark.value ? 'light' : 'dark'
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  )

  const transition = document.startViewTransition(async () => {
    mode.preference = isDark.value ? 'light' : 'dark'
    await nextTick()
  })

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`
    ]
    document.documentElement.animate(
      {
        clipPath: isDark.value ? [...clipPath].reverse() : clipPath
      },
      {
        duration: 400,
        easing: 'ease-in',
        pseudoElement: isDark.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)'
      }
    )
  })
}
</script>
<template>
  <div class="fixed bottom-8 left-8 hidden lg:block">
    <button
      @click="toggleDark"
      class="group relative flex h-10 w-10 items-center justify-center rounded-full p-2 transition-colors duration-500"
    >
      <ClientOnly>
        <IconsSun v-if="isDark" class="absolute h-7 w-7 text-white" />
        <IconsMoon v-else class="absolute h-7 w-7 text-gray-800" />
      </ClientOnly>

      <div
        class="absolute left-0 right-0 top-0 -z-10 h-5 w-5 animate-pulse rounded-full bg-gradient-to-tl from-lime-300 to-violet-400 blur-lg transition-all group-hover:blur-md dark:from-lime-500 dark:to-violet-800 md:h-10 md:w-10"
      ></div>
    </button>
  </div>
</template>
