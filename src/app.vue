<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  @apply transition-all duration-[400ms];
}
.fade-enter-from,
.fade-leave-to {
  @apply opacity-0 blur-xl;
}
</style>
