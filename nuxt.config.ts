// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  devtools: { enabled: true },
  modules: [
    [
      '@nuxt/image',
      {
        domains: ['res.cloudinary.com', 'i.imgur.com'],
        formats: ['webp', 'png', 'jpg'],
        provider: 'cloudinary',
        cloudinary: {
          baseURL: 'https://res.cloudinary.com/dxil99qx3/image/upload/'
        }
      }
    ],
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
    [
      '@nuxtjs/color-mode',
      {
        classSuffix: ''
      }
    ],
    '@tresjs/nuxt'
  ],
  css: [
    '~/assets/css/main.css',
    '@fontsource/inter/400.css',
    '@fontsource/inter/500.css',
    '@fontsource/inter/600.css',
    '@fontsource/inter/700.css',
    '@fontsource/inter/800.css'
  ],
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  runtimeConfig: {
    public: {
      GOOGLE_ANALYTICS_ID: 'G-LCWP73RVML'
    }
  }
})
