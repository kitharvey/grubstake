const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      backdropFilter: { // defaults to {}
        'none': 'none',
        'blur': 'blur(30px)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        green: colors.emerald,
        grayGlass: {
          DEFAULT: '#464e5660'
        }
      },
      extend: {
        keyframes: {
          ticker: {
            '0%': { transform: 'translate3d(0, 0, 0)' },
            '100%': { transform: 'translate3d(-100%, 0, 0)' },
          }
         },
         animation: {
          ticker: 'ticker 90s linear infinite',
         }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('tailwindcss-filters'),
    ],
  }