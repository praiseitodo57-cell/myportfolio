export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0d2438',
        'secondary-dark': '#102d44',
        'ternary-dark': '#1e3851',
        'primary-light': '#f7f8fc',
        'secondary-light': '#ffffff',
        'ternary-light': '#f6f7f8',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '5rem',
          xl: '6rem',
          '2xl': '8rem',
        },
      },
    },
  },
  plugins: [],
}