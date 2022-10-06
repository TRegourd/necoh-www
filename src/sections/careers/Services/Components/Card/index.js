import { icons } from "../../../../../libs/icons"
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
  return (
    <Card itemCenter={true} backgroundColor="#fff" {...rest}>
      <Card.Icon as="div" background={iconBackground}>
        <img src={icons[icon]} alt="icon" />
      </Card.Icon>
      <Card.Title as="h4">{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
    </Card>
  )
}
