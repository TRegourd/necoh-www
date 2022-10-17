import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Blog from "./style"
import BlogCard from "./Component/Card"
import Sidebar from "~sections/articles/Sidebar"
import { filterArticles } from "../../../libs/filterArticles"
export default function BlogSidebarOne({ articles, images }) {
  const [filteredArticles, setFilteredArticles] = useState(articles)
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(12)

  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const paginatedArticles = filteredArticles.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  )
  const nPages = Math.ceil(filteredArticles.length / recordsPerPage)

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (e.type === "submit" && e.target[1].value) {
      setFilteredArticles(filterArticles(articles, e.target[1].value))
    }
  }

  const handleClick = e => {
    e.preventDefault()
    if (e.target.className.includes("clickable")) {
      setFilteredArticles(filterArticles(articles, ""))
      if (e.target.textContent !== "Tous les articles") {
        setFilteredArticles(
          filterArticles(articles, e.target.textContent?.toLowerCase())
        )
      }
    }
  }

  useEffect(() => {}, [filteredArticles])

  return (
    <Blog backgroundColor="#f9fafc">
      <Container>
        <Row>
          <Col
            xs="12"
            className="col-xl-4 col-lg-5 mt-5 mt-lg-0 order-2 order-lg-1"
          >
            <Sidebar
              handleSubmit={handleSubmit}
              articles={articles}
              handleClick={handleClick}
            />
          </Col>
          <Col xs="12" className="col-xl-8 col-lg-7 order-1 order-lg-2">
            <Row className="justify-content-xl-center">
              {paginatedArticles &&
                paginatedArticles
                  .filter(post => {
                    return post.contentSnippet !== ""
                  })
                  .map(post => {
                    return (
                      <Col
                        xs="12"
                        className="col-xl-4 col-lg-6 col-md-6 col-xs-9"
                        key={post.title + post?.isoDate}
                      >
                        <BlogCard post={post} images={images} />
                      </Col>
                    )
                  })}
            </Row>
            <Blog.Box mtLG="50px" mt="30px">
              <Row className="justify-content-xl-center">
                <Col xs="12" className="col-xl-8">
                  <Blog.Paginations className="list-unstyled text-xl-center mx-auto">
                    <li>
                      <a href="#" onClick={prevPage} aria-label={"previous"}>
                        <i className="fa fa-chevron-left" />
                      </a>
                    </li>
                    {currentPage > 1 && (
                      <>
                        <li
                          className={`page-item ${
                            currentPage == 1 ? "active" : ""
                          } `}
                        >
                          <a
                            onClick={() => setCurrentPage(1)}
                            className="page-link"
                            href="#"
                            aria-label={"page number"}
                          >
                            {1}
                          </a>
                        </li>
                        {currentPage > 2 && <li>...</li>}
                      </>
                    )}
                    {pageNumbers
                      .slice(currentPage - 1, currentPage)
                      .map(pgNumber => (
                        <li
                          key={pgNumber}
                          className={`page-item ${
                            currentPage == pgNumber ? "active" : ""
                          } `}
                        >
                          <a
                            onClick={() => setCurrentPage(pgNumber)}
                            className="page-link"
                            href="#"
                            aria-label={"page number"}
                          >
                            {pgNumber}
                          </a>
                        </li>
                      ))}
                    {currentPage < pageNumbers.length && (
                      <>
                        {currentPage < pageNumbers.length - 1 && <li>...</li>}
                        <li
                          className={`page-item ${
                            currentPage == pageNumbers.length ? "active" : ""
                          } `}
                        >
                          <a
                            onClick={() => setCurrentPage(pageNumbers.length)}
                            className="page-link"
                            href="#"
                            aria-label={"page number"}
                          >
                            {pageNumbers.length}
                          </a>
                        </li>
                      </>
                    )}
                    <li>
                      <a href="#" onClick={nextPage} aria-label={"next"}>
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
