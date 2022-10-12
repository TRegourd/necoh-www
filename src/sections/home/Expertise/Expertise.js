import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import SectionTitle from "./components/SectionTitle"
import Widget from "./components/widget"
import { GatsbyImage, getImage, StaticImage as Img } from "gatsby-plugin-image"
import About from "./style"
import { graphql, useStaticQuery } from "gatsby"
export default function ExpertiseSection({ content }) {
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
    <About backgroundColor="#f2f5fb">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-6 col-lg-8 col-md-9 col-xs-10 text-center">
            <SectionTitle
              subTitle={content.subtitle}
              title={content.title}
              titleProps={{ mb: "50px" }}
              subTitleProps={{ mb: "15px" }}
            />
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col className="col-xxl-3 col-lg-4 col-md-6 col-sm-8 col-xs-9 order-2 order-lg-1">
            <Widget
              directionXS="row-reverse"
              linkDirection="row-reverse"
              title={content?.brands?.comptabilite?.title}
              icon={content?.brands?.comptabilite?.logo}
              text={content?.brands?.comptabilite?.desc}
              linkText={content?.brands?.comptabilite?.link}
              linkUrl="/services/comptabilite"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="100"
            />
            <Widget
              directionXS="row-reverse"
              linkDirection="row-reverse"
              title={content?.brands?.audit?.title}
              icon={content?.brands?.audit?.logo}
              text={content?.brands?.audit?.desc}
              linkText={content?.brands?.audit?.link}
              linkUrl="/services/audit"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="100"
            />
            <Widget
              directionXS="row-reverse"
              linkDirection="row-reverse"
              title={content?.brands?.social?.title}
              icon={content?.brands?.social?.logo}
              text={content?.brands?.social?.desc}
              linkText={content?.brands?.social?.link}
              linkUrl="/services/social"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="100"
            />
          </Col>
          <Col
            xs="12"
            className="col-xxl-6 col-lg-4 col-md-8 col-xs-9 order-1 order-lg-2 text-center"
          >
            <About.ImageContent>
              <GatsbyImage image={image} alt="Necoh Services" />
              <About.Shape>
                <Img
                  src="../../../assets/image/Necoh_Symbole.png"
                  alt="content"
                  layout="fullWidth"
                  placeholder="blurred"
                />
              </About.Shape>
            </About.ImageContent>
          </Col>
          <Col className="col-xxl-3 col-lg-4 col-md-6 col-sm-8 col-xs-9 order-3">
            <Widget
              directionXS="row"
              linkDirection="row"
              title={content?.brands?.conseil?.title}
              icon={content?.brands?.conseil?.logo}
              text={content?.brands?.conseil?.desc}
              linkText={content?.brands?.conseil?.link}
              linkUrl="/services/conseil"
              data-aos="fade-left"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="100"
            />
            <Widget
              directionXS="row"
              linkDirection="row"
              title={content?.brands?.juridique?.title}
              icon={content?.brands?.juridique?.logo}
              text={content?.brands?.juridique?.desc}
              linkText={content?.brands?.juridique?.link}
              linkUrl="/services/juridique"
              data-aos="fade-left"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="100"
            />
            <Widget
              directionXS="row"
              linkDirection="row"
              title={content?.brands?.fiscalite?.title}
              icon={content?.brands?.fiscalite?.logo}
              text={content?.brands?.fiscalite?.desc}
              linkText={content?.brands?.fiscalite?.link}
              linkUrl="/services/fiscalite"
              data-aos="fade-left"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="100"
            />
          </Col>
        </Row>
      </Container>
    </About>
  )
}
