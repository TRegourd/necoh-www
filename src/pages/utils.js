import React from "react"
import { PageWrapper } from "~components/Core"
import BreadCrumbSection from "~sections/utils/BreadCrumb"
import { NecohHeader } from "."
import Footer from "~sections/shared/Footer"
import { graphql } from "gatsby"

export default function Utils({ data }) {
  console.log(data)
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BreadCrumbSection content={data.utils.frontmatter?.utilsHeader} />
      <Footer />
    </PageWrapper>
  )
}

export const query = graphql`
  query {
    utils: markdownRemark(fields: { slug: { eq: "/utils" } }) {
      frontmatter {
        utilsHeader {
          title
          subtitle
        }
      }
    }
  }
`
