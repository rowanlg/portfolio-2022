import React, { useRef, createRef, useEffect } from "react"
import NavSection from "../components/NavSection"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import "../index.css"
import { colours } from "../utils/colours"
import MainSection from "../components/MainSection"
import ContactSection from "../components/ContactSection"
import FooterSection from "../components/FooterSection"
import WorkSection1 from "../components/WorkSection1"
import WorkSection2 from "../components/WorkSection2"
import WorkSection3 from "../components/WorkSection3"
import useWindowSize from "../utils/useWindowSize"
import AboutSection from "../components/AboutSection"
import WorkSection from "../components/WorkSection"

export default function Home() {
  const innerheight = useWindowSize().height

  const Main = styled.main`
    background: rgb(37, 20, 38);
    background: linear-gradient(
      180deg,
      rgba(22, 12, 23, 1) 0%,
      rgba(22, 12, 23, 1) 20%,
      rgba(65, 157, 120, 1) 500%
    );
    color: ${colours.light};
    position: relative;
    overflow-y: auto;
    /* max-height: ${innerheight}; */
  `

  return (
    <Main id="about" style={{ height: innerheight, maxHeight: innerheight }}>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Portfolio site showing the work of r0o_dev"
        />
        <title>r0o.dev - Portfolio Site</title>
        <link rel="canonical" href="https://r0o.dev" />
      </Helmet>

      <NavSection innerheight={innerheight} />
      <MainSection innerheight={innerheight} />
      <AboutSection innerheight={innerheight} />
      <WorkSection innerheight={innerheight} />
      <WorkSection1 innerheight={innerheight} />
      <WorkSection2 innerheight={innerheight} />
      <WorkSection3 innerheight={innerheight} />
      <ContactSection innerheight={innerheight} />
      <FooterSection />
    </Main>
  )
}
