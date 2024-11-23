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
      animation: {
        'fall': 'fall 20s linear infinite',
        'spin-slow': 'spin 6s linear infinite',
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: 0 }, // -10vh에서 -100vh로 변경
          '10%': { opacity: 1 },
          '90%': { opacity: 1 },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: 0 }
        }
      }
    },
  },
  plugins: [],
}