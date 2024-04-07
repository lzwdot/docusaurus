/**
 * @param {import('@docusaurus/types').LoadContext} context
 * @returns {import('@docusaurus/types').Plugin}
 */
export default async function Index(context) {
  return {
    name: "tailwind-plugin",
    configurePostCss(postcssOptions) {
      // Appends TailwindCSS and AutoPrefixer.
      postcssOptions.plugins.push(
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
      )
      return postcssOptions
    },
  };
}
