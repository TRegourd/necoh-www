import React from "react"
import { PageWrapper } from "~components/Core"
import BreadCrumbSection from "~sections/shared/BreadCrumb"
import AboutSection from "~sections/services/About"
import CTA from "~sections/services/Promo"
import Features from "~sections/services/ServicesOne"

import Footer from "~sections/shared/Footer"
import { NecohHeader } from "../pages/index.js"

export default function Service({ pageContext }) {
  const { content } = pageContext

  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BreadCrumbSection content={content?.serviceHeader} />
      <AboutSection
        color={content?.serviceHeader?.color}
        logo={content?.serviceHeader?.logo}
        content={content?.serviceIntro}
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
