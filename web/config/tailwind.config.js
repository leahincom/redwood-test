const { getTheme } = require('reshaped/config/tailwind')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      ...getTheme(),
      fontFamily: {
        sans: [
          'GT Walsheim Regular',
          'Pretendard',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
}
