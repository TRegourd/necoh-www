import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Card from "./Component/Card"
import Job from "./style"

import dayjs from "dayjs"
import SectionTitleBlock from "./Component/SectionTitle"

export default function JobSection({ jobsList }) {
  return (
    <Job>
      <Container>
        <Row className="justify-content-center">
          <Col xs="12 text-center">
            <SectionTitleBlock
              title="Nos offres d'emploi"
              titleProps={{ mb: "10px" }}
              textProps={{ mb: "63px" }}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="12" className="col-xl-8 offset-xl-1 col-lg-9 col-md-8">
            <Job.Tab>
              <Row className="justify-content-center justify-content-md-start">
                {jobsList.map(({ title, location, type, date }, index) => {
                  return (
                    <Col
                      className="col-lg-6 col-md-12 col-xs-8"
                      key={"jobId" + index}
                    >
                      <Card
                        title={title}
                        address={location}
                        hours={dayjs(date).format("DD/MM/YYYY")}
                        time={type}
                      />
                    </Col>
                  )
                })}
              </Row>
            </Job.Tab>
          </Col>
        </Row>
      </Container>
    </Job>
  )
}
