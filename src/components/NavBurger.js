import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"
import { colours } from "../utils/colours"
import Boop from "./Boop"

const Burger = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  position: relative;
  transform: rotate(23deg);
  div {
    position: absolute;
    width: 40px;
    height: 4px;
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
    transform: "rotate(-1871deg)",
    backgroundColor: colours.red,
  })
  const style45 = useSpring({
    transform: "rotate(-1956deg)",
    backgroundColor: colours.red,
  })

  return (
    <Boop rotation={10} timing={200}>
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
    </Boop>
  )
}

export default NavBurger
