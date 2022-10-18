import dayjs from "dayjs"
import React from "react"
import { SuperTag } from "~components"
import Card from "./style"
import { GatsbyImage } from "gatsby-plugin-image"
import slugify from "slugify"
export default function BlogCard({ post, images }) {
  return (
    <Card>
      <Card.Image>
        <GatsbyImage
          image={
            images?.find(img => {
              return img.parent.internal.description?.includes(
                post.enclosure.url?.replace(/%[0-9A-Fa-f][0-9A-Fa-f]/g, "/")
              )
            })?.gatsbyImageData
          }
          alt={post?.title}
        />
      </Card.Image>
      <Card.OvaerlayBlock>
        <Card.Top mb="20px">
          <Card.BadgeContainer>
            {post?.categories?.map(category => {
              return (
                category !== "Actualités" && (
                  <Card.Badge backgroundColor="#6e0f0b90" key={category}>
                    {category}
                  </Card.Badge>
                )
              )
            })}
          </Card.BadgeContainer>
          <Card.Date>{dayjs(post?.isoDate).format("DD-MM-YYYY")}</Card.Date>
        </Card.Top>
        <Card.Title>
          <a href={`/articles/${slugify(post?.title)}`}>
            <SuperTag value={post?.title} />
          </a>
        </Card.Title>
        <Card.User>
          <a href={`/articles/${slugify(post?.title)}`}>
            <i className="fab fa-medapps" />
            <SuperTag value={"Lire la suite"} />
          </a>
        </Card.User>
      </Card.OvaerlayBlock>
    </Card>
  )
}
