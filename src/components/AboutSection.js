import React from "react"
import "../svg-background.css"
import styled from "styled-components"
import { colours } from "../utils/colours"
import { useInView } from "react-hook-inview"

const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s linear;

  .about-container {
    /* min-width: 500px; */
    /* min-height: 500px; */
    max-width: 1000px;
    background-color: ${colours.dark};
    padding: 3rem;
    @media screen and (min-width: 700px) {
      border-radius: 5px;
    }
    h4 {
      margin-bottom: 0.3rem;
      font-size: 0.9rem;
      @media screen and (min-width: 700px) {
        font-size: 1rem;
      }
    }
    p {
      font-family: "Source Code Pro", monospace;
      font-weight: 200;
      font-size: 0.8rem;
      @media screen and (min-width: 700px) {
        font-size: 0.9rem;
      }
    }
    .yellow-title {
      color: ${colours.yellow};
      font-family: "Source Code Pro", monospace;
      font-weight: 800;
      font-size: 0.9rem;
      @media screen and (min-width: 700px) {
        font-size: 1.2rem;
        /* margin-bottom: 0.4rem; */
      }
    }
  }
`

const AboutSection = ({ innerheight }) => {
  const [aboutRef, isAboutVisible] = useInView({
    threshold: 0.2,
  })
  return (
    <AboutContainer
      style={{ minHeight: innerheight, opacity: isAboutVisible ? "1" : "0" }}
      className="background-about"
      ref={aboutRef}
      id="about-section"
    >
      <div className="about-container">
        <h3 className="yellow-title">About Me</h3>
        <h4>I am a Designer, Musician, and Frontend/Web3 Developer,</h4>
        <p>and I love creating all things digital, physical and musical. </p>
        <h4>What can I do for you?</h4>
        <p>
          I can design and create incredibly fast websites with the highest
          level of efficiency and skill. Coming from multiple different creative
          disciplines I bring my own unique perspective to creative problems,
          and revel in solving them.{" "}
        </p>
        <p>
          Whether it’s design strategy, ux or wireframe solutions, I’m fluent in
          front and back end design. But not only that, I can bring those
          designs to life, through the use of frontend frameworks like React and
          Gatsby, creating sites with customised backends through CMS platforms,
          all while retaining industry leading website speeds.
        </p>
        <p>From front to back, I’ve got it covered.</p>
        {/* <p>Check out a few of my most recent projects below.</p> */}
      </div>
    </AboutContainer>
  )
}

export default AboutSection
