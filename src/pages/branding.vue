<script setup>
import { OrbitControls, GLTFModel, useProgress } from '@tresjs/cientos'
const { hasFinishLoading, progress, items } = await useProgress()
</script>
<template>
  <main class="mt-8">
    <div class="relative h-96 w-full">
      <div
        class="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-t from-green-400 to-violet-600 blur-3xl"
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
          <div class="w-200px">Loading... {{ progress }} %</div>
        </div>
      </Transition>
      <TresCanvas alpha preset="realistic">
        <TresPerspectiveCamera :position="[0, 0, 84]" />
        <OrbitControls
          :enable-pan="false"
          :enable-zoom="false"
          :enable-damping="false"
          :auto-rotate="true"
          :auto-rotate-speed="0.5"
        />
        <Suspense>
          <GLTFModel path="/3d/model/scene.gltf" draco />
        </Suspense>
        <Suspense>
          <Environment
            background
            :files="[
              'px.jpg',
              'nx.jpg',
              'py.jpg',
              'ny.jpg',
              'pz.jpg',
              'nz.jpg'
            ]"
            :path="'/3d/map/'"
          />
        </Suspense>
        <TresDirectionalLight
          :position="[15, 0, 15]"
          :intensity="2"
          cast-shadow
        />
      </TresCanvas>
    </div>
  </main>
</template>
