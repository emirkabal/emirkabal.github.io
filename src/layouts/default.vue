<template>
  <div>
    <div class="mx-auto max-w-2xl px-4 pt-6 sm:pt-14 md:px-0">
      <main>
        <Header />
        <slot />
      </main>
      <ThemeSwitcher />
      <ClientOnly>
        <span
          class="fixed bottom-0 right-0 hidden select-none flex-col p-12 opacity-0 transition-opacity duration-500 hover:opacity-100 lg:flex"
        >
          <span> dervis was here </span>
          <span class="text-xs text-gray-600 dark:text-gray-300"
            >~ he's my cat
          </span>
        </span>
      </ClientOnly>
    </div>
  </div>
</template>
