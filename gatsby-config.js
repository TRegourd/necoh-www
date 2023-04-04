const path = require(`path`)

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    url: "https://wwww.necoh.fr",
    siteUrl: "https://wwww.necoh.fr",
    title: "Necoh",
    description:
      "Votre partenaire Expertise Comptable, Juridique, Audit, Fiscalité, Conseil, Paie & RH.",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipMVGRubz68z4eyEG3RrwLumL_9H7DrTmPYCbvrB=s1360-w1360-h1020",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        sitemap: "https://www.necoh.fr/sitemap/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
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
    // {
    //   resolve: "gatsby-plugin-zopfli",
    //   options: {
    //     extensions: ["css", "html", "js", "svg"],
    //   },
    // },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "WeblexPost",
        imagePath: "image",
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "FacebookFeed",
        imagePath: "image",
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "G-VR6P0W0ETP",
          cookieName: "gatsby-gdpr-google-analytics",
          anonymize: true,
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production"],
      },
    },
  ],
}
