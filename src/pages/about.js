import React from "react"
import { PageWrapper } from "~components/Core"
import BreadCrumbSection from "~sections/shared/BreadCrumb"
import AboutSection from "~sections/about/about"
import ContentSectionOne from "~sections/about/ContentOne"
import TeamSection from "~sections/about/Team"
import Promo from "~sections/about/Promo"
import { NecohHeader } from "../libs/NecohHeader"
import Footer from "~sections/shared/Footer"
import { graphql } from "gatsby"

export default function About({ data }) {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BreadCrumbSection content={data.about.frontmatter?.aboutHeader} />
      <AboutSection content={data.about.frontmatter?.aboutIntro} />
      <ContentSectionOne content={data.about.frontmatter?.aboutCEO} />
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
        aboutIntro {
          title
          subtitle
          video
          image
          textLeft
          textRight
          values {
            name
            desc
            color
            image
          }
        }
        aboutCEO {
          title
          subtitle
          image
          text
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
