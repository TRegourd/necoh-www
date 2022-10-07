import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Blog from "./style"
import BlogCard from "./Component/Card"

export default function BlogRegular({ feed }) {
  return (
    <Blog backgroundColor="#f9fafc">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-8 text-center">
            <Blog.Box mb="63px">
              <Blog.Subtitle as="h6" className="text-secondary">
                Actualités
              </Blog.Subtitle>
              <Blog.Title as="h2">Les Actualités Necoh</Blog.Title>
            </Blog.Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {feed &&
            feed
              .filter(post => {
                return post.contentSnippet !== ""
              })
              .map((post, index) => {
                if (index === 0) {
                  return (
                    <Col xs="12" key={"bsp" + index}>
                      <BlogCard post={post} />
                    </Col>
                  )
                } else
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
