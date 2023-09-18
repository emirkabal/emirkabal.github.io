<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    href?: string
    blank?: boolean
  }>(),
  {
    blank: false,
    href: ''
  }
)
function isHttpUrl(value: string) {
  let url
  try {
    url = new URL(value)
  } catch (_) {
    return false
  }
  return url.protocol === 'http:' || url.protocol === 'https:'
}
const isExternal = isHttpUrl(props.href)
let bindProps: {
  to: string
  target?: string
} = {
  to: props.href
}
if (isExternal || props.blank) {
  bindProps.target = '_blank'
}
</script>
<template>
  <NuxtLink v-bind="bindProps">
    <slot />
  </NuxtLink>
</template>
