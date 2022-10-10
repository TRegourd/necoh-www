import React from "react"
import { PageWrapper } from "~components/Core"
import BreadCrumbSection from "~sections/shared/BreadCrumb"
import { NecohHeader } from "../libs/NecohHeader"
import Footer from "~sections/shared/Footer"
import ServicesSection from "~sections/utils/Services"
import { graphql } from "gatsby"

export default function Utils({ data }) {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BreadCrumbSection content={data.utils.frontmatter?.utilsHeader} />
      <ServicesSection list={data.utils.frontmatter?.utilsList} />
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
        utilsList {
          name
          desc
          logo
          color
          link
        }
      }
    }
  }
`
