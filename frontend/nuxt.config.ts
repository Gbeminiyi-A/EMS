// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  imports: {
    autoImport: true,
    dirs: ["stores"],
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@pinia/nuxt"],
  css: ["@/assets/main.css"],
  plugins: ['@/plugins/loading.ts']
});
