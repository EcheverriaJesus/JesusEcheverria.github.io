module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        LilitaOne: ["Lilita One", "cursive"],
        Edu: ["IM Fell DW Pica", "serif"],
        Lora: ["Lora", "serif"]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}