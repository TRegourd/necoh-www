import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import ReactTypingEffect from "react-typing-effect"
import { Link } from "~components"
import { Button } from "~styled"
import ImageGroup from "./Components/ImageGroup"
import Hero from "./style"

export default function HeroSection({ content, images }) {
  return (
    <Hero className="position-relative bg-default">
      <Container>
        <Row>
          {/* Welcome content Area */}
          <Col
            className="col-xl-6 col-lg-7 col-md-8 col-xs-11 order-2 order-lg-1"
            xs="12"
          >
            <Hero.Content>
              <Hero.Title as="h1">
                {content?.title}
                <br />
                <ReactTypingEffect
                  text={content.dynamicText?.map(item => {
                    if (item.text) {
                      return item.text
                    }
                  })}
                  className="highlight-text d-inline-block text-primary"
                  speed="100"
                  eraseSpeed="50"
                  typingDelay="400"
                  eraseDelay="800"
                  cursorClassName="typed-cursor"
                />
              </Hero.Title>
              <Hero.Text>{content?.subtitle}</Hero.Text>
              {/* Newsletter */}
              <Row>
                <Col xs="12" className="col-xxl-10">
                  <Hero.Newsletter>
                    <Button
                      className="btn-secondary"
                      textTransform="capitalized"
                    >
                      <Link to="/a-propos" className=" text-white">
                        En savoir plus
                      </Link>
                    </Button>
                  </Hero.Newsletter>
                </Col>
              </Row>
            </Hero.Content>
          </Col>
          {/*/ .Welcome Content Area */}
          {/*Welcome Image Area */}
          <Col
            xs={12}
            className="col-xl-6 col-lg-5 col-md-10 order-1 order-lg-2 position-static"
          >
            <ImageGroup
              images={images}
              image0={content?.image0}
              image1={content?.image1}
              image2={content?.image2}
              image3={content?.image3}
            />
          </Col>
          {/*/ .Welcome Image Area */}
        </Row>
      </Container>
    </Hero>
  )
}
