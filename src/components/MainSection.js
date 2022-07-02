import React from "react"
import styled from "styled-components"
import MainGraphic from "../assets/main-graphic.png"
import { colours } from "../utils/colours"

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media screen and (min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`

const BackgroundImgContainer = styled.div`
  grid-area: 1 / 1 / 5 / 5;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
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
  .hide-on-mobile {
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
  h3 {
    font-size: 1rem;
    overflow: hidden;
    white-space: nowrap;
    @media screen and (min-width: 500px) {
      font-size: 1.3rem;
      overflow: auto;
      white-space: normal;
    }
  }
  p {
    font-size: 0.7rem;
    width: 150%;
    @media screen and (min-width: 500px) {
      font-size: 0.9rem;
      width: auto;
      margin-left: 1rem;
      max-width: 250px;
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
  margin-bottom: -0.1rem;
  max-width: 368px;
  h1 {
    font-weight: 800;
    font-size: 1.1rem;
    @media screen and (min-width: 500px) {
      font-size: 2.1rem;
      max-width: 250px;
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
  return (
    <Main>
      <BackgroundImgContainer>
        <img
          src={MainGraphic}
          alt="Background Logo"
          style={{ overflow: "hidden" }}
        />
      </BackgroundImgContainer>
      <TextLeft>
        <h3 className="hide-on-mobile">Frontend/Web3 Developer</h3>
        <p>
          I am a self taught developer of just under 3 years, I have experience
          in React, Gatsby, HTML, CSS, SASS, CSS-in-JS, Hardhat, Ethers.js,
          Firebase, GraphQL, Python and many more. I pride myself on being able
          to teach myself anything, and I feel this gives me a huge advantage in
          this ever changing industry.{" "}
        </p>
      </TextLeft>
      <TextRight>
        <h1>
          I genuinely love making things
          <span style={{ color: colours.yellow }}>,</span> tech just helps me do
          it<span style={{ color: colours.red }}>.</span>
        </h1>
      </TextRight>
    </Main>
  )
}

export default MainSection
