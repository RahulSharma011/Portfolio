/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    screens: {
      'sm': "600px",
      'md':"850px",
      'lg': "1000px",
    },
    extend: {
      
    },
  },
  plugins: [],
}

