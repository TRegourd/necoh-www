import React from "react"
import GlobalHeaderContext, {
  headerDefault,
} from "../../../context/GlobalHeaderContext"
import Link from "../Link"
import HeaderButton from "../Header/InnerPageHeader"
import CookieConsent from "react-cookie-consent"
import { useLocation } from "@reach/router"
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"

const PageWrapper = ({
  children,
  headerConfig = null,
  innerPage = false,
  innerPageFooter = false,
}) => {
  const innerPageDefault = {
    headerClasses:
      "light-header site-header--menu-end site-header--button-sep position-relative",
    containerFluid: false,
    darkLogo: true,
    buttonBlock: <HeaderButton as={Link} btnText="Purchase" />,
  }
  const activeHeader = innerPage ? innerPageDefault : headerDefault
  const sitectx = React.useContext(GlobalHeaderContext)

  React.useEffect(() => {
    sitectx.changeHeader({ ...activeHeader, ...headerConfig })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const locationValue = useLocation()
  function handleAccept() {
    initializeAndTrack(locationValue)
  }

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Accepter tous les cookies"
        enableDeclineButton
        declineButtonText="Uniquement les cookies nécessaires"
        cookieName="gatsby-gdpr-google-analytics"
        style={{ fontSize: "15px", background: "#32141c" }}
        buttonStyle={{
          fontSize: "15px",
          background: "#f39200",
          borderRadius: "50px",
        }}
        declineButtonStyle={{
          fontSize: "15px",
          background: "#6e0f0b",
          borderRadius: "50px",
        }}
        flipButtons
        hideOnAccept
        onAccept={handleAccept}
      >
        Ce site utilise des cookies pour son bon fonctionnement
      </CookieConsent>
      {children}
    </>
  )
}

export default PageWrapper
