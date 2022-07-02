import React from "react"
import styled from "styled-components"
import { colours } from "../utils/colours"

const Footer = styled.footer`
  width: 100vw;
  height: 50px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;
  font-size: 0.8rem;
`

const FooterSection = () => {
  return (
    <Footer>
      Built with&nbsp;
      <a
        href="https://www.gatsbyjs.com/"
        target="_blank"
        style={{ color: colours.yellow, textDecoration: "none" }}
      >
        Gatsby
      </a>
      &nbsp;© {new Date().getFullYear()}
      {/* <b>&nbsp;roo_dev.&nbsp;</b> */}
    </Footer>
  )
}

export default FooterSection
