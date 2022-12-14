import React from "react"
import Slider from "react-slick"
import { Images } from "~data"
import { Col, Container, Row } from "react-bootstrap"
import SectionTitle from "./Components/SectionTitle"
import TeamCard from "./Components/Card"
import Team from "./style"
import { getImage } from "gatsby-plugin-image"
export default function TeamSection({ content, images, employees, ...rest }) {
  const elSlider = React.useRef()

  const sliderConfig = {
    centerMode: true,
    centerPadding: "180px",
    slidesToShow: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "100px",
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  }

  return (
    <Team {...rest} backgroundColor="#f3f4f6">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xxl-6 col-md-8 col-xs-10">
            <Team.Box className="text-center">
              <SectionTitle
                subTitle={content?.subtitle}
                title={content?.title}
                titleProps={{ mb: "33px" }}
                subTitleProps={{ mb: "20px" }}
              />
            </Team.Box>
          </Col>
        </Row>
      </Container>
      <Container fluid={true}>
        <Team.SliderWrapper>
          <Slider ref={elSlider} {...sliderConfig}>
            {employees?.map(
              ({ firstName, lastName, position, links, color, image }) => {
                return (
                  <TeamCard
                    image={getImage(
                      images.find(el => {
                        return el.relativePath === image
                      })?.childrenImageSharp[0]
                    )}
                    userName={`${firstName} ${lastName}`}
                    userPosition={position}
                    color={color}
                    links={links}
                    key={firstName + lastName}
                  />
                )
              }
            )}
          </Slider>
        </Team.SliderWrapper>
      </Container>
    </Team>
  )
}
