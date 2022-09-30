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
                <Credits.List>
                  Le site{" "}
                  <a href="www.necoh.fr" aria-label="site necoh">
                    www.necoh.fr
                  </a>{" "}
                  <br />
                  <br />
                  Est exploité par la société : Necoh – SOCIETE D’EXPERTISE ET
                  DE GESTION COMPTABLE, société anonyme au capital social de XXX
                  € <br />
                  <br />
                  Immatriculée au RCS de CHAMBERY sous le numéro XXX
                  <br /> <br />
                  Dont le siège social est : 22 route de Challes 73000 BARBERAZ
                  <br />
                  <br />
                  N° SIRET : XXXXXXXX
                  <br />
                  <br />
                  <a href="tel:+33479818881" aria-label="tel necoh">
                    +33 (0) 4 79 81 88 81
                  </a>
                  <br />
                  <a href="mailto:contact@necoh.fr" aria-label="mail necoh">
                    contact@necoh.fr
                  </a>
                </Credits.List>
                <br />
                <Credits.List>
                  Le directeur de publication est M. Guillaume COHEN, en sa
                  qualité de PDG de Necoh. Il peut être contacté aux coordonnées
                  figurant dans les présentes conditions. Les présentes
                  Conditions Générales ont pour objet de prévoir l’ensemble des
                  conditions d’accès et d’utilisation du Site. L’accès et
                  l’utilisation du Site impliquent l’acceptation tacite et sans
                  réserve des présentes conditions par l’utilisateur.
                </Credits.List>
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
                <Credits.TitleSmall as="h5">
                  Conception et réalisation
                </Credits.TitleSmall>
                <Credits.Text>
                  Ridge Coding
                  <br />
                  Téléphone :{" "}
                  <a href="tel:+33695025391" aria-label="tel ridge coding">
                    +33 (0)695025391
                  </a>
                  <br />
                  Email :{" "}
                  <a
                    href="mailto:contact@ridgecoding.com"
                    aria-label="mailridge coding"
                  >
                    contact@ridgecoding.com
                  </a>
                  <br />
                  Site Web :{" "}
                  <a href="www.ridgecoding.com" aria-label="site ridge coding">
                    ridgecoding.com
                  </a>
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
