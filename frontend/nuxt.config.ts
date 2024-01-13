// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    autoImport: true,
    dirs: ["stores"],
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@pinia/nuxt"],
  css: ["@/assets/main.css"],
});
