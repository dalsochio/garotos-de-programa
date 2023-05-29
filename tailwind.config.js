/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{css,xml,html,vue,svelte,ts,tsx}'
  ],
  // use the .ns-dark class to control dark mode (applied by NativeScript) - since 'media' (default) is not supported.
  darkMode: ['class', '.ns-dark'],
  theme: {
    extend: {},
  },
  plugins:[
    (function ({ addVariant }) {
    addVariant('android', '.ns-android &');
    addVariant('ios', '.ns-ios &');
  })
  ,],
  corePlugins: {
    preflight: false // disables browser-specific resets
  }
}
