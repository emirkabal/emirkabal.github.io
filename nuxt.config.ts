// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@tresjs/nuxt'],
  css: [
    '~/assets/css/main.css',
    '@fontsource/inter/400.css',
    '@fontsource/inter/500.css',
    '@fontsource/inter/600.css',
    '@fontsource/inter/700.css'
  ],
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in'
    }
  },

  tailwindcss: { viewer: false, exposeConfig: true, injectPosition: 'last' },
  content: {
    markdown: {
      anchorLinks: false
    }
  }
})
