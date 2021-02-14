module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        keyframes: {
          ticker: {
            '0%': { transform: 'translate3d(0, 0, 0)' },
            '100%': { transform: 'translate3d(-100%, 0, 0)' },
          }
         },
         animation: {
          ticker: 'ticker 60s ease-in-out infinite',
         }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }