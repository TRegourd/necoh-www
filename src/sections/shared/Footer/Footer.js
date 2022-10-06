import { Link } from "~components"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Images } from "~data"
import Footer from "./style"
import { graphql, useStaticQuery } from "gatsby"
export default function FooterOne() {
  const currentYear = new Date().getFullYear()
  const data = useStaticQuery(graphql`
    query {
      contactDetails: markdownRemark(
        fields: { slug: { eq: "/contactDetails" } }
      ) {
        frontmatter {
          email
          phone
          addressLine1
          addressLine2
          twitter
          facebook
          instagram
          linkedin
        }
      }
    }
  `)
  return (
    <Footer backgroundColor="#32141c">
      <Container>
        <Footer.Box>
          <Row>
            <Col xs="12" className="col-lg-4 col-md-8 col-xs-10">
              <Footer.Widgets className="footer-widgets footer-widgets--l7">
                {/* Brand Logo*/}
                <Footer.Box mb="30px">
                  <Link to="#">
                    <img
                      src={Images.FooterOne.LogoWhite}
                      width={"200px"}
                      alt="logo"
                    />
                  </Link>
                </Footer.Box>
                <Footer.Text mb="36px">
                  Votre partenaire Expertise Comptable, Juridique, Fiscalité,
                  Social et Audit.
                </Footer.Text>
              </Footer.Widgets>
            </Col>
            <Col xs="12" className="col-xl-8">
              <Row>
                <Col xs="6" className="col-md-4 col-xs-6">
                  <Footer.Widgets>
                    <Footer.Title>Necoh</Footer.Title>
                    <Footer.List>
                      <Footer.ListItems>
                        <a href="/about">A propos</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="/careers">Nous rejoindre</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="/terms">Mentions Légales</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="/credits">Crédits</a>
                      </Footer.ListItems>
                    </Footer.List>
                  </Footer.Widgets>
                </Col>
                <Col xs="6" className="col-md-4 col-xs-6">
                  <Footer.Widgets>
                    <Footer.Title>Nos Métiers</Footer.Title>
                    <Footer.List>
                      <Footer.ListItems>
                        <a href="/services/comptabilite">Expertise Comptable</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="/services/juridique">Juridique</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="/services/fiscalite">Fiscalité</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="/services/audit">Audit</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="/services/social">Social</a>
                      </Footer.ListItems>
                      <Footer.ListItems>
                        <a href="/services/conseil">Conseil</a>
                      </Footer.ListItems>
                    </Footer.List>
                  </Footer.Widgets>
                </Col>
                <Col xs="12" className="col-md-4 col-xs-6">
                  <Footer.Widgets>
                    <Footer.Title>
                      <a href={"/contact"} className="text-white">
                        Contact
                      </a>
                    </Footer.Title>
                    <Footer.Address className="widgets-address">
                      <Footer.AddressItem>
                        <i className="fa fa-map-marker-alt" />
                        <span>
                          {data.contactDetails?.frontmatter.addressLine1}
                          <br />
                          {data.contactDetails?.frontmatter.addressLine2}
                        </span>
                      </Footer.AddressItem>
                      <Footer.AddressItem>
                        <i className="fa fa-phone-alt" />

                        <a
                          href={`tel:${data.contactDetails?.frontmatter.phone}`}
                        >
                          <span> Téléphone: </span>
                          <br className="d-block" />{" "}
                          {data.contactDetails?.frontmatter.phone}
                        </a>
                      </Footer.AddressItem>
                      <Footer.AddressItem>
                        <i className="fa fa-envelope" />
                        <a
                          href={`mailto:${data.contactDetails?.frontmatter.email}`}
                        >
                          <span className="d-block"> Email:</span>
                          {data.contactDetails?.frontmatter.email}
                        </a>
                      </Footer.AddressItem>
                    </Footer.Address>
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
              <p className="text-white">
                &copy; Ridge Coding, {currentYear} All Rights Reserved
              </p>
            </a>
          </Footer.CopyrightText>
          <Footer.SocialShare>
            <Footer.SocialShareItem>
              <a href={data.contactDetails?.frontmatter.facebook}>
                <i className="fab fa-facebook-square" />
              </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
              <a href={data.contactDetails?.frontmatter.twitter}>
                <i className="fab fa-twitter" />
              </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
              <a href={data.contactDetails?.frontmatter.instagram}>
                <i className="fab fa-instagram" />
              </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
              <a href={data.contactDetails?.frontmatter.linkedin}>
                <i className="fab fa-linkedin" />
              </a>
            </Footer.SocialShareItem>
          </Footer.SocialShare>
        </Footer.Copyright>
      </Container>
    </Footer>
  )
}
