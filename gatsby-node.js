const path = require("path")
const { default: slugify } = require("slugify")
const dayjs = require("dayjs")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~components": path.resolve(__dirname, "./src/components"),
        "~image": path.resolve(__dirname, "./src/assets/image"),
        "~assets": path.resolve(__dirname, "./src/assets"),
        "~sections": path.resolve(__dirname, "./src/sections"),
        "~data": path.resolve(__dirname, "./src/data"),
        "~styled": path.resolve(__dirname, "./src/styles"),
      },
    },
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query {
          allMarkdownRemark(
            filter: { fields: { slug: { glob: "/services/*" } } }
          ) {
            nodes {
              frontmatter {
                serviceHeader {
                  title
                  subtitle
                  color
                  logo
                }
                serviceIntro {
                  title
                  subtitle
                  image
                }
                serviceFeatures {
                  title
                  desc
                  logo
                }
                serviceCTA {
                  title
                  desc
                }
              }
              fields {
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          return reject(result.errors)
        }

        const servicesTemplate = path.resolve("./src/detailPages/service.js")

        result.data.allMarkdownRemark.nodes?.forEach(page => {
          const slug = page.fields?.slug
          createPage({
            path: `${slug}`,
            component: servicesTemplate,
            context: {
              slug: `${slug}`,
              content: page.frontmatter,
            },
          })
        })

        return
      })
    )
  })
}
