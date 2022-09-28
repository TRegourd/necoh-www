import React from "react"
import ContactSection from "~sections/contact/ContactOne/ContactSection"
import { PageWrapper } from "~components/Core"
import { NecohHeader } from "."
import Footer from "~sections/shared/Footer"
import { graphql } from "gatsby"

export default function contactOne({ data }) {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <ContactSection />
      <Footer contactDetails={data.contactDetails?.frontmatter} />
    </PageWrapper>
  )
}

export const query = graphql`
  query {
    contactDetails: markdownRemark(
      fields: { slug: { eq: "/contactDetails" } }
    ) {
      frontmatter {
        email
        phone
        addressLine1
        addressLine2
        twitter
        facebook
        instagram
        linkedin
      }
    }
  }
`
