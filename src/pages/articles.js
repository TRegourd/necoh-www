import React from "react"
import BlogSidebarOne from "~sections/articles/BlogSidebarOne"
import { PageWrapper } from "~components/Core"
import Footer from "~sections/shared/Footer"
import { NecohHeader } from "../libs/NecohHeader"
import { graphql } from "gatsby"

export default function articles({ data }) {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BlogSidebarOne articles={data.weblexFeed?.nodes} />
      <Footer />
    </PageWrapper>
  )
}

export const query = graphql`
  query {
    weblexFeed: allWeblexPost(
      limit: 10
      sort: { fields: isoDate, order: DESC }
    ) {
      nodes {
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
`
