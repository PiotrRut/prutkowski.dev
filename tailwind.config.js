const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: colors.teal,
      },
    },
  },
};
