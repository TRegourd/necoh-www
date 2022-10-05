import React from "react"
import { StaticImage as Img } from "gatsby-plugin-image"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "~components"
import About from "./style"
import SectionTitle from "./Components/SectionTitle"
import ContentWidget from "./Components/Widget"
import Video from "~components/VideoModal"
export default function AboutSection() {
  return (
    <About>
      <Container>
        {/* about-us Content */}
        <Row className="align-items-center justify-content-center">
          <Col xs="12" className="col-xl-6 col-lg-6 col-md-8 col-xs-10">
            <About.Image>
              <Img
                className="w-100"
                src="../../../assets/image/home-agency/about-us-l5-img.png"
                alt="about"
                layout="fullWidth"
                placeholder="blurred"
              />
              <Video
                id="LWZ7iytIA6k"
                className="video-btn btn-primary sonar-emitter"
              >
                {" "}
                <i className="fa fa-play" />{" "}
              </Video>
            </About.Image>
          </Col>
          <Col
            col="12"
            className="col-xxl-5 offset-xxl-1 col-lg-5 col-md-8 col-xs-10"
          >
            <About.Content mt="40px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
              <SectionTitle
                subTitle="Watch video"
                title="Watch how we work"
                titleProps={{ mb: "30px" }}
                subTitleProps={{ mb: "25px" }}
              />
              <About.Widget>
                {/* Single Widget */}
                <ContentWidget
                  icon={"fa fa-rocket"}
                  title={"Fast Working Process"}
                  text={
                    "Corporate headquarters is the part of a corporate structure that deals with important"
                  }
                />
                {/* Single Widget */}
                <ContentWidget
                  icon={"fa fa-hammer"}
                  title={"Dedicated Team"}
                  text={
                    "Corporate headquarters is the part of a corporate structure that deals with important"
                  }
                />
                {/* Single Widget */}
                <ContentWidget
                  icon={"fa fa-hourglass"}
                  title={"24/7 Hours Support"}
                  text={
                    "Corporate headquarters is the part of a corporate structure that deals with important"
                  }
                />
              </About.Widget>
            </About.Content>
          </Col>
        </Row>
        {/*/ .about-us Content */}
      </Container>
    </About>
  )
}

{
  /* <SectionTitleBlock 
subTitle="Watch video" 
title="Consultation Trade
Easier Than Ever"
text="Scale up and down easily as your business demands. And make use of business-grade consultation. Book flexibly by the day, week or longer and customise the layout to reflect your brand."
titleProps={{mb:"30px"}}
subTitleProps={{mb:"25px"}}
/> */
}
