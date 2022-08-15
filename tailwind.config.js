/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-pattern': "url('/assets/background-pattern.svg')",
        
      },
      colors: {
        'custom-yellow': '#F1EB5E',
        'custom-darkblue': '#375B6D',
        'custom-gray': '#7F989F'
      }
    }, 
  },

  plugins: [],
}
