import React from "react"
import { GatsbyImage, getImage, StaticImage as Img } from "gatsby-plugin-image"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "~components"
import About from "./style"
import SectionTitle from "./Components/SectionTitle"
import ContentWidget from "./Components/Widget"
import Video from "~components/VideoModal"
import { graphql, useStaticQuery } from "gatsby"
export default function AboutSection({ content }) {
  const images = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativeDirectory: { eq: "" }
          extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        }
      ) {
        nodes {
          relativePath
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

  const image = getImage(
    images.allFile.nodes?.find(el => {
      return el.relativePath === content?.image
    })?.childrenImageSharp[0]
  )
  return (
    <About>
      <Container>
        {/* about-us Content */}
        <Row>
          <SectionTitle
            subTitle={content?.subtitle}
            title={content?.title}
            titleProps={{ mb: "30px" }}
            subTitleProps={{ mb: "25px" }}
          />
          <Col xs="12" className="col-lg-6 col-md-12 mb-5 mb-lg-7">
            <About.Box>
              <About.Text mrLG="30px">{content?.textLeft}</About.Text>
            </About.Box>
          </Col>
          <Col xs="12" className="col-lg-6 col-md-12 mb-5 mb-lg-7">
            <About.Box>
              <About.Text mrLG="30px">{content?.textRight}</About.Text>
            </About.Box>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col xs="12" className="col-xl-6 col-lg-6 col-md-8 col-xs-10">
            <About.Image>
              <GatsbyImage
                className={"about-image"}
                image={image}
                alt="about image"
              />
              <Video
                id={content?.video}
                className="video-btn btn-primary sonar-emitter"
              >
                <i className="fa fa-play" />{" "}
              </Video>
            </About.Image>
          </Col>
          <Col
            col="12"
            className="col-xxl-5 offset-xxl-1 col-lg-5 col-md-8 col-xs-10"
          >
            <About.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
              <About.Widget>
                {/* Single Widget */}
                {content.values?.map(value => {
                  return (
                    <ContentWidget
                      key={value.name}
                      icon={value.image}
                      title={value.name}
                      text={value.desc}
                      iconBackground={value.color}
                    />
                  )
                })}
              </About.Widget>
            </About.Content>
          </Col>
        </Row>
        {/*/ .about-us Content */}
      </Container>
    </About>
  )
}

{
  /* <SectionTitleBlock 
subTitle="Watch video" 
title="Consultation Trade
Easier Than Ever"
text="Scale up and down easily as your business demands. And make use of business-grade consultation. Book flexibly by the day, week or longer and customise the layout to reflect your brand."
titleProps={{mb:"30px"}}
subTitleProps={{mb:"25px"}}
/> */
}
