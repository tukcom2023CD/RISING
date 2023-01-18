module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        'text-color': '#54547D',
        'scroll-bar': '#9D9CD2',
      },
    },
  },
  variants: {},
  plugins: [require('tailwind-scrollbar')],
};
