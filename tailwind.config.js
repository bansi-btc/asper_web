/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        scaling: 'scaling 2s linear infinite',
      },
      keyframes:{
        scaling:{
          '0%':{transform : 'scale(1)'},
          '50%':{transform: 'scale(1.03)'},
          '100%':{transform: 'scale(1)'}

        }
      }
    },
  },
  plugins: [],
}