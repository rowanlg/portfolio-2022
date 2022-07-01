import React, { useState, useEffect } from "react"
import NavBurger from "./NavBurger"
import styled from "styled-components"
import { animated, useSpring } from "react-spring"
import { colours } from "../utils/colours"
import { debounce } from "../utils/debounce"
import Boop from "./Boop"
import { Link } from "gatsby"

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
  width: 85vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    user-select: none;
    cursor: pointer;
    color: #fafafa;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.5rem;
    span.dot {
      opacity: 0;
      margin-left: 0;
      transition: all 1s ease-out;
      color: ${colours.red};
    }
    :hover {
      span.dot {
        opacity: 100;
        transition: 0s;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    width: 70vw;
  }
`

const HiddenMenu = styled.div`
  position: fixed;
  left: 200vw;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: pink;
  transition: 1s linear all;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    margin: 0.5rem;
    a {
      font-size: 1.5rem;
      @media screen and (min-width: 1000px) {
        font-size: 2rem;
      }
      span {
        opacity: 0;
        margin-left: 0;
        transition: all 1s ease-out;
      }
      :hover {
        span {
          opacity: 100;
          transition: 0s;
        }
      }
    }
  }
  /* transform: translate(100vw, 0px); */
`

const NavSection = () => {
  const [toggled, setToggled] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const style = useSpring({
    transform: "translate(-200vw, 0)",
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
        <Boop rotation={10} timing={100}>
          <Link to="/">
            roo<span style={{ color: colours.yellow }}>_</span>dev
            <span className="dot">.</span>
          </Link>
        </Boop>

        <HiddenMenu as={animated.div} style={toggled ? style : {}}>
          <Boop rotation={10} timing={100}>
            <Link
              to="/#about"
              onClick={() => {
                setToggled(!toggled)
              }}
            >
              about<span>.</span>
            </Link>
          </Boop>
          <Boop rotation={10} timing={100}>
            <Link
              to="/#work"
              onClick={() => {
                setToggled(!toggled)
              }}
            >
              work<span>.</span>
            </Link>
          </Boop>
          <Boop rotation={10} timing={100}>
            <Link
              to="/#contact"
              onClick={() => {
                setToggled(!toggled)
              }}
            >
              contact<span>.</span>
            </Link>
          </Boop>
        </HiddenMenu>
        <NavBurger toggled={toggled} setToggled={setToggled} />
      </Nav>
    </NavContainer>
  )
}

export default NavSection
