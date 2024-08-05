<script setup>
import { useClipboard } from '@vueuse/core'
const { copy } = useClipboard()
const accounts = [
  {
    name: 'Enpara',
    image: 'enpara',
    iban: 'TR74 0011 1000 0000 0109 8322 76'
  },
  {
    name: 'Türkiye İş Bankası',
    image: 'isbankasi',
    iban: 'TR48 0006 4000 0013 7020 1590 95'
  },
  {
    name: 'Ziraat Bankası',
    image: 'ziraat',
    iban: 'TR47 0001 0090 1021 9047 9050 01'
  },
  {
    name: 'Garanti BBVA',
    image: 'garanti',
    iban: 'TR55 0006 2001 2200 0006 8670 51'
  },
  {
    name: 'Yapı Kredi',
    image: 'yapikredi',
    iban: 'TR82 0006 7010 0000 0057 7169 20'
  },
  {
    name: 'Papara',
    image: 'papara',
    iban: '1099628972'
  }
]

const copied = ref([])

const copyAccount = (account) => {
  copy(account.iban)
  copied.value.push(account.image)
  setTimeout(() => {
    copied.value.splice(copied.value.indexOf(account.image), 1)
  }, 2000)
}

const title = 'Bank Accounts'
const description = 'Bank accounts for easy to copy details.'
useSeoMeta({
  titleTemplate: '%s - Emir Kabal',
  title,
  ogTitle: title,
  ogUrl: 'https://emirkabal.com/bank-accounts',
  twitterTitle: title,
  description,
  ogDescription: description,
  twitterDescription: description
})
</script>

<template>
  <main class="mt-8">
    <ClientOnly>
      <h1 class="mb-4 text-2xl font-bold sm:text-3xl">Bank Accounts</h1>
      <ul class="space-y-2">
        <li
          v-for="account in accounts"
          :key="account.image"
          class="inline-block w-full cursor-pointer rounded border border-gray-300 bg-gray-50/40 px-4 py-2 text-gray-600 transition-colors hover:border-gray-400 hover:text-black dark:border-neutral-800 dark:bg-neutral-800/40 dark:text-gray-300 dark:hover:border-neutral-700 dark:hover:text-white"
          @click="copyAccount(account)"
        >
          <div class="flex items-center gap-4">
            <img
              :src="`/images/bank/${account.image}.jpg`"
              :alt="account.name"
              loading="lazy"
              class="h-10 w-10 rounded-lg border dark:border-transparent"
            />
            <div>
              <h3 class="font-semibold">
                {{ account.name }}
              </h3>
              <p class="-mt-0.5 text-sm">
                <span
                  v-if="copied.includes(account.image)"
                  class="text-green-500"
                >
                  Copied!
                </span>
                <span v-else class="text-gray-600 dark:text-gray-300">
                  Click here to copy
                </span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </ClientOnly>
  </main>
</template>
