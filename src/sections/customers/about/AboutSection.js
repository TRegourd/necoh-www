import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Col, Container, Row } from "react-bootstrap"

import About from "./style"
import SectionTitle from "./Components/SectionTitle"
import { graphql, useStaticQuery } from "gatsby"

export default function AboutSection({ content }) {
  const images = useStaticQuery(graphql`
    query {
      allFile(
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
  `)

  const image = getImage(
    images.allFile.nodes?.find(el => {
      return el.relativePath === content?.image
    })?.childrenImageSharp[0]
  )
  return (
    <About>
      <Container>
        {/* about-us Content */}
        <Row className="align-items-center justify-content-center">
          <Col xs="12" className="col-xl-6 col-lg-6 col-md-8 col-xs-10">
            <About.Image>
              <GatsbyImage
                className="rounded-image"
                image={image}
                alt="intro image"
              />
            </About.Image>
          </Col>
          <Col
            col="12"
            className="col-xxl-5 offset-xxl-1 col-lg-5 col-md-8 col-xs-10"
          >
            <About.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
              <SectionTitle
                subTitle={content.subtitle}
                title={content.title}
                text={content.text}
                titleProps={{ mb: "30px" }}
                subTitleProps={{ mb: "25px" }}
              />
            </About.Content>
          </Col>
        </Row>
        {/*/ .about-us Content */}
      </Container>
    </About>
  )
}

{
  /* <SectionTitleBlock 
subTitle="Watch video" 
title="Consultation Trade
Easier Than Ever"
text="Scale up and down easily as your business demands. And make use of business-grade consultation. Book flexibly by the day, week or longer and customise the layout to reflect your brand."
titleProps={{mb:"30px"}}
subTitleProps={{mb:"25px"}}
/> */
}
