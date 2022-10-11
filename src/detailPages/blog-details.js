import React from "react"
import BlogDetailsSection from "~sections/BlogDetails/BlogDetails"
import { PageWrapper } from "~components/Core"

import BreadCrumbSection from "~sections/shared/BreadCrumb"

import Footer from "~sections/shared/Footer"
import { NecohHeader } from "../libs/NecohHeader"

export default function BlogDetails({ pageContext }) {
  const { content } = pageContext

  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BreadCrumbSection content={{ title: "Article" }} />
      <BlogDetailsSection content={content} />
      <Footer />
    </PageWrapper>
  )
}
