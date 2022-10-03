import React from "react"
import { BlogRegular } from "~sections/Blog"
import { PageWrapper } from "~components/Core"
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
