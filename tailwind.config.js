/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          20: '#322E2E',
        },
        orange: {
          20: '#F8895B',
        },
        darkGray: '#15141B',
      },
    },
  },
  plugins: [],
}
