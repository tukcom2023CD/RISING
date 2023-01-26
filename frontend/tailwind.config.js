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
        'custom-bounce': {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            // 'animation-timing-function': cubic - bezier(0.8, 0, 1, 1),
          },
          '50%': {
            transform: 'translateY(0)',
            // 'animation-timing-function': cubic - bezier(0, 0, 0.2, 1),
          },
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
        'move-right': 'move-right 3s linear forwards infinite',
        'move-left': 'move-left 3s linear forwards infinite',
        'custom-bounce': 'bounce 1s infinite',
        typingCursor: 'typingCursor 1s ease-in-out 0ms infinite',
      },
    },
  },
  variants: {},
  plugins: [require('tailwind-scrollbar')],
};
