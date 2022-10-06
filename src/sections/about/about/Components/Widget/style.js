import styled from "styled-components/macro"
import { transparentize } from "polished"
import { Box, Heading, Paragraph } from "~styled"

const Widget = styled(Box).attrs({ className: "content-Widget" })`
  color: #262729;
  border: none;
  margin-bottom: 30px;
  transition: 0.4s;
  display: flex;
  padding-right: 50px;
  background-color: transparent;
`
Widget.Icon = styled(Box)`
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
Widget.Title = styled(Heading)`
  font-size: 21px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 30px;
`
Widget.Text = styled(Paragraph)`
  font-size: 15px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.86666;
  margin-bottom: 26px;
`
Widget.Box = styled(Box)`
  padding-left: 30px;
`
export default Widget
