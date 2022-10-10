import React from "react"
import { icons } from "../../../../../libs/icons"
import { StaticImage as Img } from "gatsby-plugin-image"
import HeroImageGroup from "./style"
export default function ImageGroup() {
  return (
    <>
      <HeroImageGroup>
        <HeroImageGroup.Inner>
          <Img
            src="../../../../../assets/image/marketing/l1-hero-img-ipad.png"
            className=" welcome-image--group-01__main"
            placeholder="blurred"
            layout="fullWidth"
            alt="hero image main"
          />
          <div className=" welcome-image--group-01__img-1">
            <Img
              src="../../../../../assets/image/marketing/l1-hero-img-1.png"
              alt="hero image"
              layout="fullWidth"
            />
          </div>
          <div className=" welcome-image--group-01__img-2">
            <Img
              src="../../../../../assets/image/marketing/l1-hero-img-2.png"
              alt="hero image"
              layout="fullWidth"
            />
          </div>
          <div className=" welcome-image--group-01__img-3">
            <Img
              src="../../../../../assets/image/marketing/l1-hero-img-3.png"
              alt="hero image"
              layout="fullWidth"
            />
          </div>
          <div className=" welcome-image--group-01__img-4">
            <img src={icons["hero-dots.svg"]} className="value-icon" />
          </div>
          <div className=" welcome-image--group-01__img-5">
            <img src={icons["hero-pie-left.svg"]} className="value-icon" />
          </div>
          <div className=" welcome-image--group-01__img-6">
            <img src={icons["hero-pie-right.svg"]} className="value-icon" />
          </div>
          <div className=" welcome-image--group-01__img-7">
            <img src={icons["hero-triangles.svg"]} className="value-icon" />
          </div>
        </HeroImageGroup.Inner>
      </HeroImageGroup>
    </>
  )
}
