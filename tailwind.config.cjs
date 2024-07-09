const {colors} = require('./src/lib/settings.js');

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
    colors: {
      gray: {
        100: "#EDEDED",
        200: "#E0E0E0",
        300: "#C7C7C7",
        400: "#ADADAD",
        500: "#949494",
      },
      primary: colors.primary,
      secondary: colors.secondary,
      white: "#ffffff",
    },
    fontFamily: {
      outfit: [""],
    },
  },

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: colors.primary,

          secondary: colors.secondary,

          accent: "#37CDBE",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#68ABC8",

          success: "#5C8777",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
};

module.exports = config;
