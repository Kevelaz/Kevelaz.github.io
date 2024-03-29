/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tilt':['"Tilt Prism"', 'sans-serif'],
        'italianno': ['"Italianno"', 'cursive'],
        'lili': ['"Lilita One"', 'sans-serif'],
        'barlow': ['"Barlow Condensed"', 'sans-serif'],
        'anta': ['"Anta"', 'sans-serif'],
      },
      colors: {
        'custom-EFT': '#8B1B00',
        'gold': '#FFD700'
      }
    },
  },
  plugins: [],
}

