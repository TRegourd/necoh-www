import { Link } from "~components"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { icons } from "../../../libs/icons"
import Promo from "./style"

export default function PromoSection({ ...rest }) {
  return (
    <Promo backgroundColor="#f3f4f6">
      <Container>
        <Row className="justify-content-center text-center">
          <Col className="col-xl-8">
            <Promo.Content>
              <Promo.Title fontColor="#000" as="h2" mb="45px">
                Vous souhaitez nous rejoindre?{" "}
              </Promo.Title>

              <Promo.Button as={Link} to={"/careers"} className="btn-secondary">
                Voir les offres d'emploi
              </Promo.Button>
            </Promo.Content>
          </Col>
        </Row>
      </Container>
      <Promo.Shape>
        <img src={icons["hero-pie-left.svg"]} className="value-icon" />
      </Promo.Shape>
    </Promo>
  )
}
