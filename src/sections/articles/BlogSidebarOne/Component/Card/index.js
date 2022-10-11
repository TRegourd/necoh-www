import dayjs from "dayjs"
import { useInView } from "react-intersection-observer"
import React from "react"
import { SuperTag } from "~components"
import Card from "./style"
export default function BlogCard({ post }) {
  const { ref, inView } = useInView()
  let postImg = post?.content.match(
    /\<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/
  )

  return (
    <Card ref={ref}>
      <Card.Image>
        {postImg && inView && <img src={postImg[1]} alt={post?.title} />}
      </Card.Image>
      <Card.OvaerlayBlock>
        <Card.Top mb="20px">
          <Card.BadgeContainer>
            {post?.categories?.map(category => {
              return (
                <Card.Badge backgroundColor="#f39200">{category}</Card.Badge>
              )
            })}
          </Card.BadgeContainer>
          <Card.Date to="/blog/blog-details">
            {dayjs(post?.isoDate).format("DD-MM-YYYY")}
          </Card.Date>
        </Card.Top>
        <Card.Title>
          {" "}
          <SuperTag value={post?.title} />
        </Card.Title>
        <Card.User>
          <a href={post?.link}>
            <i className="fas fa-external-link-alt" />
            <SuperTag value={"Voir sur le site de Weblex"} />
          </a>
        </Card.User>
      </Card.OvaerlayBlock>
    </Card>
  )
}
