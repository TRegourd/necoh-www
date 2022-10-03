import React from "react"

import { PageWrapper } from "~components/Core"
import Footer from "~sections/shared/Footer"
import { NecohHeader } from "."
import Features from "~sections/services/Features"
import BreadCrumbSection from "~sections/shared/BreadCrumb"

export default function services() {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BreadCrumbSection
        content={{
          title: "Nos Services",
          subtitle: "Les domaines d'expertise et d'accompagnement de Necoh",
        }}
      />
      <Features />
      <Footer />
    </PageWrapper>
  )
}
