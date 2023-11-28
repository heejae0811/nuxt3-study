export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt3-todo/',
    buildAssetsDir: 'assets'
  },
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
  ],
  css: ['@/assets/scss/main.scss'],
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  ssr: false
})