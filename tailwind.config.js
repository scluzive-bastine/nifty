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
      transitionTimingFunction: {
        'grid-out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'cubic-out-quint': 'cubic-bezier(.175, .885, .32, 1.2)',
      },
      animation: {
        quint: 'gridScale 1s cubic-bezier(0.22, 1, 0.36, 1) infinite alternate',
      },
      keyframes: {
        gridScale: {
          '0%': {
            opacity: '0',
            transform: 'scale(.4)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      colors: {
        gray: {
          20: '#322E2E',
        },
        orange: {
          20: '#F8895B',
        },
        darkGray: '#15141B',
        grid: {
          20: '#1E1D26',
        },
      },
    },
  },
  plugins: [],
}
