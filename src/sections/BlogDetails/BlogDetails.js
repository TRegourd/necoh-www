import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "~components"
import Details from "./style"
import { StaticImage as Img } from "gatsby-plugin-image"
import dayjs from "dayjs"
import Markdown from "markdown-to-jsx"
import Sidebar from "./Component/Sidebar"
export default function BlogDetails({ content, articlesList }) {
  console.log(articlesList)
  return (
    <Details backgroundColor="#f9fafc">
      <Details.Box pb="60px" pbMD="80px" pbLG="130px">
        <Container>
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
                <Details.Image mb="35px" mbLG="55px">
                  {/* <Img
                    className="w-100"
                    src="../../../assets/image/blogs/blog-details-img-1.png"
                    alt="Blog"
                    layout="constrained"
                    placeholder="blurred"
                  /> */}
                </Details.Image>
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
