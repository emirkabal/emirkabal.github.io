<script setup>
defineProps({
  error: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="flex h-screen items-center justify-center">
    <div class="text-center">
      <h1 class="mb-4 text-4xl font-bold">Error</h1>
      <p class="mb-4 text-gray-300">{{ error.message }}</p>
      <NuxtLink to="/" class="text-blue-500 hover:underline"
        >Back to Home</NuxtLink
      >
    </div>
  </div>
</template>
