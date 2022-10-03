import React from "react"
import { BlogSidebarOne } from "~sections/blog"
import { PageWrapper } from "~components/Core"
import Footer from "~sections/shared/Footer"
import { NecohHeader } from "."

export default function articles() {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BlogSidebarOne />
      <Footer />
    </PageWrapper>
  )
}
