import { Link } from "~components"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Images } from "~data"
import Footer from "./style"
export default function PageFooter({ contactDetails }) {
  const currentYear = new Date().getFullYear()

  return (
    <Footer>
      <Container>
        <Footer.Box pbXL="95px">
          <Row>
            <Col xs="12" className="col-lg-3 col-md-7 col-xs-9">
              <Footer.Widgets className="footer-widgets footer-widgets--l7">
                {/* Brand Logo*/}
                <Footer.Box mb="30px">
                  <Link to="#">
                    <img
                      src={Images.FooterSix.LogoBlack}
                      width={"200px"}
                      alt="logo"
                    />
                  </Link>
                </Footer.Box>
                <Footer.SocialShare>
                  <Footer.SocialShareItem>
                    <a href={contactDetails?.facebook}>
                      <i className="fab fa-facebook-square" />
                    </a>
                  </Footer.SocialShareItem>
                  <Footer.SocialShareItem>
                    <a href={contactDetails?.twitter}>
                      <i className="fab fa-twitter" />
                    </a>
                  </Footer.SocialShareItem>
                  <Footer.SocialShareItem>
                    <a href={contactDetails?.instagram}>
                      <i className="fab fa-instagram" />
                    </a>
                  </Footer.SocialShareItem>
                  <Footer.SocialShareItem>
                    <a href={contactDetails?.linkedin}>
                      <i className="fab fa-linkedin" />
                    </a>
                  </Footer.SocialShareItem>
                </Footer.SocialShare>
              </Footer.Widgets>
            </Col>
            <Col xs="12" className="col-lg-9">
              <Row>
                <Col xs="12" className="col-md-4 col-xs-6">
                  <Footer.Widgets>
                    <Footer.Title>
                      <a href={"/contact"} className="text-black">
                        Contact
                      </a>
                    </Footer.Title>
                    <Footer.Address className="widgets-address">
                      <Footer.AddressItem>
                        <i className="fa fa-map-marker-alt" />
                        <span>
                          {contactDetails?.addressLine1}
                          <br />
                          {contactDetails?.addressLine2}
                        </span>
                      </Footer.AddressItem>
                      <Footer.AddressItem>
                        <i className="fa fa-phone-alt" />

                        <a href={`tel:${contactDetails?.phone}`}>
                          <span> Téléphone: </span>
                          <br className="d-block" /> {contactDetails?.phone}
                        </a>
                      </Footer.AddressItem>
                      <Footer.AddressItem>
                        <i className="fa fa-envelope" />
                        <a href={`mailto:${contactDetails?.email}`}>
                          <span className="d-block"> Email:</span>
                          {contactDetails?.email}
                        </a>
                      </Footer.AddressItem>
                    </Footer.Address>
                  </Footer.Widgets>
                </Col>
                <Col xs="12" className="col-md-4 col-xs-6">
                  <Footer.Widgets>
                    <Footer.Title>Necoh</Footer.Title>
                    <Footer.List>
                      <Footer.ListItems>
                        <a href="/about">A propos</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="#">Mentions Légales</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="#">Credits</a>
                      </Footer.ListItems>
                    </Footer.List>
                  </Footer.Widgets>
                </Col>
                <Col xs="12" className="col-md-4 col-xs-9">
                  <Footer.Widgets>
                    <Footer.Title>Newsletter</Footer.Title>
                    <Footer.Text>Recevez les dernières actualités</Footer.Text>
                    {/* Newsletter */}
                    <Footer.Newsletter>
                      <form action="/.">
                        <input type="text" placeholder="Votre Email" />
                        <Footer.NewsletterBtn
                          className="btn btn-primary"
                          hoverTextColor="#fff"
                          textColor="#fff"
                          sizeX="150px"
                          sizeY="56px"
                          type="submit"
                        >
                          S'inscrire
                        </Footer.NewsletterBtn>
                      </form>
                    </Footer.Newsletter>
                    {/*/ .Newsletter */}
                  </Footer.Widgets>
                </Col>
              </Row>
            </Col>
          </Row>
        </Footer.Box>
        <Footer.Copyright>
          <Footer.CopyrightText>
            <a
              href="https://www.ridgecoding.com"
              target="_blank"
              aria-label="Ridge Coding"
            >
              <p>&copy; Ridge Coding, {currentYear} All Rights Reserved</p>
            </a>
          </Footer.CopyrightText>
        </Footer.Copyright>
      </Container>
    </Footer>
  )
}
