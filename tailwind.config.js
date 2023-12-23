module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'acme': ["Acme", "sans"],
        'roboto': ["Roboto", "sans-serif"],
        'cantora': ["Cantora One", "sans-serif"]
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 50s linear infinite',
        'infinite-scroll2': 'infinite-scroll2 50s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll2': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(100%)' },
        }
      }  
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}