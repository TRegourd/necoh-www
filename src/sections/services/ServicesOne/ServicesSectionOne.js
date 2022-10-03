import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import ServiceData from "~data/startup/service"
import Service from "./style"
import SectionTitle from "./Components/SectionTitle"
import ServicesCard from "./Components/Card"
export default function ServicesSectionOne({ content, color }) {
  console.log(content)
  return (
    <Service>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-8 text-center">
            <SectionTitle
              subTitle="Notre accompagnement"
              subTitleProps={{
                mb: "10px",
                className: "subline",
                fontColor: color,
              }}
            />
          </Col>
        </Row>
        <Row
          className="justify-content-center aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration={500}
          data-aos-delay={500}
          data-aos-once="true"
        >
          {/* Single Services */}
          {content?.map(({ title, icon, desc }) => {
            return (
              <Col
                xs="h2"
                className="col-xl-3 col-lg-4 col-sm-6 col-xs-8"
                key={title}
              >
                <ServicesCard
                  title={title}
                  text={desc}
                  icon={icon ? icon : ""}
                  iconBackground={color}
                />
              </Col>
            )
          })}
          {/*/ .Single Services */}
        </Row>
      </Container>
    </Service>
  )
}
