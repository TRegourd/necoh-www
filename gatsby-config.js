const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: `Necoh`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `image`),
        // `${__dirname}/src/assets/image`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-background-image`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-slug`,
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-netlify-cms",
    },
    {
      resolve: "gatsby-plugin-zopfli",
      options: {
        extensions: ["css", "html", "js", "svg"],
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "WeblexPost",
        imagePath: "image",
      },
    },
  ],
}
