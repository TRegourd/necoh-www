import styled from "styled-components/macro"
import { Box, Heading, Button, Paragraph } from "~styled"

const About = styled(Box)`
  padding-top: 30px;
  padding-bottom: 5px;

  @media (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 25px;
  }

  @media (min-width: 992px) {
    padding-top: 30px;
    padding-bottom: 0px;
  }
`

About.ImageContent = styled(Box)`
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
  width: 80%;
  margin: 0 auto;
`
About.Shape = styled(Box)`
  position: absolute;
  top: 40%;
  left: 70%;
  z-index: -1;
  transform: translate(-50%, -50%) rotate(180deg);
  width: 100%;
`
About.Box = styled(Box)``

export default About
