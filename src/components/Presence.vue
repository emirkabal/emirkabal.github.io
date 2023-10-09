<script setup>
import { useEventListener } from '@vueuse/core'
const socket = ref({})
const presence = ref({})

onMounted(async () => {
  const $lanyard = inject('lanyard')
  socket.value = await $lanyard({
    userId: '269581360316940299',
    socket: true
  })

  useEventListener(socket.value, 'message', ({ data }) => {
    const { d: status } = JSON.parse(data)
    presence.value = status
  })
})

onUnmounted(() => {
  if (socket.value) socket.value.close()
})
</script>
<template>
  <ClientOnly>
    <Transition
      enter-active-class="transition ease-out duration-700"
      enter-from-class="opacity-0 -translate-x-[100%] "
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition ease-in duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <a
        v-if="presence && presence.spotify"
        :href="`https://open.spotify.com/track/${presence.spotify.track_id}`"
        target="_blank"
        rel="noopener noreferrer nofollow"
        class="hidden max-w-xs cursor-pointer rounded bg-[#1DB954] px-2 py-1 text-xs text-white sm:inline-block"
        v-tooltip="{
          content: 'Listening now',
          distance: 10,
          trigger: 'hover'
        }"
      >
        <span class="flex items-center gap-x-1">
          <IconsSpotify class="h-4 w-4 sm:h-5 sm:w-5" />
          <span class="line-clamp-1 font-semibold">{{
            presence.spotify.song
          }}</span>
        </span>
      </a>
    </Transition>
  </ClientOnly>
</template>
