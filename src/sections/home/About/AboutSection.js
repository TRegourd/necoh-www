import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Feature from "./style"
import { GatsbyImage, getImage, StaticImage as Img } from "gatsby-plugin-image"
import SectionTitle from "./Components/SectionTitle"
import CounterBlock from "./Components/CounterBlock"
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
    <Feature backgroundColor="#f3f4f6">
      <Container>
        {/* Section Title */}
        <Row>
          <Col className="col-xl-8 col-lg-10">
            <Feature.Box>
              <SectionTitle
                subTitle={content?.subtitle}
                title={content?.title}
                titleProps={{ mb: "33px" }}
                subTitleProps={{ mb: "20px" }}
              />
            </Feature.Box>
          </Col>
        </Row>
        <Row>
          <Col xs="12" className="col-lg-6 col-md-12 mb-5 mb-lg-7">
            <Feature.Box>
              <Feature.Text mrLG="30px">{content?.textLeft}</Feature.Text>
            </Feature.Box>
          </Col>
          <Col xs="12" className="col-lg-6 col-md-12 mb-5 mb-lg-7">
            <Feature.Box>
              <Feature.Text mrLG="30px">{content?.textRight}</Feature.Text>
            </Feature.Box>
          </Col>
        </Row>
        {/*/ .Section Title */}
        {/* Feature Content */}
        <Row className="align-items-center justify-content-center">
          <Col xs="12" className="col-lg-6 col-md-12">
            <Feature.Image mb="30px">
              <GatsbyImage image={image} alt="about image" />
            </Feature.Image>
          </Col>
          <Col className="col-lg-6 col-md-12">
            <Feature.Box>
              {/* Feature List */}
              <Feature.Contentlist mbLG="65px" mb="30px">
                {content?.features?.map(feature => {
                  return <Feature.List>{feature.name}</Feature.List>
                })}
              </Feature.Contentlist>
              {/*/ .Feature List */}
              <CounterBlock mt="50px" numbers={content?.numbers} />
            </Feature.Box>
          </Col>
        </Row>
        {/*/ .Feature Content */}
      </Container>
    </Feature>
  )
}
