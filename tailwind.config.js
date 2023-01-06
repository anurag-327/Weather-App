/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ["./*.{html,js,css}", "./**/*.{html,js,css}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
