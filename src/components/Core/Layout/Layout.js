import React, { useLayoutEffect } from "react"
import { Helmet } from "react-helmet"
import favicon from "~image/favicon.png"
import Header from "../Header"
import "../../../../node_modules/aos/dist/aos.css"
import AOS from "aos"

export default function Layout({ children }) {
  useLayoutEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Helmet>
        <title>Necoh | Expertise</title>
        <link rel="icon" type="image/png" href={favicon} />
        <meta
          name="description"
          content="Expertise comptable et conseil aux entreprises à Chambéry"
        />
      </Helmet>
      <Header />
      {children}
    </>
  )
}
