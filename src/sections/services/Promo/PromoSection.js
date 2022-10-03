import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "~components"
import Promo from "./style"
export default function PromoSection({ content }) {
  return (
    <Promo>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-12">
            <Promo.ContentBox className="text-center">
              <Promo.Box>
                <Promo.Title as="h2" fontColor="#fff" mb="25px">
                  {content.title}
                </Promo.Title>
                <Promo.Text fontColor="#fff" mb="30px">
                  {content.desc}
                </Promo.Text>
                <Promo.Button as={Link} to="/contact" className="btn-secondary">
                  Nous contacter
                </Promo.Button>
              </Promo.Box>
            </Promo.ContentBox>
          </Col>
        </Row>
      </Container>
    </Promo>
  )
}
