<script setup>
const title = 'Privacy Policy'
const description = 'Privacy Policy of Emir Kabal.'
useSeoMeta({
  titleTemplate: '%s - Emir Kabal',
  title,
  ogTitle: title,
  ogUrl: 'https://emirkabal.com/privacy-policy',
  twitterTitle: title,
  description,
  ogDescription: description,
  twitterDescription: description
})
</script>
<template>
  <main class="mb-28 mt-8">
    <ContentDoc
      :head="false"
      class="prose max-w-none dark:prose-invert"
      path="/privacy-policy"
    />
  </main>
</template>
