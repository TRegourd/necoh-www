import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Blog from "./style"
import BlogCard from "./Component/Card"

export default function BlogRegular({ feed, content }) {
  return (
    <Blog backgroundColor="#f9fafc">
      <Container>
        <Row className="justify-content-center">
          {feed &&
            feed
              .filter(post => {
                return post.contentSnippet !== ""
              })
              .map((post, index) => {
                return (
                  <Col
                    xs="12"
                    className="col-lg-4 col-md-6 col-xs-9"
                    key={"bsp" + index}
                  >
                    <BlogCard post={post} />
                  </Col>
                )
              })}
        </Row>
      </Container>
    </Blog>
  )
}
