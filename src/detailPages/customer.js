import React from "react"
import { PageWrapper } from "~components/Core"
import BreadCrumbSection from "~sections/shared/BreadCrumb"
import About from "~sections/customers/about"
import CTA from "~sections/services/Promo"
import Features from "~sections/customers/Features"

import Footer from "~sections/shared/Footer"
import { NecohHeader } from "../libs/NecohHeader"

export default function Customer({ pageContext }) {
  const { content } = pageContext

  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BreadCrumbSection content={content?.customerHeader} />
      <About content={content?.customerIntro} />
      <Features content={content?.customerFeatures} />
      <CTA content={content?.customerCTA} />
      <Footer />
    </PageWrapper>
  )
}
