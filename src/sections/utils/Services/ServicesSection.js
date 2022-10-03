import React from "react"
import Services from "./style"
import { Container, Row } from "react-bootstrap"
import ServicesCard from "./Components/Card"

export default function ServicesSection({ list }) {
  return (
    <Services backgroundColor="#f3f4f6">
      <Container>
        <Row className="justify-content-center">
          {list?.map(({ name, logo, desc, color, link }) => {
            return (
              <Services.Box
                mb="25px"
                xs="12"
                className="col-xl-3 col-lg-4 col-md-6 col-sm-9 col-xs-10"
                key={name}
              >
                <ServicesCard
                  title={name}
                  text={desc}
                  icon={logo}
                  to={link}
                  iconBackground={color ? color : "#fff"}
                />
              </Services.Box>
            )
          })}
        </Row>
      </Container>
    </Services>
  )
}
