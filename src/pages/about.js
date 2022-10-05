import React from "react"
import { PageWrapper } from "~components/Core"
import BreadCrumbSection from "~sections/shared/BreadCrumb"
import AboutSection from "~sections/about/about"
import ContentSectionOne from "~sections/about/ContentOne"
import TeamSection from "~sections/about/Team"
import Promo from "~sections/about/Promo"
import { NecohHeader } from "."
import Footer from "~sections/shared/Footer"
import { graphql } from "gatsby"

export default function About({ data }) {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BreadCrumbSection content={data.about.frontmatter?.aboutHeader} />
      <AboutSection />
      <ContentSectionOne />
      <TeamSection
        content={data.team.frontmatter?.teamHeader}
        employees={data.team.frontmatter?.employees}
      />
      <Promo />
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
    team: markdownRemark(fields: { slug: { eq: "/team" } }) {
      frontmatter {
        teamHeader {
          title
          subtitle
        }
        employees {
          lastName
          firstName
          position
          image
          color
          links {
            contact
            link
          }
        }
      }
    }
  }
`
