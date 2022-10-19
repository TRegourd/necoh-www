import React from "react"
import BlogDetailsSection from "~sections/BlogDetails/BlogDetails"
import { PageWrapper } from "~components/Core"

import BreadCrumbSection from "~sections/shared/BreadCrumb"

import Footer from "~sections/shared/Footer"
import { NecohHeader } from "../libs/NecohHeader"
import { graphql } from "gatsby"

export default function BlogDetails({ pageContext, data }) {
  const { content } = pageContext

  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BreadCrumbSection
        content={{ title: content?.title ? content.title : "Article" }}
      />
      <BlogDetailsSection
        content={content}
        articlesList={data.weblexFeed?.nodes}
      />
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
        id
        isoDate
        pubDate
        title
      }
    }
  }
`
