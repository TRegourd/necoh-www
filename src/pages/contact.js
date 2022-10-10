import React from "react"
import ContactSection from "~sections/contact/ContactOne/ContactSection"
import { PageWrapper } from "~components/Core"
import { NecohHeader } from "../libs/NecohHeader"
import Footer from "~sections/shared/Footer"
import { graphql } from "gatsby"

export default function contactOne({ data }) {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <ContactSection
        contactForm={data.contactForm?.frontmatter}
        contactDetails={data.contactDetails?.frontmatter}
      />
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
        title
        text
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
    contactForm: markdownRemark(fields: { slug: { eq: "/contactForm" } }) {
      frontmatter {
        title
        subtitle
        text
      }
    }
  }
`
