module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "theme-primary": "#616bf1",
        "asphalt": '#34495e'
      },
      fontFamily: {
        'Montserrat': ['"Montserrat"', 'sans-serif'],
        'sans': ['"Roboto"', 'sans-serif']
      },
      animation: {
        fade: 'fadeOut 4s ease-in-out 1s',
      },

      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      }),
    },
  },
}