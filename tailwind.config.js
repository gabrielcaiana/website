/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        neutral: {
          lightest: "#F3F4F6",
          light: '#383838',
          DEFAULT: '#9CA3AF',
          darkest: '#222222',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
