import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "~components"
import Details from "./style"
import { GatsbyImage, StaticImage as Img } from "gatsby-plugin-image"
import dayjs from "dayjs"
import Markdown from "markdown-to-jsx"
import Sidebar from "./Component/Sidebar"
export default function BlogDetails({ content, articlesList }) {
  const nextArticle = () => {
    return articlesList[
      articlesList.indexOf(
        articlesList.find(article => article.id === content.id)
      ) + 1
    ]?.id
  }

  const prevArticle = () => {
    return articlesList[
      articlesList.indexOf(
        articlesList.find(article => article.id === content.id)
      ) - 1
    ]?.id
  }

  return (
    <Details backgroundColor="#f9fafc">
      <Details.Box pb="60px" pbMD="80px" pbLG="130px">
        <Container>
          <Details.Pagination mt="30px" mtLG="75px" mb="50px">
            <Details.PrevButton>
              <Link className="btn-link" to="/articles">
                <i className="fa fa-arrow-left" />
                Retour aux articles
              </Link>
            </Details.PrevButton>
          </Details.Pagination>
          <Row className="justify-content-center">
            <Col className="col-lg-7">
              <Details.Box mb="30px" mbLG="55px">
                <Details.Title as="h1">{content?.title}</Details.Title>
                <Details.MetaInfo>
                  <Details.Date>
                    {dayjs(content?.isoDate).format("DD-MM-YYYY")}
                  </Details.Date>
                </Details.MetaInfo>
              </Details.Box>
              <Details.Box>
                <Details.Image mb="35px" mbLG="55px"></Details.Image>
                <Details.Text>
                  <Markdown>{content.content}</Markdown>
                </Details.Text>

                <Details.Tag mt="50px">
                  <Details.SubTitle mr="25px" mt="10px" as="h4">
                    Catégories:
                  </Details.SubTitle>
                  <Details.TagList>
                    {content.categories.map(category => {
                      return (
                        <li key={category}>
                          <Link>{category}</Link>
                        </li>
                      )
                    })}
                  </Details.TagList>
                </Details.Tag>
                <Details.Pagination mt="30px" mtLG="75px" mb="50px">
                  <Details.PrevButton>
                    <Link
                      className="btn-link"
                      to={`/articles/${prevArticle() ? prevArticle() : ""}`}
                    >
                      <i className="fa fa-arrow-left" />
                      Précédent
                    </Link>
                  </Details.PrevButton>
                  <Details.NextButton>
                    <Link
                      className="btn-link"
                      to={`/articles/${nextArticle() ? nextArticle() : ""}`}
                    >
                      Suivant
                      <i className="fa fa-arrow-right" />
                    </Link>
                  </Details.NextButton>
                </Details.Pagination>
              </Details.Box>
            </Col>
            <Col xs="12" className="col-xl-4 offset-xl-1 col-lg-5">
              <Sidebar articles={articlesList} />
            </Col>
          </Row>
        </Container>
      </Details.Box>
    </Details>
  )
}
