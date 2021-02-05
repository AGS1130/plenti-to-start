const mode = process.env.NODE_ENV;
const isProduction = mode === "production";

module.exports = {
  purge: {
    enabled: isProduction,
    content: ["./layout/**/*.svelte"],
  },
  variants: {},
  theme: {
    extend: {},
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
