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
      <h1 class="mb-4 text-3xl font-bold">Bank Accounts</h1>
      <ul class="space-y-2">
        <li
          v-for="account in accounts"
          :key="account.image"
          class="cursor-pointer rounded border border-gray-300 px-4 py-2 transition-colors hover:border-gray-600 dark:border-gray-600 dark:hover:border-white"
          @click="copyAccount(account)"
        >
          <div class="flex items-center gap-4">
            <img
              :src="`/images/bank/${account.image}.jpg`"
              :alt="account.name"
              loading="lazy"
              class="h-10 w-10 rounded-lg"
            />
            <div class="flex flex-col">
              <span class="text-lg font-semibold leading-6">{{
                account.name
              }}</span>
              <span
                v-if="copied.includes(account.image)"
                class="text-sm text-green-400"
                >Copied!</span
              >
              <span v-else class="text-sm text-gray-600 dark:text-gray-300"
                >Click here to copy</span
              >
            </div>
          </div>
        </li>
      </ul>
    </ClientOnly>
  </main>
</template>

<style>
.transition-enter-active {
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
}

.transition-enter-from,
.transition-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.transition-enter-to,
.transition-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
