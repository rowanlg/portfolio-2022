import React, { useState } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { colours } from "../utils/colours"
import Demo1A from "../assets/asado-barca-mockup.png"
import Demo1B from "../assets/asado-barca-mockup2.png"
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
  padding: 1rem 0 3rem 0;
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
      font-size: 0.8rem;
      margin-bottom: 0.3rem;
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
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
  a {
    margin-right: 0.6rem;
    font-size: 1.5rem;
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
  const [hover, setHover] = useState("")

  return (
    <WorkContainer id="work">
      <Work>
        <div
          onMouseOver={() => {
            setHover("1")
          }}
          onMouseOut={() => {
            setHover("")
          }}
        >
          {hover === "1" ? (
            <StaticImage
              src="../assets/asado-barca-mockup2.png"
              alt="Asado Barcelona Demo Image 2"
              placeholder="blurred"
              layout="constrained"
              width={2500}
            />
          ) : (
            <StaticImage
              src="../assets/asado-barca-mockup.png"
              alt="Asado Barcelona Demo Image"
              placeholder="blurred"
              layout="constrained"
              width={2500}
            />
          )}
        </div>
        <div>
          <h3>
            Asado Barcelona - Restaurant Site w/ Booking Portal
            <br />
            React/Gatsby/Styled Components/Contentful/Netlify
          </h3>
          <p>
            One of my first freelance web design and development jobs. I decided
            that instead of the client requesting changes to their site via me,
            I would build them a backend where they could change the copy,
            images and menu themselves. To do this I used Contentful's CMS with
            graphQL to query the data inputted into the CMS' backend and show
            this programatically via a lighting fast Gatsby site, and now the
            client is happy he doesn't have to pay me for changes haha. I was
            particularly happy with the lighthouse scores on this site,
            achieving an almost perfect 100 across the board.
          </p>
          <a
            href="https://asadobarcelona.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ color: colours.green, fontSize: "1.5rem" }}
            />
          </a>
          <a
            href="https://github.com/rowanlg/asado-barca-v7"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              style={{ color: colours.dark, fontSize: "1.5rem" }}
            />
          </a>
        </div>
      </Work>
      <Work>
        <div
          onMouseOver={() => {
            setHover("2")
          }}
          onMouseOut={() => {
            setHover("")
          }}
          className="order-change"
        >
          {hover === "2" ? (
            <StaticImage
              src="../assets/bald-flavours-mockup2.png"
              alt="Bald Flavours Demo Image 2"
              placeholder="blurred"
              layout="constrained"
              width={2500}
            />
          ) : (
            <StaticImage
              src="../assets/bald-flavours-mockup.png"
              alt="Bald Flavours Demo Image"
              placeholder="blurred"
              layout="constrained"
              width={2500}
            />
          )}
        </div>
        <div>
          <h3>
            Bald Flavours - Blog Site
            <br />
            React/Gatsby/Sass/Netlify CMS
          </h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <a
            href="https://baldflavours.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ color: colours.green, fontSize: "1.5rem" }}
            />
          </a>
          <a
            href="https://github.com/rowanlg/bald-flavours"
            target="_blank"
            rel="noreferrer noopener"
          >
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
          <a
            href="https://asadobarcelona.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ color: colours.green, fontSize: "1.5rem" }}
            />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
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
          <a
            href="https://asadobarcelona.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ color: colours.green, fontSize: "1.5rem" }}
            />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
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
          <a
            href="https://asadobarcelona.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ color: colours.green, fontSize: "1.5rem" }}
            />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
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
