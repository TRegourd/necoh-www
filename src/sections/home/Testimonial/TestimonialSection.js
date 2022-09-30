import React, { useRef } from "react"
import Slider from "react-slick"
import TestiomialCard from "./Component/Card"
import Testimonial from "./style"
import TestimonialData from "~data/services/testimonial"
import { Container, Row, Col } from "react-bootstrap"
export default function TestimonialSection({ content }) {
  const elSlider = useRef()

  const sliderConfig1 = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    centerPadding: false,
    autoPlay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Testimonial backgroundColor="#fff">
      <Container>
        <Row>
          <Col xs="12" className="col-lg-8 col-xl-9 col-xxl-7">
            <Testimonial.Box mbLG="55px" mbSM="30px">
              <Testimonial.Subtitle className="text-secondary" as="h6">
                {content?.subtitle}
              </Testimonial.Subtitle>
              <Testimonial.Title mb="20px" as="h2">
                {content?.title}
              </Testimonial.Title>
            </Testimonial.Box>
          </Col>
        </Row>
        <Slider
          ref={elSlider}
          className="testimonial-slider row justify-content-center"
          {...sliderConfig1}
        >
          {content?.testimonials?.map(({ avatar, name, position, text }) => {
            return (
              <TestiomialCard
                icon={"fa fa-quote-left"}
                image={avatar}
                userName={name}
                userPosition={position}
                text={text}
                key={name + position}
              />
            )
          })}
        </Slider>
      </Container>
    </Testimonial>
  )
}
