import React from "react"
import { PageWrapper } from "~components/Core"
import BreadCrumbSection from "~sections/about/BreadCrumb"
import AboutSection from "~sections/about/about"
import FeatureSection from "~sections/about/Feature"
import ContentSection from "~sections/about/Content"
import TeamSection from "~sections/about/Team"
import { NecohHeader } from "."
import Footer from "~sections/shared/Footer"

export default function About() {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BreadCrumbSection
        title="About"
        text="Our focus is always on finding the best people to work with. Our <br class='d-none d-md-block'/>
bar is high, but you look ready to take on the challenge."
      />
      <AboutSection />
      <FeatureSection />
      <ContentSection />
      <TeamSection />
      <Footer />
    </PageWrapper>
  )
}
