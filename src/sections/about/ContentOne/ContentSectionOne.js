import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { GatsbyImage, getImage, StaticImage as Img } from "gatsby-plugin-image"
import Content from "./style"
import Markdown from "markdown-to-jsx"
import { graphql, useStaticQuery } from "gatsby"
export default function ContentSectionOne({ content, ...rest }) {
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
    <Content backgroundColor="fff" {...rest}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col
            xs="12"
            className="col-xxl-6 col-xl-7 col-lg-8 col-md-9 col-xs-11 order-2 order-lg-1"
          >
            <Content.Subtitle as="h6" className="text-secondary">
              {content.subtitle}
            </Content.Subtitle>
            <Content.Title as="h2" mb="13px">
              {content.title}
            </Content.Title>
            <Content.Text mb="45px" mbXL="65px">
              <Markdown>{content.text}</Markdown>
            </Content.Text>
          </Col>
          <Col
            xs="12"
            className="col-xxl-6 col-xl-5 col-lg-4 col-md-9 col-xs-10 order-1 order-lg-2"
          >
            <Content.Widget mb="30px" mbXL="0px">
              <GatsbyImage
                className="ceo-image"
                image={image}
                alt="CEO image"
              />
            </Content.Widget>
          </Col>
        </Row>
      </Container>
    </Content>
  )
}
