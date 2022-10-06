import React from "react"
import { PageWrapper } from "~components/Core"
import BlogRegular from "~sections/events/BlogRegular"
import Footer from "~sections/shared/Footer"
import { NecohHeader } from "."

export default function events() {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <BlogRegular />
      <Footer />
    </PageWrapper>
  )
}
