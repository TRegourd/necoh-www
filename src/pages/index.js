import React from "react"
import { PageWrapper } from "~components/Core"
import HeroSection from "~sections/home/Hero"
import TestimonialSection from "~sections/home/Testimonial"
import ReferencesSection from "~sections/home/References"
import AboutSection from "~sections/home/About"
import ContactSection from "~sections/contact/ContactOne/ContactSection"
import Footer from "~sections/shared/Footer"
import { graphql } from "gatsby"
import Expertise from "~sections/home/Expertise"
import { NecohHeader } from "../libs/NecohHeader"

export default function Home({ data }) {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <HeroSection
        content={data.index.frontmatter?.indexHero}
        images={data.images?.nodes}
      />
      <ReferencesSection
        content={data.index.frontmatter?.indexReferences}
        images={data.images?.nodes}
      />
      <AboutSection
        content={data.index.frontmatter?.indexAbout}
        images={data.images?.nodes}
      />

      <Expertise
        content={data.index.frontmatter?.indexBrands}
        images={data.images?.nodes}
      />

      <TestimonialSection
        content={data.index.frontmatter?.indexTestimonials}
        images={data.images?.nodes}
      />
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
          image0
          image1
          image2
          image3
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
        indexReferences {
          subtitle
          references {
            name
            logo
          }
        }
        indexAbout {
          title
          subtitle
          textLeft
          textRight
          image
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
          image
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
        google
      }
    }
    contactForm: markdownRemark(fields: { slug: { eq: "/contactForm" } }) {
      frontmatter {
        title
        subtitle
        text
        disclaimer
      }
    }
    images: allFile(
      filter: {
        relativeDirectory: { eq: "" }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      }
    ) {
      nodes {
        relativePath
        childrenImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
