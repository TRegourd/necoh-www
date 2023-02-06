import styled from "styled-components/macro"
import { Box, Heading, Button, Paragraph } from "~styled"

const Card = styled(Box).attrs({ className: "card-reference" })`
  border: 0;
  padding-bottom: 20px;
  transition: 0.4s;
`
Card.Image = styled(Box)`
  min-width: 50px;
  max-width: 100px;
  min-height: 50px;
  max-height: 50px;

  width: 100%;
  margin: auto;
  @media (min-width: 480px) {
    margin-bottom: 0;
  }
  img {
    width: 100%;
  }
`
Card.Title = styled(Heading)`
  color: inherit;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.73333;
  margin-bottom: 0;
`
Card.Text = styled(Paragraph)`
  color: inherit;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  text-align: justify;
`
Card.Icon = styled(Box).attrs({ className: "text-secondary card-icon" })`
  color: #6001d3;
  font-size: 36px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: normal;
`

Card.UserPosition = styled(Paragraph)`
  font-size: 13px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 22px;
  opacity: 0.7;
`
Card.Top = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
Card.UserBlock = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
Card.Box = styled(Box)``

export default Card
