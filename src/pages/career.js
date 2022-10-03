import React from "react"
import BreadCrumbSection from "~sections/shared/BreadCrumb"
import AboutSection from "~sections/careers/About"
import ServiceSection from "~sections/careers/Services"
import JobSection from "~sections/careers/Job"
import Footer from "~sections/shared/Footer"
import { PageWrapper } from "~components/Core"
import { NecohHeader } from "."

export default function Career() {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BreadCrumbSection
        content={{ title: "Carrières", subtitle: "Nous rejoindre" }}
      />
      <AboutSection />
      <ServiceSection />
      <JobSection />
      <Footer />
    </PageWrapper>
  )
}
