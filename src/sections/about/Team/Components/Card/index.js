import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Card from "./style"
export default function TeamCard({
  image,
  userName,
  userPosition,
  links,
  color,
  ...rest
}) {
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

  const avatar = getImage(
    images.allFile.nodes?.find(el => {
      return el.relativePath === image
    })?.childrenImageSharp[0]
  )

  return (
    <>
      <Card {...rest} backgroundColor={color}>
        <GatsbyImage image={avatar} alt={userName} />
        <Card.InnerBlock>
          <div>
            <Card.Title fontColor="#fff">{userName}</Card.Title>
            <Card.Text className="card__user-media__cat" fontColor="#fff">
              {userPosition}
            </Card.Text>
            <Card.Social>
              {links?.map(({ contact, link }) => {
                function getClassName(contact) {
                  if (contact === "email") {
                    return "fas fa-envelope"
                  }
                  if (contact === "tel") {
                    return "fas fa-phone-alt"
                  }
                  if (contact === "linkedin") {
                    return "fab fa-linkedin"
                  }
                  if (contact === "twitter") {
                    return "fab fa-twitter"
                  }
                }
                function getLinkName(contact, link) {
                  if (contact === "email") {
                    return `mailto:${link}`
                  }
                  if (contact === "tel") {
                    return `tel:${link}`
                  }
                  if (contact === "linkedin") {
                    return `${link}`
                  }
                  if (contact === "twitter") {
                    return `${link}`
                  }
                }
                return (
                  <Card.SocialItem
                    as="a"
                    href={getLinkName(contact, link)}
                    tabIndex={0}
                  >
                    <i className={getClassName(contact)} />
                  </Card.SocialItem>
                )
              })}
            </Card.Social>
          </div>
        </Card.InnerBlock>
      </Card>
    </>
  )
}
