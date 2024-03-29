/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: ["checked"],
    },
    colors: {
      "blue-primary": "#34374C",
      "blue-secondary": "#2C2E3E",
      "red-primary": "#EE2B47",
      "red-secondary": "#D91E3D",
      "white-primary": "#F5EDED",
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
