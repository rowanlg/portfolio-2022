import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { colours } from "../utils/colours"
import { StaticImage } from "gatsby-plugin-image"
import Icons from "./Icons"

const Main = styled.section`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  user-select: none;
  overflow-x: hidden;

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
  transform: translate(120vw, 0);

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
      font-size: 1.4rem;
      max-width: 220px;
    }
  }
  @media screen and (min-width: 500px) {
    /* grid-area: 2 / 7 / 5 / 13; */
    grid-area: 2 / 7 / 5 / 10;
    text-align: left;
    align-items: flex-start;
    justify-content: center;
    margin-left: -0.5rem;
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
  transform: translate(-120vw, 0);
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
      max-width: 320px;
    }
  }
  @media screen and (min-width: 500px) {
    /* grid-area: 2 / 1 / 5 / 7; */
    grid-area: 2 / 4 / 5 / 7;
    align-items: flex-end;
    text-align: right;
    /* width: 90%; */
    margin: auto;
    margin-right: 0;
    margin-top: 10rem;
    /* max-width: auto; */
  }
`

const MainSection = ({ innerheight }) => {
  const [loaded, setLoaded] = useState(false)
  const [timer, setTimer] = useState(false)
  useEffect(() => {
    setLoaded(true)
    setTimeout(() => {
      setTimer(true)
    }, 1500)
  }, [])

  return (
    <Main style={{ height: innerheight }} id="home-section">
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
          src="../assets/main-graphic.png"
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
        <p>
          <b>
            <em>efficiently</em>
            <span style={{ color: colours.yellow }}>,</span>
          </b>{" "}
          through{" "}
          <b>
            new perspectives<span style={{ color: colours.green }}>,</span>
          </b>{" "}
          and to an{" "}
          <b>
            <em>extremely</em> high standard
            <span style={{ color: colours.red }}>.</span>
          </b>
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
          {" "}
          I build things that help <em>connect people</em>
          <span style={{ color: colours.yellow }}>,</span>
        </h1>
      </TextRight>
      <Icons timer={timer} />
      {/* <div className="breaker" /> */}
    </Main>
  )
}

export default MainSection
