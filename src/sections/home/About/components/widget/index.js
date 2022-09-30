import React from "react"
import Widget from "./style"
import logo from "../../../../../assets/image/favicon.png"
export default function AboutWidget({ title, text, icon, ...rest }) {
  return (
    <Widget {...rest}>
      <Widget.Icon>
        <img src={logo} alt="content" placeholder="blurred" />
      </Widget.Icon>
      <Widget.Box>
        <Widget.Title as="h5">{title}</Widget.Title>
        <Widget.Text>{text}</Widget.Text>
      </Widget.Box>
    </Widget>
  )
}
