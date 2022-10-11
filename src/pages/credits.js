import React from "react"
import Footer from "~sections/shared/Footer"
import { PageWrapper } from "~components/Core"
import CreditsSection from "~sections/utility/Credits"
import { NecohHeader } from "../libs/NecohHeader"
import { graphql } from "gatsby"

export default function Credits({ data }) {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <CreditsSection content={data.credits?.frontmatter} />
      <Footer />
    </PageWrapper>
  )
}

export const query = graphql`
  query {
    credits: markdownRemark(fields: { slug: { eq: "/credits" } }) {
      frontmatter {
        title
        text
      }
    }
  }
`
