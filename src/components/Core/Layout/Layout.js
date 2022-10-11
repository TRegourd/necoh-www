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

  const metaTags = [
    { itemprop: "name", content: "Necoh" },
    {
      itemprop: "description",
      content: "Expertise comptable et conseil aux entreprises à Chambéry",
    },
    {
      name: "description",
      content: "Expertise comptable et conseil aux entreprises à Chambéry",
    },

    { property: "og:title", content: "Necoh | Expertise" },
    {
      property: "og:description",
      content: "Expertise comptable et conseil aux entreprises à Chambéry",
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Necoh" },
  ]
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "fr",
        }}
        title="Necoh | Expertise"
        meta={metaTags}
      >
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      <Header />
      {children}
    </>
  )
}
