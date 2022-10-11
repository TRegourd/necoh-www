import React from "react"
import { icons } from "../../../../../libs/icons"
import { GatsbyImage, getImage, StaticImage as Img } from "gatsby-plugin-image"
import HeroImageGroup from "./style"
import { graphql, useStaticQuery } from "gatsby"
export default function ImageGroup({ image0, image1, image2, image3 }) {
  const images = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativeDirectory: { eq: "" }
          extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        }
      ) {
        nodes {
          relativePath
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)
  const heroImage0 = getImage(
    images.allFile.nodes?.find(el => {
      return el.relativePath === image0
    })?.childrenImageSharp[0]
  )
  const heroImage1 = getImage(
    images.allFile.nodes?.find(el => {
      return el.relativePath === image1
    })?.childrenImageSharp[0]
  )
  const heroImage2 = getImage(
    images.allFile.nodes?.find(el => {
      return el.relativePath === image2
    })?.childrenImageSharp[0]
  )
  const heroImage3 = getImage(
    images.allFile.nodes?.find(el => {
      return el.relativePath === image3
    })?.childrenImageSharp[0]
  )
  return (
    <>
      <HeroImageGroup>
        <HeroImageGroup.Inner>
          <GatsbyImage
            image={heroImage0}
            className="welcome-image--group-01__main"
            alt="hero image main"
          />

          <div className=" welcome-image--group-01__img-1">
            <GatsbyImage image={heroImage1} alt={"hero image 1"} />
          </div>
          <div className=" welcome-image--group-01__img-2">
            <GatsbyImage image={heroImage2} alt={"hero image 2"} />
          </div>
          <div className=" welcome-image--group-01__img-3">
            <GatsbyImage image={heroImage3} alt={"hero image 3"} />
          </div>
          <div className=" welcome-image--group-01__img-4">
            <img src={icons["hero-dots.svg"]} alt="hero shape" />
          </div>
          <div className=" welcome-image--group-01__img-5">
            <img src={icons["hero-pie-left.svg"]} alt="hero shape" />
          </div>
          <div className=" welcome-image--group-01__img-6">
            <img src={icons["hero-pie-right.svg"]} alt="hero shape" />
          </div>
          <div className=" welcome-image--group-01__img-7">
            <img src={icons["hero-triangles.svg"]} alt="hero shape" />
          </div>
        </HeroImageGroup.Inner>
      </HeroImageGroup>
    </>
  )
}
