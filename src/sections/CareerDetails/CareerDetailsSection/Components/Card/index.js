import dayjs from "dayjs"
import React from "react"
import { Link } from "~components"
import Card from "./style"
export default function CareerCard({ job }) {
  return (
    <Card>
      <Card.Box>
        <Card.Title fontColor="#262729">{job.title}</Card.Title>
        <Card.List>
          <Card.ListItem>
            <i className="fa fa-map-marker-alt text-primary" /> {job.location}
          </Card.ListItem>
          <Card.ListItem>
            <i className="fa fa-briefcase text-primary" /> {job.type}
          </Card.ListItem>
          <Card.ListItem>
            <i className="fa fa-clock text-primary" />{" "}
            {dayjs(job.date).format("DD/MM/YYYY")}
          </Card.ListItem>
        </Card.List>
      </Card.Box>
      <Card.ButtonGroup>
        <Card.Button
          mb="10px"
          className="btn btn-primary text-white box-shadow"
          as={Link}
          to={
            job.link
              ? job.link
              : `mailto:contact@necoh.fr?subject=Candidature%20au%20poste%20de%20${job.title}`
          }
        >
          Postuler
        </Card.Button>
      </Card.ButtonGroup>
    </Card>
  )
}
