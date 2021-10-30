module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FF2121",
        secondary: "#050505"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
