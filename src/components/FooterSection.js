import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
  width: 100vw;
  height: 50px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;
`

const FooterSection = () => {
  return (
    <Footer>
      Built with Gatsby © {new Date().getFullYear()}
      {/* <b>&nbsp;roo_dev.&nbsp;</b> */}
    </Footer>
  )
}

export default FooterSection
