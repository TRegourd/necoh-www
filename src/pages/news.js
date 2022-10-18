import { graphql } from "gatsby"
import React from "react"
import { PageWrapper } from "~components/Core"
import BlogRegular from "~sections/events/BlogRegular"
import BreadCrumbSection from "~sections/shared/BreadCrumb"
import Footer from "~sections/shared/Footer"
import { NecohHeader } from "../libs/NecohHeader"

export default function feed({ data }) {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BreadCrumbSection content={data.newsHeader?.frontmatter} />
      <BlogRegular
        feed={data.facebookFeed?.nodes}
        content={data.newsHeader?.frontmatter}
      />
      <Footer />
    </PageWrapper>
  )
}

export const query = graphql`
  query {
    facebookFeed: allFacebookFeed(
      limit: 10
      sort: { fields: isoDate, order: DESC }
    ) {
      nodes {
        content
        contentSnippet
        creator
        dc_creator
        guid
        id
        isoDate
        link
        pubDate
        title
      }
    }
    newsHeader: markdownRemark(fields: { slug: { eq: "/news" } }) {
      frontmatter {
        title
        subtitle
      }
    }
  }
`
