import React from "react"
import { Link } from "~components"
import styled from "styled-components/macro"
import { Box } from "~styled"
import { graphql, useStaticQuery } from "gatsby"

export const HeaderButtonWrapper = styled(Box)`
  .btn {
    min-width: auto;
    height: 42px;
    border-radius: 3px;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 15px;
    padding-right: 15px;
    letter-spacing: -0.4px;
    margin-left: 10px;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    height: 50px;
    min-width: 137px;
    border-radius: 500px;
  }
  ul {
    padding: 0;
    margin: 0;
    position: relative;

    @media (min-width: 992px) {
      padding-right: 12px;
      margin-right: 20px;
      &:before {
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 2px;
        height: 26px;
        border-right: 2px solid rgba(130, 130, 136, 0.3);
        opacity: 0;
      }
    }

    @media (min-width: 1600px) {
      padding-right: 0px;
    }
    li {
      display: inline-flex;
      align-items: center;
      a {
        display: inline-flex;
        padding: 0 10px;
        color: var(--color-headings-2);
        transition: 0.4s;
        @media (min-width: 1600px) {
          padding: 0 20px;
        }
        &:hover {
          color: var(--bs-electric-violet-2);
        }
      }
    }
  }
`
const HeaderButton = ({ btnLink, btnOneText, btnText, ...rest }) => {
  const data = useStaticQuery(graphql`
    query {
      contactDetails: markdownRemark(
        fields: { slug: { eq: "/contactDetails" } }
      ) {
        frontmatter {
          email
          phone
          addressLine1
          addressLine2
          twitter
          facebook
          instagram
          linkedin
        }
      }
    }
  `)

  return (
    <HeaderButtonWrapper {...rest}>
      <ul className="d-none d-xl-flex list-unstyled">
        <li>
          <a href={data.contactDetails?.frontmatter.instagram}>
            <i className="fab fa-instagram text-primary"></i>
          </a>
        </li>
        <li>
          <a href={data.contactDetails?.frontmatter.linkedin}>
            <i className="fab fa-linkedin text-primary"></i>
          </a>
        </li>
        <li>
          <a href={data.contactDetails?.frontmatter.facebook}>
            <i className="fab fa-facebook text-primary"></i>
          </a>
        </li>
        <li>
          <a href={data.contactDetails?.frontmatter.twitter}>
            <i className="fab fa-twitter text-primary"></i>
          </a>
        </li>
      </ul>
      <Link
        target="_blank"
        className="btn btn-primary"
        to={btnLink ? btnLink : "/"}
      >
        {btnText}
      </Link>
    </HeaderButtonWrapper>
  )
}

export default HeaderButton
