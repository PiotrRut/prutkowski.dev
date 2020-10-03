const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: colors.teal
      }
    }
  }
};
