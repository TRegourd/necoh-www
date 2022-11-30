import styled from "styled-components/macro"
import { Box, Heading, Button, Paragraph } from "~styled"

import { transparentize, rgba } from "polished"
const Card = styled(Box).attrs({ className: "service-card" })`
  border: none;
  padding-top: 35px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 51px;
  margin-bottom: 25px;
  border-radius: 15px;
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.itemCenter ? "center" : null)};
  text-align: ${props => (props.itemCenter ? "center" : null)};
  color: #25373f;
  @media (min-width: 575px) {
    padding-left: 60px;
    padding-right: 60px;
  }
  @media (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (min-width: 992px) {
    padding-left: 60px;
    padding-right: 60px;
  }

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }
`
Card.Icon = styled(Box)`
  min-width: 65px;
  min-height: 65px;
  max-width: 65px;
  max-height: 65px;
  border-radius: 50%;
  position: relative;
  margin-bottom: 65px;

  img {
    position: absolute;
    min-width: 65px;
    min-height: 65px;
    max-width: 65px;
    max-height: 65px;
    bottom: -18%;
    right: -22%;
  }
`
Card.Title = styled(Heading)`
  font-size: 21px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 30px;
  color: inherit;
`
Card.Text = styled(Paragraph)`
  font-size: 15px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.86666;
  margin-bottom: 26px;
  opacity: 0.7;
  color: inherit;
  text-align: justify;
`
Card.Button = styled(Box)`
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: normal;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: inherit;
  transition: 0.4s;

  i {
    margin-left: 10px;
  }
`

export default Card
