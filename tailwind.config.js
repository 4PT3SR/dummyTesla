/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    fontFamily: {
      lato: ['Lato', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'bdImg': "url('./assets/BG.svg')",

      },
    },
  },
  plugins: [],
}