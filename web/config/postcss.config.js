const path = require('path')

const { config } = require('reshaped/config/postcss')

module.exports = {
  ...config,
  plugins: [
    require('tailwindcss')(path.resolve(__dirname, 'tailwind.config.js')),
    require('autoprefixer'),
  ],
}
