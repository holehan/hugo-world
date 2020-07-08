const DEVELOPMENT = process.env.NODE_ENV === "development";

module.exports = {
  map: { inline: true },
  syntax: "postcss-scss",
  parser: "postcss-scss",
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    "postcss-nested": {},
    "postcss-preset-env": {
      stage: 1,
    },
  },
  autoprefixer: {
    // grid: 'autoplace'
  },
  cssnano: DEVELOPMENT ? false : { preset: "default" },
};
