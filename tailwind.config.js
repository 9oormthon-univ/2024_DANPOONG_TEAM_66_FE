/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        kreon: ['"Kreon"', 'serif'], // Kreon 폰트 추가
      },
      colors: {
        'theme-red': '#D57272',
        'theme-orange': '#FFBB5D',
        'theme-yellow': '#F5F76F',
        'theme-green': '#92C98E',
      },
    },
  },
  plugins: [],
}