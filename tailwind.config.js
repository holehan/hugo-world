/* Default config see https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js */

module.exports = {
  purge: {
    content: [
      "content/**/*.md",
      "src/**/*.svelte",
      "layouts/**/*.html",
      "themes/hugo-world/assets/images/**/*.svg",
      "themes/hugo-world/layouts/**/*.html",
      "config/_default/**/*.toml",
    ],

    // These options are passed through directly to PurgeCSS
    options: {
      fontFace: false,
      whitelist: [],
      // whitelistPatterns: [/^language-[A-z0-9-]+$/, /^MatomoOptout[A-z0-9-.]*$/],
      whitelistPatterns: [],
    },
  },
};
