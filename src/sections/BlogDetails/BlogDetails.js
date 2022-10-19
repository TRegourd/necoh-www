import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "~components"
import Details from "./style"
import { GatsbyImage, StaticImage as Img } from "gatsby-plugin-image"
import dayjs from "dayjs"
import Markdown from "markdown-to-jsx"
import Sidebar from "./Component/Sidebar"
import slugify from "slugify"
export default function BlogDetails({ content, articlesList }) {
  const nextArticle = () => {
    const nextArticleTitle =
      articlesList[
        articlesList.indexOf(
          articlesList.find(article => article.id === content.id)
        ) + 1
      ]?.title

    return nextArticleTitle ? slugify(nextArticleTitle) : ""
  }

  const prevArticle = () => {
    const prevArticleTitle =
      articlesList[
        articlesList.indexOf(
          articlesList.find(article => article.id === content.id)
        ) - 1
      ]?.title

    return prevArticleTitle ? slugify(prevArticleTitle) : ""
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
                <Details.Image mb="35px" mbLG="55px">
                  {" "}
                  <GatsbyImage
                    image={
                      content?.localImage?.childImageSharp?.gatsbyImageData
                    }
                    alt={content?.title}
                  />
                </Details.Image>
                {/* <Details.Title as="h1">{content?.title}</Details.Title> */}
                <Details.MetaInfo>
                  <Details.Date>
                    {dayjs(content?.isoDate).format("DD-MM-YYYY")}
                  </Details.Date>
                </Details.MetaInfo>
              </Details.Box>
              <Details.Box>
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
                          <span>{category}</span>
                        </li>
                      )
                    })}
                  </Details.TagList>
                </Details.Tag>
                <Details.Pagination mt="30px" mtLG="75px" mb="50px">
                  <Details.PrevButton>
                    <Link
                      className="btn-link"
                      to={`/articles/${prevArticle()}`}
                    >
                      <i className="fa fa-arrow-left" />
                      Précédent
                    </Link>
                  </Details.PrevButton>
                  <Details.NextButton>
                    <Link
                      className="btn-link"
                      to={`/articles/${nextArticle()}`}
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
