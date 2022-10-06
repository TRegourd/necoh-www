import React from "react"

import { Link } from "~components"
import Card from "./style"
export default function ServicesCard() {
  return (
    <Card className="bg-primary">
      <Card.Title fontColor="#fff">Candidature Spontanée</Card.Title>

      <Card.Button
        className="btn-secondary"
        as={Link}
        to={`mailto:contact@necoh.fr?subject=Candidature%20spontanee`}
      >
        Postuler
      </Card.Button>
    </Card>
  )
}
