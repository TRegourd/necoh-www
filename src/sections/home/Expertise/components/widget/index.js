import React from "react"
import Widget from "./style"
import logo from "../../../../../assets/image/favicon.png"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
export default function AboutWidget({
  title,
  text,
  linkText,
  linkUrl,
  icon,
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
    <Widget {...rest}>
      <Widget.Icon>
        <GatsbyImage image={logo} alt="content" loading="eager" />
      </Widget.Icon>
      <Widget.Box>
        <Widget.Title as="h5">{title}</Widget.Title>
        {/* <Widget.Text>{text}</Widget.Text> */}
        <Widget.Link>
          <a href={linkUrl}>
            <i className="fa fa-external-link-alt" />
            <span>{linkText}</span>
          </a>
        </Widget.Link>
      </Widget.Box>
    </Widget>
  )
}
