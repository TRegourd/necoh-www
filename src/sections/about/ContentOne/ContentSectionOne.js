import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { StaticImage as Img } from "gatsby-plugin-image"
import Content from "./style"
export default function ContentSectionOne({ ...rest }) {
  return (
    <Content backgroundColor="fff" {...rest}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col
            xs="12"
            className="col-xxl-6 col-xl-7 col-lg-8 col-md-9 col-xs-11 order-2 order-lg-1"
          >
            <Content.Subtitle as="h6" fontColor="#6001d3">
              Why Choose Us
            </Content.Subtitle>
            <Content.Title as="h2" mb="13px">
              Specialist in aviding <br className="d-none d-xs-block" />
              clients on financial
              <br className="d-none d-xs-block" />
              challenges
            </Content.Title>
            <Content.Text mb="45px" mbXL="65px">
              Corporate headquarters is the part of a corporate structure that
              <br className="d-none d-md-block" /> deals with important tasks
              such as strategic planning,{" "}
            </Content.Text>
          </Col>
          <Col
            xs="12"
            className="col-xxl-6 col-xl-5 col-lg-4 col-md-9 col-xs-10 order-1 order-lg-2"
          >
            <Content.Widget mb="30px" mbXL="0px">
              <Img
                src="../../../assets/image/home-services/content-img-l4-2.png"
                alt="content"
                layout="fullWidth"
                placeholder="blurred"
              />
            </Content.Widget>
          </Col>
        </Row>
      </Container>
    </Content>
  )
}
