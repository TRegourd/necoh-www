import React from "react"
import { PageWrapper } from "~components/Core"
import BreadCrumbSection from "~sections/shared/BreadCrumb"
import AboutSection from "~sections/about/about"
import FeatureSection from "~sections/about/Feature"
import ContentSection from "~sections/about/Content"
import TeamSection from "~sections/about/Team"

import Footer from "~sections/shared/Footer"
import { NecohHeader } from "../pages/index.js"

export default function Service({ pageContext }) {
  const { content } = pageContext
  console.log(content)
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BreadCrumbSection content={content?.serviceHeader} />
      <AboutSection />
      <FeatureSection />
      <ContentSection />
      <TeamSection />
      <Footer />
    </PageWrapper>
  )
}
