import React from "react"
import { PageWrapper } from "~components/Core"
import BreadCrumbSection from "~sections/shared/BreadCrumb"
import AboutSection from "~sections/about/about"
import ContentSection from "~sections/about/Content"
import TeamSection from "~sections/about/Team"
import { NecohHeader } from "."
import Footer from "~sections/shared/Footer"
import { graphql } from "gatsby"

export default function About({ data }) {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BreadCrumbSection content={data.about.frontmatter?.aboutHeader} />
      <AboutSection />
      <ContentSection />
      <TeamSection
        content={data.team.frontmatter?.teamHeader}
        employees={data.team.frontmatter?.employees}
      />
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
