import React from "react"
import { PageWrapper } from "~components/Core"
import HeaderButton from "~sections/shared/Header"
import HeroSection from "~sections/home/Hero"
import ServicesSection from "~sections/home/Services"
import FeatureSection from "~sections/home/Feature"
import ContentSectionOne from "~sections/home/ContentOne"
import ProcessSection from "~sections/home/Process"
import CtaSection from "~sections/home/Cta"
import TestimonialSection from "~sections/home/Testimonial"
import ContactSection from "~sections/home/Contact"
import Footer from "~sections/shared/Footer"
import { graphql } from "gatsby"

export const NecohHeader = {
  headerClasses:
    "site-header site-header--menu-start light-header site-header--with-border site-header--sticky",
  containerFluid: false,
  buttonBlock: (
    <HeaderButton
      className="ms-auto d-none d-xs-inline-flex"
      btnText="Contact"
      mr="15px"
      mrLG="0"
      btnLink="/contact"
    />
  ),
}

export default function Home({ data }) {
  console.log(data.contactDetails)
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <HeroSection />
      <ServicesSection />
      <FeatureSection />
      <ContentSectionOne />
      <ProcessSection />
      <CtaSection />
      <TestimonialSection />
      <ContactSection />
      <Footer contactDetails={data.contactDetails?.frontmatter} />
    </PageWrapper>
  )
}

export const query = graphql`
  query {
    contactDetails: markdownRemark(
      fields: { slug: { eq: "/contactDetails" } }
    ) {
      frontmatter {
        email
        phone
        addressLine1
        addressLine2
        twitter
        facebook
        instagram
        linkedin
      }
    }
  }
`
