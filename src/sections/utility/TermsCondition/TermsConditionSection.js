import Markdown from "markdown-to-jsx"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Terms from "./style"
export default function TermsCondition({ content }) {
  return (
    <Terms>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-7 col-lg-8 col-md-11 text-center">
            <Terms.Box>
              <Terms.Title as="h2">{content.title}</Terms.Title>
            </Terms.Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="col-xxl-8 col-xl-9 col-lg-10">
            <Terms.Content>
              <Markdown>{content.text}</Markdown>
            </Terms.Content>
          </Col>
        </Row>
      </Container>
    </Terms>
  )
}
