import React from "react"
import { PageWrapper } from "~components/Core"
import HeaderButton from "~sections/shared/Header"
import HeroSection from "~sections/home/Hero"
import TestimonialSection from "~sections/home/Testimonial"
import AboutSection from "~sections/home/About"
import ContactSection from "~sections/contact/ContactOne/ContactSection"
import Footer from "~sections/shared/Footer"
import { graphql } from "gatsby"
import Expertise from "~sections/home/Expertise"

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
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <HeroSection content={data.index.frontmatter?.indexHero} />
      <AboutSection content={data.index.frontmatter?.indexAbout} />
      <Expertise content={data.index.frontmatter?.indexBrands} />
      <TestimonialSection content={data.index.frontmatter?.indexTestimonials} />
      <ContactSection
        contactForm={data.contactForm?.frontmatter}
        contactDetails={data.contactDetails?.frontmatter}
      />
      <Footer />
    </PageWrapper>
  )
}

export const query = graphql`
  query {
    index: markdownRemark(fields: { slug: { eq: "/index" } }) {
      frontmatter {
        indexHero {
          title
          subtitle
          dynamicText {
            text
          }
        }
        indexTestimonials {
          title
          subtitle
          testimonials {
            name
            position
            avatar
            text
          }
        }
        indexAbout {
          title
          subtitle
          textLeft
          textRight
          features {
            name
          }
          numbers {
            number
            text
          }
        }
        indexBrands {
          title
          subtitle
          brands {
            comptabilite {
              title
              desc
              link
              logo
            }
            audit {
              title
              desc
              link
              logo
            }
            fiscalite {
              title
              desc
              link
              logo
            }
            juridique {
              title
              desc
              link
              logo
            }
            social {
              title
              desc
              link
              logo
            }
            conseil {
              title
              desc
              link
              logo
            }
          }
        }
      }
    }
    contactDetails: markdownRemark(
      fields: { slug: { eq: "/contactDetails" } }
    ) {
      frontmatter {
        title
        text
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
    contactForm: markdownRemark(fields: { slug: { eq: "/contactForm" } }) {
      frontmatter {
        title
        subtitle
        text
      }
    }
  }
`
