import React from "react"
import NavSection from "../components/NavSection"
import styled from "styled-components"
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
      <NavSection />
      <MainSection />
      <WorkSection />
      <ContactSection />
      <FooterSection />
    </Main>
  )
}
