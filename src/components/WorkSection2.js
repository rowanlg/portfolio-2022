import React, { useState, useRef } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { colours } from "../utils/colours"
import { useInView } from "react-hook-inview"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import "../svg-background.css"
import Div100vh from "react-div-100vh"

const WorkContainer = styled.section`
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  transition: all 1s linear;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  max-height: 500vh !important;
  overflow-y: auto;
  /* border: 1px solid red;
  width: 100vw;
  min-height: 100vh; */

  img {
    cursor: pointer;
    border-radius: 5px;
  }
`

const WorkLeft = styled.div`
  /* width: 100vw; */
  /* background-color: blue; */
  transition: opacity 1s ease-in;
  transition-delay: 300ms;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  padding: 0 10%;
  justify-content: flex-start;
`
const WorkRight = styled.div`
  /* width: 100vw; */
  /* background-color: blue; */
  transition: opacity 1s ease-in;
  transition-delay: 300ms;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  padding: 0 10%;
  justify-content: flex-end;
`

const WorkText = styled.div`
  max-width: 40%;
  margin: 0 1rem;
  h3 {
    font-size: 1.2rem;
  }
  p {
    font-size: 1rem;
  }
  a {
    margin-right: 0.6rem;
    font-size: 1.5rem;
  }
`

const WorkSection2 = () => {
  const [hover, setHover] = useState("")
  const [ref, isVisible] = useInView({
    threshold: 0.2,
  })
  const [ref2, isVisible2] = useInView({
    threshold: 0.2,
  })
  const [ref3, isVisible3] = useInView({
    threshold: 0.2,
  })
  const [ref4, isVisible4] = useInView({
    threshold: 0.2,
  })

  return (
    <WorkContainer className="snap">
      <Div100vh>
        <WorkLeft
          ref={ref}
          style={{
            opacity: isVisible ? "1" : "0",
          }}
          className="background-1"
        >
          {hover === "1" ? (
            <StaticImage
              src="../assets/1-asado-b.png"
              alt="Asado Barcelona Demo Image"
              placeholder="blurred"
              layout="constrained"
              width={800}
              className="second-img"
            />
          ) : (
            <StaticImage
              src="../assets/1-asado.png"
              alt="Asado Barcelona Demo Image"
              placeholder="blurred"
              layout="constrained"
              width={800}
              className="delay-500"
            />
          )}
          <WorkText>
            <h3>Asado Barcelona - Restaurant Site w/ Booking Portal</h3>
            <p>
              One of my first freelance web design and development jobs. I
              decided that instead of the client requesting changes to their
              site via me, I would build them a backend where they could change
              the copy, images and menu themselves. To do this I used
              Contentful's CMS with graphQL to query the data inputted into the
              CMS' backend and show this programatically via a lighting fast
              Gatsby site, and now the client is happy he doesn't have to pay me
              for changes haha. I was particularly happy with the lighthouse
              scores on this site, achieving an almost perfect 100 across the
              board.
            </p>
            <p className="stack">
              <b>Stack:</b> React/Gatsby/CSS-in-JS/Contentful/Netlify
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
                style={{ color: colours.light, fontSize: "1.5rem" }}
              />
            </a>
          </WorkText>
        </WorkLeft>
      </Div100vh>
      <Div100vh>
        <WorkRight
          ref={ref2}
          style={{
            opacity: isVisible2 ? "1" : "0",
          }}
          className="background-2"
        >
          {hover === "1" ? (
            <StaticImage
              src="../assets/2-bf.png"
              alt="Asado Barcelona Demo Image"
              placeholder="blurred"
              layout="constrained"
              width={800}
              className="second-img"
            />
          ) : (
            <StaticImage
              src="../assets/2-bf.png"
              alt="Asado Barcelona Demo Image"
              placeholder="blurred"
              layout="constrained"
              width={800}
            />
          )}
        </WorkRight>
      </Div100vh>
      <Div100vh>
        <WorkLeft
          ref={ref3}
          style={{ opacity: isVisible3 ? "1" : "0" }}
          className="background-3"
        >
          {hover === "1" ? (
            <StaticImage
              src="../assets/1-asado-b.png"
              alt="Asado Barcelona Demo Image"
              placeholder="blurred"
              layout="constrained"
              width={800}
              className="second-img"
            />
          ) : (
            <StaticImage
              src="../assets/1-asado.png"
              alt="Asado Barcelona Demo Image"
              placeholder="blurred"
              layout="constrained"
              width={800}
            />
          )}
        </WorkLeft>
      </Div100vh>
      <Div100vh>
        <WorkRight
          ref={ref4}
          style={{ opacity: isVisible4 ? "1" : "0" }}
          className="background-1"
        >
          {hover === "1" ? (
            <StaticImage
              src="../assets/2-bf.png"
              alt="Asado Barcelona Demo Image"
              placeholder="blurred"
              layout="constrained"
              width={800}
              className="second-img"
            />
          ) : (
            <StaticImage
              src="../assets/2-bf.png"
              alt="Asado Barcelona Demo Image"
              placeholder="blurred"
              layout="constrained"
              width={800}
            />
          )}
        </WorkRight>
      </Div100vh>
    </WorkContainer>
  )
}

export default WorkSection2
