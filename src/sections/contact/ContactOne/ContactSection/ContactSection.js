import React from "react"
import Contact from "./style"
import SectionTitle from "./Components/SectionTitle"
import { Col, Container, Row } from "react-bootstrap"
import { Form } from "~components"
export default function ContactOne({ contactDetails, contactForm }) {
  return (
    <Contact backgroundColor="#f3f4f6">
      <Container>
        <Row>
          <Col className="col-xl-7 col-lg-7">
            <Contact.Box>
              <SectionTitle
                subTitle={contactForm?.subtitle}
                title={contactForm?.title}
                text={contactForm?.text}
                subTitleProps={{ mb: "10px" }}
                titleProps={{ mb: "10px", as: "h2" }}
                mb="50px"
              />
            </Contact.Box>
            <Contact.From>
              <Form hname={"contact"} hvalue={"contact"}>
                <Row>
                  <Col xs="12" className="col-lg-6 mb-4">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        placeholder="Votre Nom"
                        id="name"
                        name="name"
                        required
                      />
                      <label htmlFor="name">Votre Nom</label>
                    </div>
                  </Col>
                  <Col xs="12" className="col-lg-6 mb-4">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        placeholder="Votre Email"
                        id="email"
                        name="email"
                        required
                      />
                      <label htmlFor="email">Votre Email</label>
                    </div>
                  </Col>
                  <Col xs="12" className="col-lg-6 mb-4">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        placeholder="Votre Numéro de Téléphone"
                        id="phone"
                      />
                      <label htmlFor="phone">Votre Numéro de Téléphone</label>
                    </div>
                  </Col>
                  <Col xs="12" className="col-lg-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="message"
                        name="message"
                        required
                      />
                      <label htmlFor="message">Votre Message</label>
                    </div>
                  </Col>
                  <Col xs="12" className="col-lg-12">
                    <Row className="align-items-center mt-3">
                      <Col
                        xs="12"
                        className="col-md-4 col-lg-5 col-xl-4 text-md-end pt-3"
                      >
                        <Contact.Button>Envoyer</Contact.Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Contact.From>
          </Col>
          <Col xs="12" className="col-xl-5 col-lg-5">
            <Contact.WidgetsBox className="contact-widget-box">
              <Contact.WidgetsBoxTitle as="h2">
                {contactDetails?.title}
              </Contact.WidgetsBoxTitle>
              <Contact.WidgetsBoxText as="p">
                {contactDetails?.text}
              </Contact.WidgetsBoxText>
              <Row>
                <Col xs="12" className="col-lg-12 col-sm-6">
                  <Contact.Widgets>
                    <Contact.WidgetsIcon>
                      <i className="fas fa-map-marker-alt" />
                    </Contact.WidgetsIcon>
                    <Contact.WidgetsBoxBody>
                      <Contact.WidgetsTitle as="h3">
                        Nous rendre visite :
                      </Contact.WidgetsTitle>
                      <Contact.WidgetsText as="p">
                        {contactDetails.addressLine1} <br className="d-block" />
                        {contactDetails.addressLine2}
                      </Contact.WidgetsText>
                    </Contact.WidgetsBoxBody>
                  </Contact.Widgets>
                </Col>
                <Col xs="12" className="col-lg-12 col-sm-6 active">
                  <Contact.Widgets>
                    <Contact.WidgetsIcon className="active">
                      <i className="fas fa-envelope" />
                    </Contact.WidgetsIcon>
                    <Contact.WidgetsBoxBody>
                      <Contact.WidgetsTitle as="h3">
                        Nous écrire
                      </Contact.WidgetsTitle>
                      <Contact.WidgetsText as="p">
                        {contactDetails.email}
                      </Contact.WidgetsText>
                    </Contact.WidgetsBoxBody>
                  </Contact.Widgets>
                </Col>
                <Col xs="12" className="col-lg-12 col-sm-6">
                  <Contact.Widgets>
                    <Contact.WidgetsIcon>
                      <i className="fas fa-phone-alt" />
                    </Contact.WidgetsIcon>
                    <Contact.WidgetsBoxBody>
                      <Contact.WidgetsTitle as="h3">
                        Nous appeller
                      </Contact.WidgetsTitle>
                      <Contact.WidgetsText as="p">
                        {contactDetails.phone}
                      </Contact.WidgetsText>
                    </Contact.WidgetsBoxBody>
                  </Contact.Widgets>
                </Col>
              </Row>
            </Contact.WidgetsBox>
          </Col>
        </Row>
      </Container>
    </Contact>
  )
}
