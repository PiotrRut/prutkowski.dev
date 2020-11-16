const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  // purge: {
  //   enabled: true,
  //   contents: ['./components/**/*.js'],
  //   options: {
  //     whitelist: [/^text-/, /mx-/],
  //   },
  // },
  theme: {
    container: {
      center: true,
    },
    colors: {
      black: colors.black,
      gray: colors.gray,
      blue: colors.blue,
      green: colors.green,
    },
  },
};
