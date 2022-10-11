import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Blog from "./style"
import BlogCard from "./Component/Card"
import Sidebar from "~sections/articles/Sidebar"
export default function BlogSidebarOne({ articles }) {
  return (
    <Blog backgroundColor="#f9fafc">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-8 text-center">
            <Blog.Box mb="63px">
              <Blog.Subtitle as="h6" className="text-secondary">
                Articles
              </Blog.Subtitle>
              <Blog.Title as="h2">Les dernières informations</Blog.Title>
            </Blog.Box>
          </Col>
        </Row>
        <Row>
          <Col
            xs="12"
            className="col-xl-4 col-lg-5 mt-5 mt-lg-0 order-2 order-lg-1"
          >
            <Sidebar />
          </Col>
          <Col xs="12" className="col-xl-8 col-lg-7 order-1 order-lg-2">
            <Row className="justify-content-xl-center">
              {articles &&
                articles
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
            <Blog.Box mtLG="50px" mt="30px">
              <Row className="justify-content-xl-center">
                <Col xs="12" className="col-xl-8">
                  <Blog.Paginations className="list-unstyled text-xl-center mx-auto">
                    <li>
                      <a href="#">
                        <i className="fa fa-chevron-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">...</a>
                    </li>
                    <li>
                      <a href="#">5</a>
                    </li>
                    <li>
                      <a href="#">6</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-chevron-right" />
                      </a>
                    </li>
                  </Blog.Paginations>
                </Col>
              </Row>
            </Blog.Box>
          </Col>
        </Row>
      </Container>
    </Blog>
  )
}
