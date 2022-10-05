import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Widget from "./style"
export default function ContentWidget({
  icon,
  title,
  text,
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
    <Widget backgroundColor="#fff" {...rest}>
      <Widget.Icon backgroundColor={iconBackground}>
        <GatsbyImage className={"value-icon"} image={logo} alt="logo" />
      </Widget.Icon>
      <Widget.Box>
        <Widget.Title as="h4">{title}</Widget.Title>
        <Widget.Text fontColor="#667378">{text}</Widget.Text>
      </Widget.Box>
    </Widget>
  )
}
