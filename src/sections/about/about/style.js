import styled from "styled-components/macro"
import { Box, Heading, Button, Paragraph } from "~styled"

const About = styled(Box)`
  padding-top: 60px;
  padding-bottom: 10px;
  @media (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 40px;
  }

  @media (min-width: 992px) {
    padding-top: 100px;
    padding-bottom: 30px;
  }
`
About.Content = styled(Box)``
About.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.3;
  position: relative;
  @media (min-width: 768px) {
    font-size: 38px;
  }

  @media (min-width: 992px) {
    font-size: 48px;
  }
`
About.Subtitle = styled(Heading)`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.75;
`
About.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.77777;
  text-align: justify;
`
About.ButtonGroup = styled(Box)`
  margin-right: -17.0656px;
  display: flex;
  flex-wrap: wrap;
`

About.Image = styled(Box)`
  .video-btn {
    min-width: 96px;
    max-width: 96px;
    min-height: 96px;
    max-height: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border-color: transparent;
  }
`

About.Button = styled(Button)`
  margin-right: 17.0656px;
  border-radius: 500px;
  color: #fff;
  min-width: 140px;
  height: 56px;
  margin-top: 15px;
  @media (min-width: 1200px) {
    min-width: 165px;
    height: 60px;
  }
`

About.Box = styled(Box)``

About.Widget = styled(Box)``

export default About
