import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

import Card from "./style"
export default function ServicesCard({
  icon,
  title,
  text,
  to,
  iconBackground,
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

  const logo = getImage(
    images.allFile.nodes?.find(el => {
      return el.relativePath === icon
    })?.childrenImageSharp[0]
  )
  return (
    <Card
      itemCenter={true}
      backgroundColor="#fff"
      iconBackground={iconBackground}
      {...rest}
    >
      <Card.Icon as="div">
        <GatsbyImage className={"icon-logo"} image={logo} alt={title} />
      </Card.Icon>
      <Card.Title as="h4">{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
    </Card>
  )
}
