import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SectionTitle from "./Components/SectionTitle"
import About from "./style"

export default function AboutusSection({ content, logo, color, images }) {
  const serviceLogo = getImage(
    images?.find(el => {
      return el.relativePath === logo
    })?.childrenImageSharp[0]
  )
  const serviceImage = getImage(
    images?.find(el => {
      return el.relativePath === content?.image
    })?.childrenImageSharp[0]
  )
  return (
    <About>
      <Container>
        <Row className="align-items-center justify-content-center g-0">
          <Col xs="12" className="col-xxl-6 col-lg-5 col-md-10">
            <About.Image>
              <GatsbyImage
                image={serviceImage}
                className="rounded-image"
                alt="service Image"
              />
            </About.Image>
          </Col>
          <Col className="col-xxl-6 col-lg-7 col-md-10">
            <About.Box>
              {/* Section Title */}
              <About.Content>
                <SectionTitle
                  subTitle={content?.title}
                  text={content?.subtitle}
                  title={serviceLogo}
                  subTitleProps={{
                    mb: "10px",
                    className: "subline",
                    fontColor: color,
                  }}
                  titleProps={{ mb: "10px", as: "h2" }}
                  mb="69px"
                />
              </About.Content>
              {/*/ .Section Title */}
            </About.Box>
          </Col>
        </Row>
      </Container>
    </About>
  )
}
