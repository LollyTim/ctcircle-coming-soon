/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 11s linear infinite',
      }
    },
  },
  plugins: [],
}

