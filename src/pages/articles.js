import React from "react"
import BlogSidebarOne from "~sections/articles/BlogSidebarOne"
import { PageWrapper } from "~components/Core"
import Footer from "~sections/shared/Footer"
import { NecohHeader } from "../libs/NecohHeader"

export default function articles() {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BlogSidebarOne />
      <Footer />
    </PageWrapper>
  )
}
