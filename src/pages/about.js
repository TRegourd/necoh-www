import React from "react"
import { PageWrapper } from "~components/Core"
import BreadCrumbSection from "~sections/about/BreadCrumb"
import AboutSection from "~sections/about/about"
import FeatureSection from "~sections/about/Feature"
import ContentSection from "~sections/about/Content"
import TeamSection from "~sections/about/Team"
import { NecohHeader } from "."
import Footer from "~sections/shared/Footer"
import { graphql } from "gatsby"

export default function About({ data }) {
  console.log(data)
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BreadCrumbSection content={data.about.frontmatter?.aboutHeader} />
      <AboutSection />
      <FeatureSection />
      <ContentSection />
      <TeamSection />
      <Footer />
    </PageWrapper>
  )
}

export const query = graphql`
  query {
    about: markdownRemark(fields: { slug: { eq: "/about" } }) {
      frontmatter {
        aboutHeader {
          title
          subtitle
        }
      }
    }
  }
`
