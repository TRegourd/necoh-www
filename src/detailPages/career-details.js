import React from "react"
import CareerDetailsSection from "~sections/CareerDetails/CareerDetailsSection"
import { PageWrapper } from "~components/Core"

import BreadCrumbSection from "~sections/shared/BreadCrumb"

import Footer from "~sections/shared/Footer"
import { NecohHeader } from "../libs/NecohHeader"

export default function CareerDetails({ pageContext }) {
  const { content } = pageContext
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BreadCrumbSection content={{ title: "Offre d'emploi" }} />
      <CareerDetailsSection content={content} />
      <Footer />
    </PageWrapper>
  )
}
