<template>
  <div>
    <div
      class="dark:to-klue/20 pointer-events-none absolute inset-0 -z-10 h-screen w-full bg-gradient-to-t from-white from-70% via-white via-85% to-slate-200 dark:from-black dark:via-black"
    ></div>
    <div class="mx-auto max-w-2xl px-4 pt-[6vw] md:px-0 lg:pt-[2vw]">
      <Header />
      <slot />
      <span
        class="fixed bottom-0 right-0 hidden select-none flex-col p-12 opacity-0 transition-opacity duration-500 hover:opacity-100 lg:flex"
      >
        <span> dervis was here </span>
        <span class="text-xs text-gray-600 dark:text-gray-300"
          >~ he's my cat
        </span>
      </span>
    </div>
  </div>
</template>
