import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Terms from "./style"
export default function TermsCondition() {
  return (
    <Terms>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-7 col-lg-8 col-md-11 text-center">
            <Terms.Box>
              <Terms.Title as="h2">Mentions Légales </Terms.Title>
            </Terms.Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="col-xxl-8 col-xl-9 col-lg-10">
            <Terms.Content>
              <Terms.Text>
                Merci de lire avec attention les différentes modalités
                d’utilisation du présent site avant d’y parcourir ses pages. En
                vous connectant sur ce site, vous acceptez sans réserves les
                présentes modalités.
              </Terms.Text>
              <Terms.ContentBox>
                <Terms.TitleSmall as="h5">
                  Propriété intellectuelle
                </Terms.TitleSmall>
                <Terms.Text>
                  Le présent site Internet ainsi que le nom de domaine sont la
                  propriété de Necoh. Le contenu du site necoh.fr tel que
                  données, informations, marques, illustrations, logos, vidéos,
                  animations 3D est protégé au titre du droit d’auteur et autres
                  droits de propriété intellectuelle. Toute copie, traduction,
                  adaptation, diffusion, représentation ou reproduction
                  intégrale ou partielle du contenu du site est interdite et
                  donnerait lieu à des poursuites pénales.
                </Terms.Text>
              </Terms.ContentBox>
            </Terms.Content>
          </Col>
        </Row>
      </Container>
    </Terms>
  )
}
