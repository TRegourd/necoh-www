import styled from "styled-components/macro"
import { Box, Heading, Button, Paragraph } from "~styled"

const Testimonial = styled(Box)`
  padding-top: 50px;
  padding-bottom: 40px;

  @media (min-width: 575px) {
    padding-top: 55px;
    padding-bottom: 60px;
  }
  @media (min-width: 768px) {
    padding-top: 75px;
    padding-bottom: 80px;
  }

  @media (min-width: 992px) {
    padding-top: 130px;
    padding-bottom: 130px;
  }
  .testimonial-slider {
    @media (min-width: 768px) {
      width: 100%;
    }
    .slick-slide {
      margin-right: 30px;
    }
    .slick-track {
      display: flex;
    }
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
          background-color: #6e0f0b;
        }
      }
    }
  }
`
Testimonial.Title = styled(Heading)`
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
Testimonial.Subtitle = styled(Heading)`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.75;
`
Testimonial.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.77777;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`
Testimonial.Button = styled(Button)`
  color: #fff;
  border-color: #fd346e;
  background-color: #fd346e;
  box-shadow: 0 20px 20px rgb(253 52 110 / 30%);
  border-radius: 500px;
  &:hover {
    box-shadow: 0 20px 20px rgb(253 52 110 / 0%);
    color: #fff;
  }
`

Testimonial.ContentTextBlock = styled(Box)`
  position: relative;
`
Testimonial.Image = styled(Box)`
  position: relative;
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
    color: #fd346e;
    border: 0;
    box-shadow: none;
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      content: "";
      background-color: #fff;
      z-index: -1;
      pointer-events: none;
      opacity: 0;
      animation: sonarWave 2s linear infinite;
    }
  }
`

Testimonial.Box = styled(Box)``

export default Testimonial
