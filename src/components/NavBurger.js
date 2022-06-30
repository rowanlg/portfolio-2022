import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"
import { colours } from "../utils/colours"

const Burger = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  position: relative;
  transform: rotate(25deg);
  div {
    position: absolute;
    width: 50px;
    height: 5px;
    top: 50%;
    text-align: center;
    border-radius: 1rem;
    transform-origin: 50%;
    transition: 1s linear all;
  }
  div:nth-child(1) {
    background-color: ${colours.red};
    transform: rotate(135deg);
  }
  div:nth-child(2) {
    background-color: ${colours.yellow};
    transform: rotate(45deg);
  }
  div:nth-child(3) {
    background-color: ${colours.green};
  }
  div:nth-child(4) {
    background-color: ${colours.light};
    transform: rotate(90deg);
  }
`

const NavBurger = ({ toggled, setToggled }) => {
  const style = useSpring({
    transform: "rotate(2180deg)",
    backgroundColor: colours.red,
  })
  const style45 = useSpring({
    transform: "rotate(2270deg)",
    backgroundColor: colours.red,
  })

  return (
    <Burger
      onClick={() => {
        setToggled(!toggled)
        console.log("toggled")
      }}
    >
      <animated.div style={toggled ? style : {}} />
      <animated.div style={toggled ? style : {}} />
      <animated.div style={toggled ? style45 : {}} />
      <animated.div style={toggled ? style45 : {}} />
    </Burger>
  )
}

export default NavBurger
