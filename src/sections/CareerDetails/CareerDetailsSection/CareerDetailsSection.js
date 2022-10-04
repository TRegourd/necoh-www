import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "~components"
import CareerCard from "./Components/Card"
import Career from "./style"
import Markdown from "markdown-to-jsx"
export default function CareerDetailsSection({ content }) {
  return (
    <Career backgroundColor="#f3f4f6">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-8 col-lg-10">
            <CareerCard job={content} />
          </Col>
        </Row>
        <Row className="row justify-content-center">
          <Col className="col-xl-8 col-lg-10">
            <Career.Wrapper>
              <Career.ContentBlock>
                <Career.Title fontColor="#262729">
                  Détail de l'offre
                </Career.Title>
              </Career.ContentBlock>
              <Markdown>{content.desc}</Markdown>
            </Career.Wrapper>
          </Col>
        </Row>
      </Container>
    </Career>
  )
}
