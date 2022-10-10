import React from "react"
import { Link } from "~components"
import { Col, Container, Row } from "react-bootstrap"
import ErrorPage from "./style"
import { Images } from "~data"
export default function Error() {
  return (
    <ErrorPage backgroundColor="#f3f4f6">
      <Container>
        <Row className="justify-content-center">
          <Col xs="12" className="col-xl-6 col-lg-7 col-md-8 col-xs-10">
            <ErrorPage.Image className="error-page__image text-center">
              <img className="w-100" src={Images.errorImage} alt />
            </ErrorPage.Image>
            <ErrorPage.BigTitle as="h1">404</ErrorPage.BigTitle>
            <ErrorPage.Title>Page non trouvée</ErrorPage.Title>
            <ErrorPage.Text>La page demandée n'existe pas</ErrorPage.Text>
            <ErrorPage.ButtonGroup>
              <ErrorPage.Button
                as={Link}
                className="btn-readical-red btn-1"
                to="/"
              >
                Retour
              </ErrorPage.Button>
              <ErrorPage.Button
                className="btn-outline-readical-red btn-2"
                as={Link}
                to="/contact"
              >
                Contact
              </ErrorPage.Button>
            </ErrorPage.ButtonGroup>
          </Col>
        </Row>
      </Container>
    </ErrorPage>
  )
}
