import React from "react"
import { PageWrapper } from "~components/Core"
import BreadCrumbSection from "~sections/tools/BreadCrumb"
import { NecohHeader } from "."
import Footer from "~sections/shared/Footer"
import { graphql } from "gatsby"

export default function Tools({ data }) {
  console.log(data)
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BreadCrumbSection content={data.tools.frontmatter?.toolsHeader} />
      <Footer />
    </PageWrapper>
  )
}

export const query = graphql`
  query {
    tools: markdownRemark(fields: { slug: { eq: "/tools" } }) {
      frontmatter {
        toolsHeader {
          title
          subtitle
        }
      }
    }
  }
`
