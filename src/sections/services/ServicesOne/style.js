import styled from "styled-components/macro"
import { Box, Heading, Button, Paragraph } from "~styled"

const Service = styled(Box)`
  padding-top: 10px;
  padding-bottom: 10px;
  @media (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  @media (min-width: 992px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`

Service.Box = styled(Box)``

export default Service
