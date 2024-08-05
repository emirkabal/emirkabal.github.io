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
const description = 'Logo, colors and more.'
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
      <smart-logo></smart-logo>
      <div class="relative">
        <h1 class="my-4 text-2xl font-bold sm:text-3xl">Logo</h1>
        <div class="flex gap-2">
          <div class="w-full">
            <div
              class="rounded-xl border p-6 dark:border-transparent sm:p-12"
              :style="{
                backgroundImage: `url(/images/branding/bg-transparent-w.png)`,
                backgroundPosition: '0%',
                backgroundSize: '30px'
              }"
            >
              <img
                :src="LogoBlack"
                class="mx-auto h-auto w-full max-w-[170px]"
              />
            </div>
            <div class="mt-2 text-center">
              <a
                href="https://drive.google.com/uc?id=14BCGOt6VYUw2eLjPjfXL9hh_44wYumHc&export=download"
                target="_blank"
                rel="noopener noreferrer"
                class="font-semibold text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white sm:text-lg"
              >
                .SVG
              </a>
              <a
                href="https://drive.google.com/uc?id=11S1Q0kbODKnhFzzd7mm93GWj_p-pGiHC&export=download"
                target="_blank"
                rel="noopener noreferrer"
                class="font-semibold text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white sm:text-lg"
              >
                .PNG
              </a>
            </div>
          </div>
          <div class="w-full">
            <div
              class="rounded-xl border p-6 dark:border-transparent sm:p-12"
              :style="{
                backgroundImage: `url(/images/branding/bg-transparent.png)`,
                backgroundPosition: '0%',
                backgroundSize: '30px'
              }"
            >
              <img
                :src="LogoWhite"
                class="mx-auto h-auto w-full max-w-[170px]"
              />
            </div>
            <div class="mt-2 text-center">
              <a
                href="https://drive.google.com/uc?id=1pVWEbbL3UQPtBEIXfg1MQ-OkHrEr4sRI&export=download"
                target="_blank"
                rel="noopener noreferrer"
                class="font-semibold text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white sm:text-lg"
              >
                .SVG
              </a>
              <a
                href="https://drive.google.com/uc?id=16rfOya_fuuR8c3QTvY-PFHkaS2JeJ1zi&export=download"
                target="_blank"
                rel="noopener noreferrer"
                class="font-semibold text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white sm:text-lg"
              >
                .PNG
              </a>
            </div>
          </div>
        </div>
        <h1 class="my-4 mt-12 text-2xl font-bold sm:text-3xl">Colors</h1>

        <div class="grid gap-4 pb-24 md:grid-cols-3">
          <div
            v-for="color in colors"
            :key="color.name"
            class="relative z-10 h-36 w-full rounded-xl border p-4 dark:border-transparent"
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
              :class="`text-2xl font-bold sm:text-3xl ${
                color.bright ? 'text-black' : 'text-white'
              }`"
            >
              {{ color.name }}
            </h2>
            <p
              :class="`mt-8 font-semibold leading-4 sm:mt-6 sm:text-lg ${
                color.bright ? 'text-gray-400' : 'text-gray-300'
              } `"
            >
              {{ color.hex }}
            </p>
            <p
              :class="`font-semibold sm:text-lg ${
                color.bright ? 'text-gray-400' : 'text-gray-300'
              } `"
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
