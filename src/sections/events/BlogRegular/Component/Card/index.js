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
        {postImg && inView && <img src={postImg[1]} alt={post.title} />}
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
