import React from "react"
import Footer from "~sections/shared/Footer"
import { PageWrapper } from "~components/Core"
import CreditsSection from "~sections/utility/Credits"

import { NecohHeader } from "."
const header = {
  headerClasses: "site-header site-header--menu-start light-header",
  containerFluid: false,
}

export default function Credits() {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <CreditsSection />
      <Footer />
    </PageWrapper>
  )
}
