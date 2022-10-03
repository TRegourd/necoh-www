import React from "react"
import { PageWrapper } from "~components/Core"
import BreadCrumbSection from "~sections/shared/BreadCrumb"
import { NecohHeader } from "."
import Footer from "~sections/shared/Footer"
import ServicesSection from "~sections/utils/Services"
import { graphql } from "gatsby"

export default function Tools({ data }) {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BreadCrumbSection content={data.tools.frontmatter?.toolsHeader} />
      <ServicesSection />
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
