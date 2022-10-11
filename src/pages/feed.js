import { graphql } from "gatsby"
import React from "react"
import { PageWrapper } from "~components/Core"
import BlogRegular from "~sections/events/BlogRegular"
import Footer from "~sections/shared/Footer"
import { NecohHeader } from "../libs/NecohHeader"

export default function feed({ data }) {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BlogRegular feed={data.facebookFeed?.nodes} />
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
  }
`
