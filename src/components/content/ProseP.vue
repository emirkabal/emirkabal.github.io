<script setup>
const slots = useSlots()
// @author https://github.com/nuxt/content/issues/1537#issuecomment-1254479351
// Hacky check for an image
const isImage = computed(() => {
  return slots.default()[0].type.tag === 'img'
})
</script>

<template>
  <div class="prose-image" v-if="isImage"><slot /></div>
  <p v-else><slot /></p>
</template>
