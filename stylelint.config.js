module.exports = {
  plugins: ["stylelint-scss", "stylelint-prettier"],
  extends: [
    "stylelint-config-idiomatic-order",
    "stylelint-config-standard",
    "stylelint-config-prettier",
  ],
  rules: {
    "prettier/prettier": true,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "apply",
          "responsive",
          "screen",
          "tailwind",
          "variants",
        ],
      },
    ],
  },
};
