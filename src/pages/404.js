import React from "react"
import { Error } from "~sections/utility"
import { PageWrapper } from "~components/Core"

const header = {
  headerClasses: "site-header site-header--menu-start light-header",
  containerFluid: false,
}

export default function errorPage() {
  return (
    <PageWrapper innerPage={false}>
      <Error />
    </PageWrapper>
  )
}
