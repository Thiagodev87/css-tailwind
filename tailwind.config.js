/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            amarelo: '#E6C744',
            cinza:'#c2c8da'
          },
          screens:{
            '3x1':"1920px"
          }
      },
    },
    plugins: [],
  }