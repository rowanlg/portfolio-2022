import React, { useState, useEffect } from "react"
import styled from "styled-components"
import MainGraphic from "../assets/main-graphic.png"
import { colours } from "../utils/colours"
import { StaticImage } from "gatsby-plugin-image"
import Icons from "./Icons"
import Div100vh from "react-div-100vh"

const Main = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  user-select: none;

  @media screen and (min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  .icons {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 1rem;
    /* margin-bottom: -8rem; */
    transition: opacity 2s linear;
    transition-delay: 1000ms;
    grid-area: 4 / 1 / 5 / 5;
    @media screen and (min-width: 500px) {
      grid-area: 5 / 2 / 6 / 12;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    svg {
      margin: 0.1rem;
      height: auto;
      opacity: 0.5;
      transition: all 1s linear;
      @media screen and (min-width: 600px) {
        margin: 0.4rem;
        width: 40px;
      }
    }
    svg:hover {
      opacity: 1;
      width: 45px;
    }
    .delay-100 {
      transition-delay: 100ms;
    }
    .delay-150 {
      transition-delay: 150ms;
    }
    .delay-200 {
      transition-delay: 200ms;
    }
    .delay-250 {
      transition-delay: 250ms;
    }
    .delay-300 {
      transition-delay: 300ms;
    }
    .delay-350 {
      transition-delay: 350ms;
    }
    .delay-400 {
      transition-delay: 400ms;
    }
    .delay-450 {
      transition-delay: 450ms;
    }
    .delay-500 {
      transition-delay: 500ms;
    }
    .delay-550 {
      transition-delay: 550ms;
    }
    .delay-600 {
      transition-delay: 600ms;
    }
  }
  .breaker {
    width: 70vw;
    height: 3px;
    border-radius: 5px;
    background-color: ${colours.light};
  }
`

const BackgroundImgContainer = styled.div`
  grid-area: 1 / 1 / 5 / 5;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1.6s ease-out;
  @media screen and (min-width: 500px) {
    grid-area: 2 / 3 / 5 / 11;
    margin-left: -4rem;
  }
`

const TextLeft = styled.div`
  grid-area: 3 / 2 / 3 / 4;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 0.3rem;
  transition: all 1s ease-in-out;
  transition-delay: 700ms;
  /* transition: all 1s cubic-bezier(0.5, 1.8, 0.3, 0.8); */
  transform: translate(-120vw, 0);

  .hide-on-mobile {
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
  h3 {
    font-size: 1rem;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 0.1rem;
    @media screen and (min-width: 500px) {
      font-size: 1rem;
      overflow: auto;
      white-space: normal;
    }
    @media screen and (min-width: 850px) {
      font-size: 1.3rem;
    }
  }
  p {
    font-size: 0.7rem;
    width: 150%;
    font-weight: 400;

    @media screen and (min-width: 500px) {
      font-size: 0.8rem;
      width: auto;
      margin-left: 1rem;
      max-width: 250px;
    }
    @media screen and (min-width: 850px) {
      font-size: 0.9rem;
      max-width: 280px;
    }
  }
  @media screen and (min-width: 500px) {
    grid-area: 2 / 1 / 5 / 7;
    margin-right: 0.4rem;
    margin-top: -4rem;
    text-align: right;
    align-items: flex-end;
    justify-content: center;
  }
`

const TextRight = styled.div`
  grid-area: 2 / 1 / 3 / 5;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin: auto;
  margin-bottom: -1rem;
  max-width: 368px;
  transition: all 1s ease-in-out;
  transition-delay: 700ms;
  /* transition: all 1s cubic-bezier(0.3, 1.8, 0.44, 0.49); */
  transform: translate(120vw, 0);
  transition-delay: 300ms;
  h1 {
    font-weight: 800;
    font-size: 1.1rem;
    @media screen and (min-width: 500px) {
      font-size: 1.8rem;
      max-width: 270px;
    }
    @media screen and (min-width: 850px) {
      font-size: 2.2rem;
      max-width: 290px;
    }
  }
  @media screen and (min-width: 500px) {
    grid-area: 2 / 7 / 5 / 13;
    align-items: flex-start;
    text-align: left;
    width: 90%;
    margin: 0;
    max-width: auto;
  }
`

const MainSection = () => {
  const [loaded, setLoaded] = useState(false)
  const [timer, setTimer] = useState(false)
  useEffect(() => {
    setLoaded(true)
    setTimeout(() => {
      setTimer(true)
    }, 1500)
  }, [])

  return (
    <Div100vh>
      <Main className="snap">
        <BackgroundImgContainer
          style={
            loaded
              ? timer
                ? { opacity: "0.8" }
                : { opacity: "1" }
              : { opacity: "0" }
          }
        >
          <StaticImage
            src="../assets/main-graphic5.png"
            alt="Backround Logo"
            placeholder="tracedSVG"
            width={800}
          />
        </BackgroundImgContainer>
        <TextLeft
          style={
            loaded
              ? { transform: "translate(0, 0)", opacity: "1" }
              : { opacity: "0" }
          }
        >
          <h3 className="hide-on-mobile">Frontend/Web3 Developer</h3>
          <p>
            I help design and build cool things for businesses, quickly and to
            the highest standard. Unlike other tech focussed individuals, I
            connect with my clients, and pride myself on bringing new
            perspectives to your problems.
          </p>
        </TextLeft>
        <TextRight
          style={
            loaded
              ? { transform: "translate(0, 0)", opacity: "1" }
              : { opacity: "0" }
          }
        >
          <h1>
            I genuinely love making things
            <span style={{ color: colours.yellow }}>,</span> tech helps me do
            that
            <span style={{ color: colours.red }}>.</span>
          </h1>
        </TextRight>
        <Icons timer={timer} />
        {/* <div className="breaker" /> */}
      </Main>
    </Div100vh>
  )
}

export default MainSection
