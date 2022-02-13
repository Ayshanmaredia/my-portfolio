module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "theme-primary": "#616bf1"
      },
      animation: {
        fade: 'fadeOut 3s ease-in-out 2s',
      },

      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      }),
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}