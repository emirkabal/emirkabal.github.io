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
    <NuxtPage
      :transition="{
        name: 'fade',
        mode: 'out-in'
      }"
    />
  </NuxtLayout>
</template>

<style>
.fade-enter-active {
  transition-property: opacity;
  transition-duration: 800ms;
}
.fade-leave-active {
  opacity: 0;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
