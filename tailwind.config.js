/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      }
    },
  },
  plugins: [],
}

