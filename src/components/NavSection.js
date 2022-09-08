import React, { useState, useEffect } from "react"
import NavBurger from "./NavBurger"
import styled from "styled-components"
import { animated, useSpring } from "react-spring"
import { colours } from "../utils/colours"
import { debounce } from "../utils/debounce"
import Boop from "./Boop"
import { Link } from "gatsby"
import "../svg-background.css"
import scrollTo from "gatsby-plugin-smoothscroll"

const NavContainer = styled.div`
  margin: 0 auto;
  width: 100vw;
  background-color: ${colours.dark};
  position: fixed;
  /* top: 0; */
  transition: 0.2s linear all;
  z-index: 99;
  .hover-green:hover {
    color: ${colours.green};
  }
  .hover-red {
    transition: all 1s ease-in;
  }
  .hover-red:hover {
    color: ${colours.red};
    transition: 0s;
  }
  .hover-yellow:hover {
    color: ${colours.yellow};
  }
  .yellow {
    color: ${colours.yellow};
  }
  .red {
    color: ${colours.red};
  }
  .green {
    color: ${colours.green};
  }
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
    font-size: 1.2rem;
    @media screen and (min-width: 850px) {
      font-size: 1.3rem;
    }
    span.dot {
      opacity: 0;
      margin-left: 0;
      transition: all 1s ease-out;
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
  left: 210vw;
  top: 0;
  /* height: 300vh; */
  width: 200vw;
  background-color: ${colours.light};
  -webkit-transition: transform 1.5s ease-in-out;
  -o-transition: transform 1.5s ease-in-out;
  transition: transform 1.5s ease-in-out;
  -webkit-transform: rotate(65deg);
  -ms-transform: rotate(65deg);
  transform: rotate(65deg);
  overflow-x: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    grid-area: 1 / 1 / 2 / 2;
  }
  span {
    margin: 0.5rem;
    a {
      font-size: 1.2rem;
      color: ${colours.dark};
      @media screen and (min-width: 1000px) {
        font-size: 1.5rem;
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

const NavSection = ({ innerheight }) => {
  const [toggled, setToggled] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  // console.log("toggled: ", toggled)
  // console.log("prevScrollPos: ", prevScrollPos)
  // console.log("visible: ", visible)

  const style = useSpring({
    transform: "translate(-210vw, 0)",
    height: innerheight * 3,
  })

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 100) ||
        currentScrollPos < 10
    )

    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollPos, visible, handleScroll])

  return (
    <NavContainer style={{ top: visible ? "0" : "-100px" }}>
      <Nav>
        <Boop rotation={10} timing={100}>
          <Link to="/">
            r0o
            <span style={{ color: colours.yellow }}>.</span>
            <span className="hover-red">dev</span>
            <span className="dot green">/</span>
            {/* <span className="dot green">dev</span> */}
          </Link>
        </Boop>

        <HiddenMenu
          as={animated.div}
          style={toggled ? style : { height: innerheight * 3 }}
          className="menu-background"
        >
          <div>
            <Boop rotation={10} timing={100}>
              <a
                onClick={() => {
                  setToggled(!toggled)
                  scrollTo("#home-section")
                }}
              >
                home<span className="green">.</span>
              </a>
            </Boop>
            <Boop rotation={10} timing={100}>
              <a
                onClick={() => {
                  setToggled(!toggled)
                  scrollTo("#about-section")
                }}
              >
                about<span className="yellow">.</span>
              </a>
            </Boop>
            <Boop rotation={10} timing={100}>
              <a
                onClick={() => {
                  setToggled(!toggled)
                  scrollTo("#work-section")
                }}
              >
                work<span className="red">.</span>
              </a>
            </Boop>
            <Boop rotation={10} timing={100}>
              <a
                onClick={() => {
                  setToggled(!toggled)
                  scrollTo("#contact-section")
                }}
              >
                contact<span className="green">.</span>
              </a>
            </Boop>
          </div>
        </HiddenMenu>
        <NavBurger toggled={toggled} setToggled={setToggled} />
      </Nav>
    </NavContainer>
  )
}

export default NavSection
