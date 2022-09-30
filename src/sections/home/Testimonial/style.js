import styled from "styled-components/macro"
import { Box, Heading, Button, Paragraph } from "~styled"

const Testimonial = styled(Box)`
  padding-top: 60px;
  padding-bottom: 60px;
  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media (min-width: 992px) {
    padding-top: 125px;
    padding-bottom: 130px;
  }
`
Testimonial.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.3;
  position: relative;
  @media (min-width: 768px) {
    font-size: 35px;
  }

  @media (min-width: 992px) {
    font-size: 45px;
  }
`
Testimonial.Subtitle = styled(Heading)`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.75;
`
Testimonial.SliderWrapper = styled(Box)`
  .slick-list {
    margin-left: -15px;
    margin-right: -15px;
  }
  .slick-track {
    display: flex;
  }
  .slick-slide {
    margin-top: 50px;
    margin-bottom: 30px;
    margin-left: 15px;
    margin-right: 15px;
  }
  .slick-dots {
    list-style: none;
    display: inline-flex !important;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0;
    padding: 0;
    margin: 0 auto;
    width: 100%;
    margin-top: 10px;
    li {
      display: flex;
      button {
        border: none;
        color: transparent;
        width: 22px;
        height: 5px;
        border-radius: 3px;
        background-color: #828288;
        margin: 0 5px;
        transition: 0.4s ease-in-out;
        &:focus {
          outline: none;
        }
      }
      &.slick-active {
        button {
          background-color: #ab4922;
        }
      }
    }
  }
`
Testimonial.Box = styled(Box)``

export default Testimonial
