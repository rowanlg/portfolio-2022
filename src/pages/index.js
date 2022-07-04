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
import WorkSection2 from "../components/WorkSection2"

const Main = styled.main`
  background: rgb(37, 20, 38);
  background: linear-gradient(
    180deg,
    rgba(37, 20, 38, 1) 0%,
    rgba(37, 20, 38, 1) 20%,
    rgba(65, 157, 120, 1) 500%
  );
  color: ${colours.light};
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  position: relative;
  max-height: 100vh;
  overflow-y: auto;
  section.snap {
    scroll-snap-align: start;
    height: 100vh;
    width: 100vw;
  }
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
      {/* <WorkSection /> */}
      <WorkSection2 />
      <ContactSection />
      <FooterSection />
    </Main>
  )
}
