import VueLanyard from '@eggsydev/vue-lanyard'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueLanyard)
})
