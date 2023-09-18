<script setup>
import { useClipboard } from '@vueuse/core'
import LogoWhite from '~/assets/images/logo/white.svg'
import LogoBlack from '~/assets/images/logo/black.svg'

const { copy } = useClipboard()

const colors = [
  {
    name: 'Klue',
    hex: '#39A7F2',
    rgb: '57, 167, 242'
  },
  {
    name: 'Black',
    hex: '#000000',
    rgb: '0, 0, 0'
  },
  {
    name: 'White',
    hex: '#FFFFFF',
    bright: true,
    rgb: '255, 255, 255'
  }
]

const title = 'Branding'
const description = 'Colors, logo and more.'
useSeoMeta({
  titleTemplate: '%s - Emir Kabal',
  title,
  ogTitle: title,
  ogUrl: 'https://emirkabal.com/branding',
  twitterTitle: title,
  description,
  ogDescription: description,
  twitterDescription: description
})
</script>
<template>
  <main class="mt-8">
    <div class="relative h-96 w-full">
      <ThreeDEKLogo />
      <div class="relative">
        <div
          class="pointer-events-none absolute inset-0 left-1/2 top-1/2 -z-10 hidden h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-t from-green-400 to-violet-600 blur-3xl dark:block md:h-96 md:w-96"
        ></div>
        <h1 class="my-4 text-3xl font-bold">Logo</h1>
        <div class="flex gap-2">
          <div class="w-full">
            <div
              class="rounded-xl p-6 shadow-md md:p-12"
              :style="{
                backgroundImage: `url(/images/branding/bg-transparent-w.png)`,
                backgroundPosition: '0%',
                backgroundSize: '30px'
              }"
            >
              <img
                :src="LogoBlack"
                class="mx-auto h-auto w-full max-w-[200px]"
              />
            </div>
            <div class="mt-2 text-center">
              <a
                href="https://drive.google.com/uc?id=14BCGOt6VYUw2eLjPjfXL9hh_44wYumHc&export=download"
                target="_blank"
                rel="noopener noreferrer"
                class="text-lg font-semibold text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white"
              >
                .SVG
              </a>
              <a
                href="https://drive.google.com/uc?id=11S1Q0kbODKnhFzzd7mm93GWj_p-pGiHC&export=download"
                target="_blank"
                rel="noopener noreferrer"
                class="text-lg font-semibold text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white"
              >
                .PNG
              </a>
            </div>
          </div>
          <div class="w-full">
            <div
              class="rounded-xl p-6 shadow-md md:p-12"
              :style="{
                backgroundImage: `url(/images/branding/bg-transparent.png)`,
                backgroundPosition: '0%',
                backgroundSize: '30px'
              }"
            >
              <img
                :src="LogoWhite"
                class="mx-auto h-auto w-full max-w-[200px]"
              />
            </div>
            <div class="mt-2 text-center">
              <a
                href="https://drive.google.com/uc?id=1pVWEbbL3UQPtBEIXfg1MQ-OkHrEr4sRI&export=download"
                target="_blank"
                rel="noopener noreferrer"
                class="text-lg font-semibold text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white"
              >
                .SVG
              </a>
              <a
                href="https://drive.google.com/uc?id=16rfOya_fuuR8c3QTvY-PFHkaS2JeJ1zi&export=download"
                target="_blank"
                rel="noopener noreferrer"
                class="text-lg font-semibold text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white"
              >
                .PNG
              </a>
            </div>
          </div>
        </div>
        <h1 class="my-4 mt-12 text-3xl font-bold">Colors</h1>

        <div class="grid gap-4 pb-24 md:grid-cols-3">
          <div
            v-for="color in colors"
            :key="color.name"
            class="relative z-10 h-36 w-full rounded-xl p-4 shadow-md"
            :style="{
              background: color.hex
            }"
          >
            <button
              @click="copy(color.hex)"
              class="absolute right-0 top-0 m-2 select-none transition-colors"
              :class="{
                'text-gray-300 hover:text-white': !color.bright,
                'text-gray-600 hover:text-black': color.bright
              }"
            >
              <IconsClipboard class="h-6 w-6" />
            </button>
            <h2
              :class="`text-3xl font-bold ${
                color.bright ? 'text-black' : 'text-white'
              }`"
            >
              {{ color.name }}
            </h2>
            <p
              :class="`mt-8 text-lg font-semibold leading-4 ${
                color.bright ? 'text-gray-400' : 'text-gray-300'
              }
              `"
            >
              {{ color.hex }}
            </p>
            <p
              :class="`text-lg font-semibold ${
                color.bright ? 'text-gray-400' : 'text-gray-300'
              }
              `"
              @click="copy(`rgb(${color.rgb})`)"
            >
              rgb({{ color.rgb }})
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
