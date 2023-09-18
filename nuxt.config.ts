// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  devtools: { enabled: true },
  modules: [
    [
      '@nuxt/content',
      {
        markdown: {
          anchorLinks: false
        },
        highlight: {
          theme: 'github-dark',
          preload: ['diff', 'ts', 'js', 'css', 'json', 'bash', 'vue', 'html']
        }
      }
    ],
    [
      '@nuxtjs/tailwindcss',
      {
        viewer: false,
        exposeConfig: true,
        injectPosition: 'last'
      }
    ],
    '@tresjs/nuxt'
  ],
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
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }

  // vue: {
  //   compilerOptions: {
  //     isCustomElement: (tag) => tag.startsWith('Tres')
  //   }
  // }
})
