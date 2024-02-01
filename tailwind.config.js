/** @type {import('tailwindcss').Config} */
// 
module.exports = {
  purge: [],
  content: ["*.html"],
  darkMode: false, // или 'media' или 'class'
  theme: {
    extend: {
      scale: {
        'hover-110': '1.1',
      },
    },
  },
  variants: {
    extend: {
      scale: ['hover'], // включить масштабирование при наведении
    },
  },
  plugins: [],
}