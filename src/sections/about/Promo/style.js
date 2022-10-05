import styled from "styled-components/macro"
import { Box, Heading, Button } from "~styled"
import { rgba } from "polished"

const Promo = styled(Box)`
  padding-top: 10px;
  padding-bottom: 50px;
  @media (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 80px;
  }

  @media (min-width: 992px) {
    padding-top: 30px;
    padding-bottom: 120px;
  }
`
Promo.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.3;
  @media (min-width: 768px) {
    font-size: 38px;
  }
  @media (min-width: 992px) {
    font-size: 48px;
  }
`

Promo.Content = styled(Box)``
Promo.Button = styled(Button)`
  min-width: 255px;
  height: 56px;
  border-radius: 5px;
  font-size: 15px;
  border-radius: 500px;
  color: #fff;
  transition: 0.4s;
  background: ${props => props.background};
  box-shadow: ${props =>
    props.background
      ? "-12px 12px 50px " + rgba(props.background, 0.3)
      : "none"};
  &:hover {
    box-shadow: ${props =>
      props.background
        ? "-12px 12px 50px " + rgba(props.background, 0)
        : "none"};
    background: ${props => props.background};
    color: #fff;
  }
`
Promo.Shape = styled(Box)`
  position: absolute;
  right: 0;
  top: 0;
  width: 8%;
`
Promo.Box = styled(Box)``

export default Promo
