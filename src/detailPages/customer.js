import React from "react"
import { PageWrapper } from "~components/Core"
import BreadCrumbSection from "~sections/shared/BreadCrumb"
import About from "~sections/customers/about"
import CTA from "~sections/services/Promo"
import Features from "~sections/customers/Features"

import Footer from "~sections/shared/Footer"
import { NecohHeader } from "../libs/NecohHeader"
import { graphql } from "gatsby"

export default function Customer({ pageContext, data }) {
  const { content } = pageContext

  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BreadCrumbSection content={content?.customerHeader} />
      <About images={data.images?.nodes} content={content?.customerIntro} />
      <Features content={content?.customerFeatures} />
      <CTA content={content?.customerCTA} />
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
