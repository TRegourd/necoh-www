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
          servicesQuery: allMarkdownRemark(
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
          customersQuery: allMarkdownRemark(
            filter: { fields: { slug: { glob: "/customers/*" } } }
          ) {
            nodes {
              frontmatter {
                customerHeader {
                  title
                  subtitle
                }
                customerIntro {
                  title
                  subtitle
                  image
                  text
                }
                customerFeatures {
                  title
                  subtitle
                  features {
                    title
                    desc
                    subtitle
                  }
                }
                customerCTA {
                  title
                  desc
                }
              }
              fields {
                slug
              }
            }
          }
          jobsQuery: markdownRemark(fields: { slug: { eq: "/jobs" } }) {
            frontmatter {
              jobs {
                date
                title
                location
                desc
                type
                link
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

        result.data.servicesQuery.nodes?.forEach(page => {
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

        const customersTemplate = path.resolve("./src/detailPages/customer.js")

        result.data.customersQuery.nodes?.forEach(page => {
          const slug = page.fields?.slug
          createPage({
            path: `${slug}`,
            component: customersTemplate,
            context: {
              slug: `${slug}`,
              content: page.frontmatter,
            },
          })
        })

        const jobTemplate = path.resolve("./src/detailPages/career-details.js")

        result.data.jobsQuery.frontmatter.jobs?.forEach(job => {
          const slug = slugify(job.title + dayjs(job.date).format("DDMMYYYY"))
          createPage({
            path: `/careers/${slug}`,
            component: jobTemplate,
            context: {
              slug: `/careers/${slug}`,
              content: job,
            },
          })
        })

        return
      })
    )
  })
}
