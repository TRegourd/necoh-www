import dayjs from "dayjs"
import React from "react"
import slugify from "slugify"
import { Link } from "~components"
import Card from "./style"
export default function ServicesCard({ title, address, hours, time, ...rest }) {
  return (
    <Card backgrounColor="#fff">
      <Card.Title fontColor="#262729">{title}</Card.Title>
      <Card.Listwrapper>
        <Card.List fontColor="#262729b3">
          <i className="fa fa-map-marker-alt text-primary" />
          {address}
        </Card.List>
        <Card.List fontColor="#262729b3">
          <i className="fa fa-briefcase text-primary" />
          {time}
        </Card.List>
        {/* <Card.List fontColor="#262729b3">
          <i className="fa fa-clock text-primary" /> {hours}
        </Card.List> */}
      </Card.Listwrapper>
      <Card.Button
        className="btn-secondary"
        as={Link}
        to={`/emploi/${slugify(title + hours)}`}
      >
        Voir l'offre
      </Card.Button>
    </Card>
  )
}
