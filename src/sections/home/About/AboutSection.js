import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import SectionTitle from "./components/SectionTitle"
import Widget from "./components/widget"
import { StaticImage as Img } from "gatsby-plugin-image"
import About from "./style"
export default function AboutSection() {
  return (
    <About backgroundColor="#f2f5fb">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-6 col-lg-8 col-md-9 col-xs-10 text-center">
            <SectionTitle
              subTitle="Expertise"
              title="Les marques Necoh"
              titleProps={{ mb: "50px" }}
              subTitleProps={{ mb: "15px" }}
            />
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col className="col-xxl-3 col-lg-4 col-md-6 col-sm-8 col-xs-9 order-2 order-lg-1">
            <Widget
              directionXS="row-reverse"
              title="Comptabilité"
              icon="fa fa-layer-group"
              text="Necoh Expertise Comptable"
              linkText="En savoir plus"
              linkUrl="/contact"
            />
            <Widget
              directionXS="row-reverse"
              title="Audit"
              icon="fa fa-chart-pie"
              text="Necoh Audit"
              linkText="En savoir plus"
              linkUrl="/contact"
            />
            <Widget
              directionXS="row-reverse"
              title="Social"
              icon="fa fa-cog"
              text="Necoh Social"
              linkText="En savoir plus"
              linkUrl="/contact"
            />
          </Col>
          <Col
            xs="12"
            className="col-xxl-6 col-lg-4 col-md-8 col-xs-9 order-1 order-lg-2 text-center"
          >
            <About.ImageContent>
              <Img
                src="../../../assets/image/home-app/about-mobile-img.png"
                alt="content"
                layout="fullWidth"
                placeholder="blurred"
              />
              <About.Shape>
                <Img
                  src="../../../assets/image/home-app/Necoh_Symbole.png"
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
              title="Juridique"
              icon="fa fa-bookmark"
              text="Necoh Expertise Juridique"
              linkText="En savoir plus"
              linkUrl="/contact"
            />
            <Widget
              directionXS="row"
              title="Fiscalité"
              icon="fa fa-headphones"
              text="Necoh Expertise Fiscale"
              linkText="En savoir plus"
              linkUrl="/contact"
            />
          </Col>
        </Row>
      </Container>
    </About>
  )
}
