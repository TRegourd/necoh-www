import React from "react"
import { PageWrapper } from "~components/Core"
import TermsConditionSection from "~sections/utility/TermsCondition"
import Footer from "~sections/shared/Footer"
import { NecohHeader } from "../libs/NecohHeader"
import { graphql } from "gatsby"

export default function TermsAndConditions({ data }) {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <TermsConditionSection content={data.terms?.frontmatter} />
      <Footer />
    </PageWrapper>
  )
}

export const query = graphql`
  query {
    terms: markdownRemark(fields: { slug: { eq: "/terms" } }) {
      frontmatter {
        title
        text
      }
    }
  }
`
