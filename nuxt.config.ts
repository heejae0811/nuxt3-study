export default defineNuxtConfig({
  app: {
    head: {
      title: 'ToDo List',
      meta: [
        { name: 'description', content: '오늘의 할 일은 무엇일까요?' }
      ]
    },
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