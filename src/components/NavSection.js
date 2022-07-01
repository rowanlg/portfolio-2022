import React, { useState, useEffect } from "react"
import NavBurger from "./NavBurger"
import styled from "styled-components"
import { animated, useSpring } from "react-spring"
import { colours } from "../utils/colours"
import { debounce } from "../utils/debounce"

const NavContainer = styled.div`
  margin: 0 auto;
  width: 100vw;
  background-color: ${colours.dark};
  position: fixed;
  top: 0;
  transition: 0.2s linear all;
`

const Nav = styled.nav`
  margin: 0 auto;
  width: 70vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    user-select: none;
  }
  span {
    color: ${colours.yellow};
  }
`

const HiddenMenu = styled.div`
  position: fixed;
  left: 100vw;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: pink;
  transition: 0.6s linear all;
  /* transform: translate(100vw, 0px); */
`

const NavSection = () => {
  const [toggled, setToggled] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const style = useSpring({
    transform: "translate(-100vw, 0)",
  })

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset

    setVisible(
      toggled
        ? true
        : (prevScrollPos > currentScrollPos &&
            prevScrollPos - currentScrollPos > 70) ||
            currentScrollPos < 10
    )
    setPrevScrollPos(currentScrollPos)
  }, 100)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos, visible, handleScroll])

  return (
    <NavContainer style={{ top: visible ? "0" : "-100px" }}>
      <Nav>
        <h2>
          roo<span>_</span>dev
        </h2>
        <HiddenMenu as={animated.div} style={toggled ? style : {}} />
        <NavBurger toggled={toggled} setToggled={setToggled} />
      </Nav>
    </NavContainer>
  )
}

export default NavSection
