// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  plugins: ['~/plugins/moment.ts'],
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
        exposeConfig: true
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

  runtimeConfig: {
    public: {
      GOOGLE_ANALYTICS_ID: 'G-LCWP73RVML',
      BASE_CDN_URL: 'https://res.cloudinary.com/dxil99qx3/image/upload/'
    }
  }
})
