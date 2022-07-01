import React from "react"
import NavSection from "../components/NavSection"
import styled from "styled-components"
import "../index.css"
import { colours } from "../utils/colours"
import MainSection from "../components/MainSection"

const Main = styled.main`
  background-color: ${colours.dark};
  height: 200vh;
  color: ${colours.light};
`

export default function Home() {
  return (
    <Main>
      <NavSection />
      <MainSection />
    </Main>
  )
}
