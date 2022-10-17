import React from "react"
import { PageWrapper } from "~components/Core"
import BreadCrumbSection from "~sections/shared/BreadCrumb"
import AboutSection from "~sections/services/About"
import CTA from "~sections/services/Promo"
import Features from "~sections/services/Features"

import Footer from "~sections/shared/Footer"
import { NecohHeader } from "../libs/NecohHeader"
import { graphql } from "gatsby"

export default function Service({ pageContext, data }) {
  const { content } = pageContext

  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BreadCrumbSection content={content?.serviceHeader} />
      <AboutSection
        color={content?.serviceHeader?.color}
        logo={content?.serviceHeader?.logo}
        content={content?.serviceIntro}
        images={data.images?.nodes}
      />
      <Features
        content={content?.serviceFeatures}
        color={content?.serviceHeader?.color}
      />
      <CTA content={content?.serviceCTA} />
      <Footer />
    </PageWrapper>
  )
}

export const query = graphql`
  query {
    images: allFile(
      filter: {
        relativeDirectory: { eq: "" }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      }
    ) {
      nodes {
        relativePath
        childrenImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
