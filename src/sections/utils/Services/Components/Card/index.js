import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { Link } from "~components"
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
    <Card as={Link} to={to}>
      <Card.Icon iconBackground={iconBackground}>
        <GatsbyImage image={logo} alt={title + "logo"} />
      </Card.Icon>
      <Card.Title as="h3">{title}</Card.Title>
      <Card.Text as="p">{text}</Card.Text>
    </Card>
  )
}
