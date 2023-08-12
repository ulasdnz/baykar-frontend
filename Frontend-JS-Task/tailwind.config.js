/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px', 
      'md': '960px',
      'lg': '1440px',
      'xl': '1920px',
    },
    extend: {},
  },
  plugins: [],
}