import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import ServicesCard from "./Components/Card"
import Service from "./style"

export default function ServicesSection({ list, ...rest }) {
  return (
    <Service backgroundColor="#fff" {...rest}>
      <Container>
        {/* <Row className="justify-content-center">
          <Col xs="12 text-center">
          <SectionTitle 
                title="Join a Workplace That Gives You More"
                text="Learning opportunities, networking budgets, flexible hours, top <br class='d-none d-lg-block'/>
                benefits to keep employees healthy and happy."
                titleProps={{mb:"10px"}}
                textProps={{mb:"63px"}}
                />
          </Col>
        </Row> */}
        <Row className="justify-content-center">
          {list.map(({ title, logo, desc, color }) => {
            return (
              <Col
                xs="12"
                className="col-xl-4 col-lg-6 col-md-6 col-sm-9 col-xs-10 "
                key={title + color}
              >
                <ServicesCard
                  title={title}
                  text={desc}
                  icon={logo}
                  iconBackground={color}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    </Service>
  )
}
