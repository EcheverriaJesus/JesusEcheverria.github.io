module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        LilitaOne: ["Lilita One", "cursive"]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}