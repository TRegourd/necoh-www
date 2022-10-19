import dayjs from "dayjs"

import React from "react"
import { SuperTag } from "~components"
import Card from "./style"
import { GatsbyImage } from "gatsby-plugin-image"
export default function BlogCard({ post }) {
  return (
    <Card>
      <Card.Image>
        <GatsbyImage
          image={post?.localImage?.childImageSharp?.gatsbyImageData}
          alt={post?.title}
        />
      </Card.Image>
      <Card.OvaerlayBlock>
        <Card.Top mb="20px">
          <Card.Badge backgroundColor="#6e0f0b90">FaceBook</Card.Badge>
          <Card.Date>{dayjs(post?.isoDate).format("DD-MM-YYYY")}</Card.Date>
        </Card.Top>
        <Card.Title>
          {" "}
          <SuperTag value={post?.contentSnippet.slice(0, 100) + "..."} />
        </Card.Title>
        <Card.User>
          <a href={post.link} target="_blank">
            <i className="fab fa-facebook"></i>{" "}
            <SuperTag value={"Voir sur Facebook"} />
          </a>
        </Card.User>
      </Card.OvaerlayBlock>
    </Card>
  )
}
