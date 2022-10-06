import React from "react"
import { SuperTag } from "~components"
import { icons } from "../../../../../libs/icons"
import Widget from "./style"

export default function ServiceWidget({ icon, title, text, ...rest }) {
  return (
    <Widget {...rest}>
      <Widget.Icon>
        <img src={icons[icon]} />
      </Widget.Icon>
      <Widget.Body>
        <Widget.Title>{title}</Widget.Title>
        <Widget.Text>
          <SuperTag value={text} />
        </Widget.Text>
      </Widget.Body>
    </Widget>
  )
}
