import React from "react"
import styled from "styled-components"
import NavSection from "../components/NavSection"
import { Link } from "gatsby"
import { colours } from "../utils/colours"

const ErrorPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${colours.light};
  .link {
    color: ${colours.yellow};
  }
`

const Error = () => {
  return (
    <ErrorPage>
      <NavSection />
      <h2>Uh Oh, Looks like you took a wrong turn :/</h2>
      <p>
        Click{" "}
        <Link className="link" to="/">
          here
        </Link>{" "}
        to get back...
      </p>
    </ErrorPage>
  )
}

export default Error
