/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.vue',
    './pages/*.{vue,js}',
    './components/*.{vue,js}',
    './layouts/*.{vue,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
