// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  imports: {
    autoImport: true,
    dirs: ["stores"],
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@pinia/nuxt", "shadcn-nuxt"],
  css: ["@/assets/css/tailwind.css"],
  plugins: ["@/plugins/loading.ts"],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});
