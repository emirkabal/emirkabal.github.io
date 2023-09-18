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
  <main>
    <ContentDoc
      :head="false"
      class="prose mb-28 mt-8 max-w-none dark:prose-invert prose-h2:my-0 prose-h2:font-semibold prose-p:text-xl prose-a:no-underline"
      path="/privacy-policy"
    />
  </main>
</template>
