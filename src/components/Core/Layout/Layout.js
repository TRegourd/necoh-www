import React from "react"
import { Helmet } from "react-helmet"
import favicon from "~image/favicon.png"
import Header from "../Header"
export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <title>Necoh</title>
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
