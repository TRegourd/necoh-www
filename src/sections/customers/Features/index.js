import React from "react"
import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import { Images } from "~data"
import TabContentWidget from "./Component/TabContentWidget"
import TabNavWidget from "./Component/TabNavWidget"
import Feature from "./style"
import NecohSymbol from "../../../assets/image/Necoh_Symbole.png"
const FeatureSection = ({ content, ...rest }) => {
  return (
    <Feature className="bg-secondary">
      <Feature.Shapes>
        <img src={NecohSymbol} alt="shape1" className="w-100" />
      </Feature.Shapes>

      <Container>
        <Row>
          <Col xs="auto" className="col-xl-8 col-lg-10">
            <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
              <Feature.Title className="mb-5" as="h2" fontColor="#fff">
                {content?.title}
              </Feature.Title>
              <Feature.Text className="mt-8" fontColor="#fff">
                {content.subtitle}
              </Feature.Text>
            </Feature.Box>
          </Col>
        </Row>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Feature.Tab>
            <Col className="col-xxl-3 col-lg-3 col-md-12 col-xs-10 col-12">
              <Feature.TabNavWrapper className="nav row ms-0 me-0" as={Nav}>
                {content.features?.map((feature, index) => {
                  if (index === 0) {
                    return (
                      <Nav.Link
                        eventKey={"first"}
                        key={feature.title}
                        className="nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                      >
                        <TabNavWidget
                          iconClass="fa fa-arrow-circle-right"
                          text={feature.title}
                          className="nav-widget"
                          mb="30px"
                          mbLG="50px"
                        />
                      </Nav.Link>
                    )
                  } else {
                    return (
                      <Nav.Link
                        eventKey={feature.title}
                        key={feature.title}
                        className="nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                      >
                        <TabNavWidget
                          iconClass="fa fa-arrow-circle-right"
                          text={feature.title}
                          className="nav-widget"
                          mb="30px"
                          mbLG="50px"
                        />
                      </Nav.Link>
                    )
                  }
                })}
              </Feature.TabNavWrapper>
            </Col>
            <Col xs="auto" className="col-xxl-9 col-lg-9 col-md-12 col-sm-12">
              <Tab.Content className="tab-content tab-content--feature">
                {content.features?.map((feature, index) => {
                  if (index === 0) {
                    return (
                      <Tab.Pane eventKey={"first"} key={feature.title}>
                        <Row className="align-items-center">
                          <Col xs="auto">
                            <TabContentWidget
                              count="01."
                              title={feature.subtitle}
                              text={feature.desc}
                            />
                          </Col>
                        </Row>
                      </Tab.Pane>
                    )
                  } else {
                    return (
                      <Tab.Pane eventKey={feature.title} key={feature.title}>
                        <Row className="align-items-center">
                          <Col xs="auto">
                            <TabContentWidget
                              title={feature.subtitle}
                              text={feature.desc}
                            />
                          </Col>
                        </Row>
                      </Tab.Pane>
                    )
                  }
                })}
              </Tab.Content>
            </Col>
          </Feature.Tab>
        </Tab.Container>
      </Container>
    </Feature>
  )
}

export default FeatureSection
