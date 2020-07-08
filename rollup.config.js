import postcss from "rollup-plugin-postcss";

const PRODUCTION = process.env.NODE_ENV === "production";
const DEVELOPMENT = process.env.NODE_ENV === "development";

export default [
  {
    input: "src/css/main.css",
    output: {
      format: "iife",
      name: "app",
      file: "assets/css/main.css",
    },
    watch: {
      clearScreen: false,
    },
    plugins: [
      postcss({
        extract: true,
        config: true,
        sourceMap: DEVELOPMENT ? "inline" : false,
      }),
    ],
  },
];
