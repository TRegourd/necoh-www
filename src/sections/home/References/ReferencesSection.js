import React, { useRef } from "react"
import Slider from "react-slick"
import ReferenceCard from "./Component/Card"
import References from "./style"
import { Container, Row, Col } from "react-bootstrap"
import { getImage } from "gatsby-plugin-image"

export default function ReferencesSection({ content, images }) {
  const elSlider = useRef()

  const sliderConfig1 = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    centerPadding: false,
    autoPlay: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  }
  return (
    <References backgroundColor="#fff">
      <Container>
        <Row>
          <Col xs="12" className="col-lg-8 col-xl-9 col-xxl-7">
            <References.Box mbLG="55px" mbSM="30px">
              <References.Subtitle className="" as="h6">
                {content?.subtitle}
              </References.Subtitle>
            </References.Box>
          </Col>
        </Row>
        <Slider
          ref={elSlider}
          className="testimonial-slider row justify-content-center"
          {...sliderConfig1}
        >
          {content?.references?.map(({ name, logo }) => {
            return (
              <ReferenceCard
                image={getImage(
                  images?.find(el => {
                    return el.relativePath === logo
                  })?.childrenImageSharp[0]
                )}
                name={name}
                key={name}
              />
            )
          })}
        </Slider>
      </Container>
    </References>
  )
}
