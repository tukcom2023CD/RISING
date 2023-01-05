module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {},
      colors: { 'text-color': '#54547D' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
