const path = require("path")
const { default: slugify } = require("slugify")
const dayjs = require("dayjs")
let Parser = require("rss-parser")
const { createRemoteFileNode } = require("gatsby-source-filesystem")

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

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,

  getNodesByType,
  store,
  node,
  getCache,
}) => {
  const { createNode, createNodeField } = actions

  const WEBLEX_POST_NODE_TYPE = `WeblexPost`
  const WEBLEX_IMG_NODE_TYPE = `WeblexImg`
  const FACEBOOK_FEED_NODE_TYPE = `FacebookFeed`

  let parser = new Parser()

  const weblexData = await parser.parseURL(
    "https://www.weblex.fr/passerelle/621-37b1/772740a565/flux.rss"
  )

  const facebookData = await parser.parseURL(
    "https://rss.app/feeds/CxNqKVxRZ49DMwnH.xml"
  )

  weblexData.items.slice(0, 300).forEach((post, i) =>
    createNode({
      ...post,
      id: createNodeId(
        `${WEBLEX_POST_NODE_TYPE}-${Math.random()}-${Math.random()}`
      ),
      parent: null,
      children: [],
      internal: {
        type: WEBLEX_POST_NODE_TYPE,
        contentDigest: createContentDigest(post),
      },
    })
  )

  facebookData.items.forEach((post, i) =>
    createNode({
      ...post,
      id: createNodeId(
        `${FACEBOOK_FEED_NODE_TYPE}-${Math.random()}-${Math.random()}`
      ),
      parent: null,
      children: [],
      internal: {
        type: FACEBOOK_FEED_NODE_TYPE,
        contentDigest: createContentDigest(post),
      },
    })
  )

  const processWeblexImg = async post => {
    let fileNode
    try {
      fileNode = await createRemoteFileNode({
        url: post.enclosure.url?.replace(/%[0-9A-Fa-f][0-9A-Fa-f]/g, "/"),
        store,
        getCache,
        createNode,
        createNodeId,
      })
    } catch (error) {
      console.warn("error creating node", error)
    }
  }

  weblexData.items.slice(0, 300).forEach(post => {
    const nodeData = processWeblexImg(post)
    createNode(nodeData)
  })

  return
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
                  subtitle
                  features {
                    title
                    desc
                    logo
                  }
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
          weblexQuery: allWeblexPost(
            limit: 300
            sort: { fields: isoDate, order: DESC }
          ) {
            nodes {
              enclosure {
                type
                url
              }
              content
              categories
              contentSnippet
              id
              isoDate
              link
              pubDate
              title
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
            path: `/emploi/${slug}`,
            component: jobTemplate,
            context: {
              slug: `/emploi/${slug}`,
              content: job,
            },
          })
        })

        const blogTemplate = path.resolve("./src/detailPages/blog-details.js")

        result.data.weblexQuery.nodes?.forEach(page => {
          const slug = slugify(page?.title)
          createPage({
            path: `articles/${slug}`,
            component: blogTemplate,
            context: {
              slug: `/articles/${slug}`,
              content: page,
            },
          })
        })

        return
      })
    )
  })
}
