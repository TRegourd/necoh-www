import React from "react"
import { GatsbyImage, getImage, StaticImage as Img } from "gatsby-plugin-image"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "~components"
import About from "./style"
import SectionTitle from "./Components/SectionTitle"
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
      return el.relativePath === content.image
    })?.childrenImageSharp[0]
  )
  return (
    <About>
      <Container>
        {/* about-us Content */}
        <Row className="align-items-center justify-content-center">
          <Col
            col="12"
            className="col-xl-5 col-lg-6 col-md-8 col-xs-11 order-2 order-lg-1"
          >
            <About.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
              <SectionTitle
                title={content.title}
                text={content.text}
                titleProps={{ mb: "20px" }}
                subTitleProps={{ mb: "25px" }}
              />
            </About.Content>
          </Col>
          <Col
            xs="12"
            className="col-xl-7 col-lg-6 col-md-8 col-xs-11 order-1 order-lg-2"
          >
            <About.Image>
              <GatsbyImage image={image} alt={content.title} />
              {/* <Video id="LWZ7iytIA6k" className="video-btn sonar-emitter">
                {" "}
                <i className="fa fa-play" />{" "}
              </Video> */}
            </About.Image>
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
