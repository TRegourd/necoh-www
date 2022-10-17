import React from "react"
import Widget from "./style"
import { GatsbyImage } from "gatsby-plugin-image"

export default function AboutWidget({
  title,
  text,
  linkText,
  linkUrl,
  icon,
  linkDirection,
  ...rest
}) {
  return (
    <Widget {...rest}>
      <Widget.Icon>
        <GatsbyImage image={icon} alt="content" loading="eager" />
      </Widget.Icon>
      <Widget.Box>
        <Widget.Title as="h5">{title}</Widget.Title>
        {/* <Widget.Text>{text}</Widget.Text> */}
        <Widget.Link>
          <a href={linkUrl} style={{ flexDirection: linkDirection }}>
            <i className="fa fa-external-link-alt" />
            <span>{linkText}</span>
          </a>
        </Widget.Link>
      </Widget.Box>
    </Widget>
  )
}
