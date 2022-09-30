import React from "react"
import { PageWrapper } from "~components/Core"
import TermsConditionSection from "~sections/utility/TermsCondition"
import Footer from "~sections/shared/Footer"

import { NecohHeader } from "."
const header = {
  headerClasses: "site-header site-header--menu-start light-header",
  containerFluid: false,
}

export default function TermsAndConditions() {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <TermsConditionSection />
      <Footer />
    </PageWrapper>
  )
}
