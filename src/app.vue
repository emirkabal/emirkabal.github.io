<script setup>
const description =
  "Hello, I'm Emir Kabal and I'm a full-stack developer and making some Node.js applications and websites."
useSeoMeta({
  title: 'Emir Kabal',
  description,
  ogTitle: 'Emir Kabal',
  ogDescription: description,
  ogImage: 'https://emirkabal.com/images/og.jpg',
  ogUrl: 'https://emirkabal.com',
  twitterTitle: 'Emir Kabal',
  twitterDescription: description,
  twitterImage: 'https://emirkabal.com/images/og.jpg',
  twitterCard: 'summary'
})
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }
  ]
})
</script>
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
  @apply opacity-0;
}
</style>
