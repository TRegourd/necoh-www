import React from "react"
import BreadCrumbSection from "~sections/shared/BreadCrumb"
import AboutSection from "~sections/careers/About"
import ServiceSection from "~sections/careers/Services"
import JobSection from "~sections/careers/Job"
import Footer from "~sections/shared/Footer"
import { PageWrapper } from "~components/Core"
import { NecohHeader } from "../libs/NecohHeader"
import { graphql } from "gatsby"

export default function Career({ data }) {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BreadCrumbSection
        content={data.careersContent.frontmatter?.careersHeader}
      />
      <AboutSection content={data.careersContent.frontmatter?.careersIntro} />
      <ServiceSection list={data.careersContent.frontmatter?.benefits} />
      <JobSection jobsList={data.jobs.frontmatter?.jobs} />
      <Footer />
    </PageWrapper>
  )
}

export const query = graphql`
  query {
    jobs: markdownRemark(fields: { slug: { eq: "/jobs" } }) {
      frontmatter {
        jobs {
          date
          title
          location
          desc
          type
          link
        }
      }
    }
    careersContent: markdownRemark(fields: { slug: { eq: "/careers" } }) {
      frontmatter {
        careersHeader {
          title
          subtitle
        }
        careersIntro {
          title
          text
          image
        }
        benefits {
          title
          desc
          logo
          color
        }
      }
    }
  }
`
