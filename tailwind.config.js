module.exports = {
  content: ['./components/**/*.{html,js}',
  './pages/**/*.{html,js}',
  './index.html',],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
