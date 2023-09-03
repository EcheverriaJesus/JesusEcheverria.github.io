module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'acme': ["Acme", "sans"]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}