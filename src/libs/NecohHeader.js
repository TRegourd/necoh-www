import React from "react"
import HeaderButton from "~sections/shared/Header"

export const NecohHeader = {
  headerClasses:
    "site-header site-header--menu-start light-header site-header--with-border site-header--sticky",
  containerFluid: false,
  buttonBlock: (
    <HeaderButton
      className="ms-auto d-none d-xs-inline-flex"
      btnText="Contact"
      mr="15px"
      mrLG="0"
      btnLink="/contact"
    />
  ),
}
