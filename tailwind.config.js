/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ["./*.{html,js,css}", "./**/*.{html,js,css}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    screens: {
      'sm': {'min': '0px', 'max': '700px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '701px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1500px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1500px', 'max': '2000px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
