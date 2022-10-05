import React from "react"
import { SuperTag } from "~components"
import Widget from "./style"
import Markdown from "markdown-to-jsx"

export default function TabContentWidget({ count, title, text, ...rest }) {
  return (
    <Widget {...rest}>
      <Widget.Title as="h5">{title}</Widget.Title>
      <Widget.Text>
        <Markdown>{text}</Markdown>
      </Widget.Text>
    </Widget>
  )
}
