import React from "react"
import { Error } from "~sections/utility"
import { PageWrapper } from "~components/Core"
import { NecohHeader } from "../libs/NecohHeader"

const header = {
  headerClasses: "site-header site-header--menu-start light-header",
  containerFluid: false,
}

export default function errorPage() {
  return (
    <PageWrapper headerConfig={NecohHeader}>
      <Error />
    </PageWrapper>
  )
}
