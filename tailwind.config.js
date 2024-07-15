/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // 'tablet': { 'max': '1024px' },
      'tablet': { 'max': '767px' },
      'bmt': { 'max': '479px' },
      'btl': { 'max': '991px' }
    },
    extend: {},
  },
  plugins: [],
}