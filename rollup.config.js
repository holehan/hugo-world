import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "src/styles/main.css",
    output: {
      format: "iife",
      name: "app",
      file: "assets/css/main.css"
    },
    watch: {
      clearScreen: false
    },
    plugins: [
      postcss({
        extract: true,
        config: true,
        sourceMap: "inline"
      })
    ]
  }
];
