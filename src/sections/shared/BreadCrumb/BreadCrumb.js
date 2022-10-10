import React from "react"
import BreadCrumb from "./style"
import { icons } from "../../../libs/icons"
import { Col, Row, Container } from "react-bootstrap"
import { SuperTag } from "~components"
export default function BreadCrumbSection({ colClasses, content, ...rest }) {
  return (
    <BreadCrumb backgroundColor="#f3f4f6" {...rest}>
      <Container>
        <Row className="row justify-content-center text-center">
          <Col className={colClasses ? colClasses : "col-xl-7"}>
            <BreadCrumb.Title as="h2">{content.title}</BreadCrumb.Title>
            <BreadCrumb.Text>
              <SuperTag value={content.subtitle} />
            </BreadCrumb.Text>
          </Col>
        </Row>
      </Container>
      <BreadCrumb.Image>
        <img src={icons["hero-pie-left.svg"]} className="value-icon" />
      </BreadCrumb.Image>
    </BreadCrumb>
  )
}
