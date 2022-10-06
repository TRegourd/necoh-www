import { StaticImage as Img } from "gatsby-plugin-image"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import serviceData from "~data/marketing/Service"
import ServiceWidget from "./Component/Widget"
import Service from "./style"
import NecohSymbol from "../../../assets/image/Necoh_Symbole.png"

export default function ServiceSection({ content, color }) {
  return (
    <>
      <Service className="bg-default">
        <Service.Shape className="service-shape service-shape--l1">
          <img src={NecohSymbol} alt="shape necoh" className="w-100" />
        </Service.Shape>
        <Container>
          {/* Section Title */}
          <Row className="align-items-end justify-content-center text-start">
            <Col xs="12" className="col-lg-7 col-md-12 col-xs-10">
              <Service.Title as="h2" mb="0">
                {content?.title}
              </Service.Title>
            </Col>
            <Col xs="12" className="col-lg-5 col-md-12 col-xs-10">
              <Service.Text>{content?.subtitle}</Service.Text>
            </Col>
          </Row>
          <Service.Box mtLG="100px" mtMD="40px">
            <Row className="justify-content-center justify-content-md-start">
              {/* Single Service */}
              {content.features?.map(({ title, logo, desc }) => {
                return (
                  <Col className="col-lg-4 col-xs-6 col-10" key={title}>
                    <ServiceWidget
                      icon={logo}
                      title={title}
                      text={desc}
                      iconColor={color}
                      id={title}
                      mt="40px"
                    />
                  </Col>
                )
              })}
            </Row>
          </Service.Box>
        </Container>
      </Service>
    </>
  )
}
