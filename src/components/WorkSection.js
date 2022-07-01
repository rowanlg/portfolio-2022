import React from "react"
import styled from "styled-components"
import { colours } from "../utils/colours"
import Demo1 from "../assets/demo1.png"
import Demo2 from "../assets/demo2.png"
import Demo3 from "../assets/demo3.png"
import Demo4 from "../assets/demo4.png"
import Demo5 from "../assets/demo5.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"

const WorkContainer = styled.div`
  background-color: ${colours.light};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 0;
  color: ${colours.dark};
  @media screen and (min-width: 700px) {
    margin: auto;
    max-width: 900px;
    border-radius: 5px;
  }
  .experience {
    max-width: 80%;
    text-align: center;
    margin-top: 4rem;
    h4 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`

const Work = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${colours.dark};
  max-width: 300px;
  margin: 2rem 0;
  img {
    max-width: 300px;
    margin-bottom: 2rem;
    border-radius: 5px;
    /* -webkit-box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2); */
  }
  h3 {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.7rem;
    margin-bottom: 1rem;
  }
  a {
    margin-right: 0.6rem;
  }
  @media screen and (min-width: 700px) {
    flex-direction: row;
    align-items: space-between;
    max-width: 90%;
    column-gap: 20px;
    margin: 5rem 5rem 0 5rem;
    img {
      flex-grow: 1;
      margin: auto;
    }
    div {
      flex-grow: 2;
    }
  }
  .order-change {
    @media screen and (min-width: 700px) {
      order: 2;
    }
  }
`

const WorkSection = () => {
  return (
    <WorkContainer id="work">
      <Work>
        <img src={Demo1} alt="Demo Project 1" />
        <div>
          <h3>Lorem Ipsum - React/Gatsby/CSS-in-JS</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <a href="https://twitter.com/">
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ color: colours.green, fontSize: "1.5rem" }}
            />
          </a>
          <a href="https://github.com/">
            <FontAwesomeIcon
              icon={faGithubSquare}
              style={{ color: colours.dark, fontSize: "1.5rem" }}
            />
          </a>
        </div>
      </Work>
      <Work>
        <img src={Demo2} alt="Demo Project 1" className="order-change" />
        <div>
          <h3>Lorem Ipsum - React/Gatsby/CSS-in-JS</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <a href="https://twitter.com/">
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ color: colours.green, fontSize: "1.5rem" }}
            />
          </a>
          <a href="https://github.com/">
            <FontAwesomeIcon
              icon={faGithubSquare}
              style={{ color: colours.dark, fontSize: "1.5rem" }}
            />
          </a>
        </div>
      </Work>
      <Work>
        <img src={Demo3} alt="Demo Project 1" />
        <div>
          <h3>Lorem Ipsum - React/Gatsby/CSS-in-JS</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <a href="https://twitter.com/">
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ color: colours.green, fontSize: "1.5rem" }}
            />
          </a>
          <a href="https://github.com/">
            <FontAwesomeIcon
              icon={faGithubSquare}
              style={{ color: colours.dark, fontSize: "1.5rem" }}
            />
          </a>
        </div>
      </Work>
      <Work>
        <img src={Demo4} alt="Demo Project 1" className="order-change" />
        <div>
          <h3>Lorem Ipsum - React/Gatsby/CSS-in-JS</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <a href="https://twitter.com/">
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ color: colours.green, fontSize: "1.5rem" }}
            />
          </a>
          <a href="https://github.com/">
            <FontAwesomeIcon
              icon={faGithubSquare}
              style={{ color: colours.dark, fontSize: "1.5rem" }}
            />
          </a>
        </div>
      </Work>
      <Work>
        <img src={Demo5} alt="Demo Project 1" />
        <div>
          <h3>Lorem Ipsum - React/Gatsby/CSS-in-JS</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <a href="https://twitter.com/">
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ color: colours.green, fontSize: "1.5rem" }}
            />
          </a>
          <a href="https://github.com/">
            <FontAwesomeIcon
              icon={faGithubSquare}
              style={{ color: colours.dark, fontSize: "1.5rem" }}
            />
          </a>
        </div>
      </Work>
      <div className="experience">
        <h4>My Tech Stack:</h4>
        <p>
          HTML, CSS, Javascript, React, Gatsby, Netlify, Netlify CMS, Contentful
          CMS, Heroku, Vercel, Firebase, Hardhat, Ethers.js, Solidity, Python
          and many more. Plus for design - Figma, Photoshop, Illustrator, FCPX.
        </p>
      </div>
    </WorkContainer>
  )
}

export default WorkSection
