<script setup lang="ts">
import {
  OrbitControls,
  GLTFModel,
  useProgress,
  Environment
} from '@tresjs/cientos'
const { hasFinishLoading, progress } = await useProgress()
const { onLoop } = useRenderLoop()
const threed = ref(null)

withDefaults(
  defineProps<{
    size?: 'static' | 'auto'
  }>(),
  {
    size: 'auto'
  }
)

watchEffect(async () => {
  await nextTick()
  onLoop(({ delta }) => {
    if (threed.value) {
      // @ts-ignore
      threed.value.rotation.y += delta * 0.2
    }
  })
})

onBeforeRouteLeave(() => {
  threed.value = null
})
</script>
<template>
  <figure
    class="!pointer-events-none relative mx-auto md:pointer-events-auto"
    :class="{
      'opacity-0': !threed,
      'opacity-100': threed,
      'h-64 w-64': size === 'static',
      'h-64 w-64 md:h-full md:w-full': size === 'auto'
    }"
  >
    <div
      class="pointer-events-none absolute inset-0 left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-t from-green-400 to-violet-600 opacity-50 blur-3xl dark:opacity-100"
    ></div>
    <Transition
      name="fade-overlay"
      enter-active-class="opacity-1 transition-opacity duration-200"
      leave-active-class="opacity-0 transition-opacity duration-200"
    >
      <div
        v-show="!hasFinishLoading"
        class="bg-grey-600 t-0 l-0 absolute z-20 flex h-full w-full items-center justify-center font-mono text-black"
      >
        <div class="w-200px">{{ progress }} %</div>
      </div>
    </Transition>
    <TresCanvas alpha preset="realistic">
      <TresPerspectiveCamera :position="[0, 0, 84]" />
      <OrbitControls
        :enable-pan="false"
        :enable-zoom="false"
        :enable-damping="false"
      />
      <TresGroup ref="threed">
        <Suspense>
          <GLTFModel path="/3d/model/scene.gltf" draco />
        </Suspense>
      </TresGroup>
      <Suspense>
        <Environment
          :files="['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']"
          :path="'/3d/map/'"
        />
      </Suspense>
      <TresDirectionalLight
        :position="[15, 0, 15]"
        :intensity="2"
        cast-shadow
      />
    </TresCanvas>
  </figure>
</template>
