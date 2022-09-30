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
    <Card
      hoverbackground="#f39200"
      elemColor="#262729"
      backgroundColor="#fff"
      {...rest}
    >
      <Card.Top mb="20px">
        <Card.UserBlock>
          <Card.Image mr="10px">
            <GatsbyImage image={avatar} alt="Testimonial" />
          </Card.Image>
          <Card.Box>
            <Card.Title as="h3">{userName}</Card.Title>
            <Card.UserPosition>{userPosition}</Card.UserPosition>
          </Card.Box>
        </Card.UserBlock>
        <Card.Icon>
          <i className={icon} />
        </Card.Icon>
      </Card.Top>
      <Card.Text>{text}</Card.Text>
    </Card>
  )
}
