import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Card from "./style"
export default function ReferenceCard({ name, image, ...rest }) {
  return (
    <Card
      hoverbackground="#f39200"
      elemColor="#262729"
      backgroundColor="#fff"
      {...rest}
    >
      <Card.Image>
        <GatsbyImage image={image} alt={name} />
      </Card.Image>
    </Card>
  )
}
