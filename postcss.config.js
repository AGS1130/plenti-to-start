const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const tailwindCSS = require("tailwindcss");

const mode = process.env.NODE_ENV;
const isProduction = mode === "production";

module.exports = {
  plugins: [
    autoprefixer,
    tailwindCSS(),
    isProduction &&
      cssnano({
        preset: ["default", { discardComments: { removeAll: true } }],
      }),
  ].filter(Boolean),
};
