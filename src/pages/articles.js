import React from "react"
import BlogSidebarOne from "~sections/articles/BlogSidebarOne"
import BreadCrumbSection from "~sections/shared/BreadCrumb"
import { PageWrapper } from "~components/Core"
import Footer from "~sections/shared/Footer"
import { NecohHeader } from "../libs/NecohHeader"
import { graphql } from "gatsby"

export default function articles({ data }) {
  if (data)
    return (
      <PageWrapper headerConfig={NecohHeader}>
        <BreadCrumbSection content={data.articlesHeader?.frontmatter} />
        <BlogSidebarOne articles={data.weblexFeed?.nodes} />
        <Footer />
      </PageWrapper>
    )
  else
    return (
      <PageWrapper headerConfig={NecohHeader}>
        <BreadCrumbSection
          content={{
            title: "Articles",
            subtitle: "Les actualités de la profession",
          }}
        />
        <BlogSidebarOne articles={[]} images={[]} />
        <Footer />
      </PageWrapper>
    )
}

export const query = graphql`
  query {
    weblexFeed: allWeblexPost(
      limit: 300
      sort: { fields: isoDate, order: DESC }
    ) {
      nodes {
        localImage {
          childImageSharp {
            gatsbyImageData
          }
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
    articlesHeader: markdownRemark(fields: { slug: { eq: "/articles" } }) {
      frontmatter {
        title
        subtitle
      }
    }
  }
`
