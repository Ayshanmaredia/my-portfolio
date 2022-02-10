module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "theme-primary": "#616bf1"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}