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
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        'move-right': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(50px, 50px)' },
        },
        'move-left': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-50px, 50px)' },
        },
        typingCursor: {
          from: {
            borderRight: '2px solid while',
          },
          to: {
            borderRight: '2px solid black',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'move-right': 'move-right 2s linear forwards infinite',
        'move-left': 'move-left 2s linear forwards infinite',
        typingCursor: 'typingCursor 1s ease-in-out 0ms infinite',
      },
    },
  },
  variants: {},
  plugins: [require('tailwind-scrollbar')],
};
