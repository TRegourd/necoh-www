import React from "react"
import Widget from "./style"
import logo from "../../../../../assets/image/favicon.png"
export default function AboutWidget({
  title,
  text,
  linkText,
  linkUrl,
  icon,
  ...rest
}) {
  return (
    <Widget {...rest}>
      <Widget.Icon>
        <img src={logo} alt="content" placeholder="blurred" />
      </Widget.Icon>
      <Widget.Box>
        <Widget.Title as="h5">{title}</Widget.Title>
        <Widget.Text>{text}</Widget.Text>
        <Widget.Link>
          <a href={linkUrl} className="flex flew-row gap-2">
            <i className="fa fa-external-link-alt" />
            <span className="pl-10 ">{linkText}</span>
          </a>
        </Widget.Link>
      </Widget.Box>
    </Widget>
  )
}
