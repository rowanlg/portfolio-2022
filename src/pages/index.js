import React from "react"
import NavSection from "../components/NavSection"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import "../index.css"
import { colours } from "../utils/colours"
import MainSection from "../components/MainSection"
import WorkSection from "../components/WorkSection"
import ContactSection from "../components/ContactSection"
import FooterSection from "../components/FooterSection"

const Main = styled.main`
  background-color: ${colours.dark};
  height: 200vh;
  color: ${colours.light};
`

export default function Home() {
  return (
    <Main id="about">
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Portfolio site showing the work of r0o_dev"
        />
        <title>r0o.dev - Portfolio Site</title>
        <link rel="canonical" href="http://r0o.dev" />
      </Helmet>
      <NavSection />
      <MainSection />
      <WorkSection />
      <ContactSection />
      <FooterSection />
    </Main>
  )
}
