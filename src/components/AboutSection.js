import React from "react"
import "../svg-background.css"
import styled from "styled-components"
import { colours } from "../utils/colours"
import { useInView } from "react-hook-inview"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMoneyBillWave,
  faPaintBrush,
  faDesktop,
  faGreaterThanEqual,
} from "@fortawesome/free-solid-svg-icons"

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
    padding: 3rem 1rem 3rem;
    @media screen and (min-width: 500px) {
      padding: 2rem;
    }
    @media screen and (min-width: 700px) {
      border-radius: 5px;
      padding: 4rem;
    }
    h4 {
      margin-bottom: 0.3rem;
      font-size: 0.9rem;
      padding: 1rem 0 0;
      @media screen and (min-width: 700px) {
        font-size: 1rem;
      }
    }
    p {
      font-family: "Source Code Pro", monospace;
      font-weight: 200;
      font-size: 0.8rem;
      @media screen and (min-width: 700px) {
        font-size: 1rem;
      }
    }
    ul {
      list-style: none;
      margin: 0rem;
      @media screen and (min-width: 500px) {
        margin: 1.2rem;
      }
      li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        margin: 0.8rem;
      }
      .icon {
        margin: 0 1rem;
        font-size: 1.2rem;
      }
      .text {
        font-family: "Source Code Pro", monospace;
        font-weight: 200;
        font-size: 0.8rem;
        @media screen and (min-width: 700px) {
          font-size: 1rem;
        }
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
        <ul>
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faMoneyBillWave} />
            </span>
            <span className="text">
              Fast and efficient design and development
            </span>
          </li>
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faPaintBrush} />
            </span>
            <span className="text">
              New perspectives, from a background in multiple creative
              disciplines
            </span>
          </li>
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faDesktop} />
            </span>
            <span className="text">UX and UI design</span>
          </li>
          <li>
            <span className="icon" style={{ fontSize: "1.5rem" }}>
              <FontAwesomeIcon icon={faGreaterThanEqual} />
            </span>
            <span className="text">
              Industry leading frontend tech for your projects
            </span>
          </li>
        </ul>
        <h4>My tech stack:</h4>
        <p>
          HTML5, CSS3, Javascript, React, Gatsby, Sass, CSS-in-JS, Solidity,
          Python, Figma, FCPX, Adobe Creative Suite
        </p>
        {/* <p>
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
        <p>From front to back, I’ve got it covered.</p> */}
        {/* <p>Check out a few of my most recent projects below.</p> */}
      </div>
    </AboutContainer>
  )
}

export default AboutSection
