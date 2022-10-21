import { Link } from "gatsby"
import Markdown from "markdown-to-jsx"
import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { Cookies } from "react-cookie-consent"

import Terms from "./style"
export default function TermsCondition({ content }) {
  function handleClick(e) {
    Cookies.remove("gatsby-gdpr-google-analytics")
  }

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
        <Row className="justify-content-center pt-5">
          <Col className="col-xxl-8 col-xl-9 col-lg-10">
            <Terms.Content style={{ textAlign: "left" }}>
              <Terms.TitleSmall as="h5">Cookies</Terms.TitleSmall>
              <Terms.Text>
                Vous pouvez reinitialiser vos préférences de cookies en cliquant
                sur le bouton ci-dessous
              </Terms.Text>
              <Button
                className="btn btn-third text-white"
                onClick={handleClick}
              >
                <Link to="/" className="text-white">
                  Réinitialiser les cookies
                </Link>
              </Button>
            </Terms.Content>
          </Col>
        </Row>
      </Container>
    </Terms>
  )
}
