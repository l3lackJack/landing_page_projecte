module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tw-elements/dist/plugin')
  ],
}
