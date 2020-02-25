// Since this is the theme, so get default options firstly
const withDefaults = require('./utils/default-options');

// not return object, but tailor it based on options
module.exports = options => {
  const { contentPath, useExternalMDX } = withDefaults(options);

  return {
    plugins: [
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          // to avoid name confiction
          name: 'gatsby-theme-docs',
          path: contentPath,
        },
      },
      !useExternalMDX && {
        resolve: 'gatsby-plugin-mdx',
        options: {
          defaultLayouts: {
            default: require.resolve('./src/components/layout.js'),
          },
        },
      },
    ].filter(Boolean), // since useExternalMDX maybe true, so use filter to get rid of this Boolean value
  };
};
