<script setup lang="ts">
import {
  OrbitControls,
  GLTFModel,
  useProgress,
  Environment
} from '@tresjs/cientos'

const { hasFinishLoading, progress } = await useProgress()
const { onLoop, isActive, resume } = useRenderLoop()

const logo3d = shallowRef(null)

withDefaults(
  defineProps<{
    size?: 'static' | 'auto'
  }>(),
  {
    size: 'auto'
  }
)

onMounted(() => {
  if (!isActive.value) resume()
})

onLoop(({ delta }) => {
  // @ts-ignore
  if (logo3d.value) logo3d.value.rotation.y += delta * 0.25
})

onBeforeRouteLeave(() => {
  logo3d.value = null
})
</script>
<template>
  <figure
    class="!pointer-events-none relative mx-auto md:pointer-events-auto"
    :class="{
      'opacity-0': !hasFinishLoading,
      'opacity-100': hasFinishLoading,
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
        {{ progress }} %
      </div>
    </Transition>
    <TresCanvas alpha preset="realistic">
      <TresPerspectiveCamera :position="[0, 0, 84]" />
      <OrbitControls
        :enable-pan="false"
        :enable-zoom="false"
        :enable-damping="false"
      />
      <TresMesh ref="logo3d">
        <Suspense>
          <GLTFModel path="/3d/model/scene.gltf" draco />
        </Suspense>
      </TresMesh>
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
