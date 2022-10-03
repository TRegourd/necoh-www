import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { SuperTag } from "~components"
import SectionTitle from "./style"
export default function SectionTitleBlock({
  subTitleProps,
  titleProps,
  textProps,
  subTitle,
  title,
  text,
  color,
  ...rest
}) {
  return (
    <SectionTitle {...rest}>
      <SectionTitle.Main {...titleProps} as="h2">
        <GatsbyImage image={title} alt="logo service" />
      </SectionTitle.Main>
      {/* <SectionTitle.Subtitle {...subTitleProps}>
        <SuperTag value={subTitle} />
      </SectionTitle.Subtitle> */}
      {text ? (
        <SectionTitle.Text {...textProps}>
          <SuperTag value={text} />
        </SectionTitle.Text>
      ) : null}
    </SectionTitle>
  )
}
