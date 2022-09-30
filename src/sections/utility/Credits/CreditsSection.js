import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Credits from "./style"
export default function CreditsCondition() {
  return (
    <Credits>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-7 col-lg-8 col-md-11 text-center">
            <Credits.Box>
              <Credits.Title as="h2">Crédits</Credits.Title>
            </Credits.Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="col-xxl-8 col-xl-9 col-lg-10">
            <Credits.Content>
              <Credits.ContentBox>
                <Credits.TitleSmall as="h5">Editeur du site</Credits.TitleSmall>
                <Credits.Text>
                  Ridge Coding, SAS au capital de 1000€ <br />
                  Numéro de SIRET : 917 596 546 au RCS de Chambéry <br />
                  Siège Social : 1837 route des Monts, 73230 Saint Alban Leysse
                  <br />
                  Téléphone : <a href="tel:+33695025391">+33 (0)695025391</a>
                  <br />
                  Email :{" "}
                  <a href="mailto:contact@ridgecoding.com">
                    contact@ridgecoding.com
                  </a>
                  <br />
                  Site Web : <a href="www.ridgecoding.com">ridgecoding.com</a>
                </Credits.Text>
              </Credits.ContentBox>
              <Credits.ContentBox>
                <Credits.TitleSmall as="h5">
                  Hébergeur du Site
                </Credits.TitleSmall>
                <Credits.Text>
                  Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco,
                  California 94104. USA
                </Credits.Text>
              </Credits.ContentBox>
              <Credits.ContentBox>
                <Credits.TitleSmall as="h5">Crédits Images</Credits.TitleSmall>
                <Credits.List>
                  <Credits.ListItem>Hero Image :</Credits.ListItem>
                  <Credits.ListItem>About Image :</Credits.ListItem>
                </Credits.List>
              </Credits.ContentBox>
            </Credits.Content>
          </Col>
        </Row>
      </Container>
    </Credits>
  )
}
