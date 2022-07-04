/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "r0o.dev - Portfolio Site",
    titleTemplate: "%s · The Real Hero",
    description: "Portfolio site showing the work of r0o_dev",
    url: "https://www.r0o.dev", // No trailing slash allowed!
    image: "/site-image.jpg", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@r0o_dev",
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        cropFocus: "north",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: "/assets/", // See below to configure properly
        },
      },
    },
  ],
}
