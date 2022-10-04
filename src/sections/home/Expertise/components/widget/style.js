import styled from "styled-components/macro"
import { Box, Heading, Button, Paragraph, ButtonLink } from "~styled"

const Widget = styled(Box)`
  display: flex;
  margin-bottom: 30px;
  transition: 0.3s;
  @media (min-width: 1600px) {
    margin-bottom: 60px;
  }
  flex-direction: ${props =>
    props.direction ? props => props.direction : "column"};
  @media (min-width: 480px) {
    flex-direction: ${props =>
      props.directionXS ? props => props.directionXS : null};
    text-align: ${props =>
      props.directionXS == "row-reverse" ? "right" : null};
  }
  @media (min-width: 575px) {
    flex-direction: ${props => props.directionSM};
    text-align: ${props =>
      props.directionSM == "row-reverse" ? "right" : null};
  }
  @media (min-width: 768px) {
    flex-direction: ${props => props.directionMD};
    text-align: ${props =>
      props.directionMD == "row-reverse" ? "right" : null};
  }
  @media (min-width: 992px) {
    flex-direction: ${props => props.directionLG};
    text-align: ${props =>
      props.directionLG == "row-reverse" ? "right" : null};
  }
  @media (min-width: 1200px) {
    flex-direction: ${props => props.directionXL};
    text-align: ${props =>
      props.directionXL == "row-reverse" ? "right" : null};
  }
  .widget-icon {
    margin: 0 0px 20px 0px;
    @media (min-width: 480px) {
      margin: ${props =>
        props.directionXS == "row-reverse"
          ? "0 0 20px 20px"
          : "0 20px 20px 0px"};
    }
    @media (min-width: 575px) {
      margin: ${props =>
        props.directionSM == "row-reverse" ? "0 0 20px 20px" : null};
    }
    @media (min-width: 768px) {
      margin: ${props =>
        props.directionMD == "row-reverse" ? "0 0 20px 20px" : null};
    }
    @media (min-width: 992px) {
      margin: ${props =>
        props.directionLG == "row-reverse" ? "0 0 20px 20px" : null};
    }
    @media (min-width: 1200px) {
      margin: ${props =>
        props.directionXL == "row-reverse" ? "0 0 20px 20px" : null};
    }
  }
`

Widget.Icon = styled(Box).attrs({ className: "widget-icon" })`
  min-width: 60px;
  max-width: 60px;
  min-height: 60px;
  max-height: 60px;

  color: #fd346e;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 500px;
  img {
    width: 100%;
  }
`

Widget.Title = styled(Heading)`
  font-size: 21px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 30px;
`
Widget.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 30px;
`

Widget.Link = styled.div`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 30px;
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    span {
      padding-left: 10px;
    }
    /* @media (max-width: 500px) {
      flex-direction: column;
      justify-content: center;
    } */
  }
`

Widget.Box = styled(Box)``

export default Widget
