import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Card from "./style"
export default function TestiomialCard({
  userName,
  userPosition,
  text,
  icon,
  image,
  ...rest
}) {
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

  const avatar = getImage(
    images.allFile.nodes?.find(el => {
      return el.relativePath === image
    })?.childrenImageSharp[0]
  )

  return (
    <Card>
      <Card.Body backgroundColor="#fff">
        <Card.Text>{text}</Card.Text>
        <Card.UserBlock>
          <Card.Image>
            <GatsbyImage image={avatar} alt="Testimonial" />
          </Card.Image>
          <Card.UserTexts>
            <Card.Title as="h3">{userName}</Card.Title>
            <Card.UserPosition>{userPosition}</Card.UserPosition>
          </Card.UserTexts>
        </Card.UserBlock>
      </Card.Body>
      <Card.Icon>
        <i className={icon} />
      </Card.Icon>
    </Card>
  )
}
