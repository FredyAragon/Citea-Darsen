/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        citea: {
          cobalt: '#004aad',
          sky: '#9ccde1',
          mint: '#cdffd8',
        },
      },

      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-8px)',
          },
        },
      },

      animation: {
        float: 'float 4s ease-in-out infinite',
      },
    },
  },

  plugins: [],
};