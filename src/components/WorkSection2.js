import React, { useState, useRef, useEffect } from "react"
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

  .work-section-1 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    border: 2px solid ${colours.red};
    max-height: 1000px;
    margin: auto;
    max-width: 1200px;
    border-radius: 5px;
    .left-image {
      grid-area: 1 / 1 / 5 / 5;
      border: 2px solid ${colours.red};
      margin: 1rem;
      z-index: 1;
      border-radius: 5px;
    }
    .right-title {
      grid-area: 1 / 4 / 2 / 7;
      /* border: 2px solid ${colours.red};
      border-radius: 5px; */
      z-index: 2;
      text-align: right;
      margin-top: 1rem;
      margin-right: 1rem;
      .link-svg {
        font-size: 1.7rem;
      }
      svg {
        opacity: 0.8;
        margin: 0 0 0.8rem 0.8rem;
        font-size: 1.6rem;
        color: ${colours.light};
        :hover {
          opacity: 1;
        }
      }
      .svg-container {
      }
      .featured {
        color: ${colours.yellow};
        font-family: "Fira Code", monospace;
        font-weight: 600;
        font-size: 0.8rem;
      }
    }
    .right-text-box {
      /* border: 2px solid red; */
      grid-area: 2 / 4 / 4 / 7;
      z-index: 2;
      text-align: right;
      font-size: 0.9rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1rem;
      font-weight: 200;
      div {
        border: 2px solid ${colours.red};
        background-color: rgb(22, 12, 23, 0.8);
        padding: 1.4rem 1.4rem 0.5rem 1.4rem;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .right-text-stack {
      /* border: 2px solid ${colours.red};
      border-radius: 5px; */
      grid-area: 4 / 4 / 5 / 7;
      z-index: 2;
      text-align: right;
      font-family: "Fira Code", monospace;
      font-weight: 300;
      font-size: 0.8rem;
      margin-bottom: 1rem;
      margin-right: 1rem;
      padding-top: 0.5rem;
    }
  }

  .work-section-2 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    border: 2px solid ${colours.green};
    max-height: 1000px;
    margin: auto;
    max-width: 1200px;
    border-radius: 5px;
    .right-image {
      grid-area: 1 / 3 / 5 / 7;
      border: 2px solid ${colours.green};
      background-color: ${colours.green};
      margin: 1rem;
      z-index: 1;
      border-radius: 5px;
    }
    .left-title {
      grid-area: 1 / 1 / 2 / 4;
      /* border: 2px solid red; */
      z-index: 2;
      text-align: left;
      margin-top: 1rem;
      margin-left: 1rem;
      .link-svg {
        font-size: 1.7rem;
      }
      svg {
        opacity: 0.8;
        margin: 0 0.8rem 0.8rem 0;
        font-size: 1.6rem;
        color: ${colours.light};
        :hover {
          opacity: 1;
        }
      }
      .featured {
        color: ${colours.yellow};
        font-family: "Fira Code", monospace;
        font-weight: 600;
        font-size: 0.8rem;
      }
    }
    .left-text-box {
      /* border: 2px solid red; */
      grid-area: 2 / 1 / 4 / 4;
      z-index: 2;
      text-align: left;
      font-size: 0.9rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 1rem;
      font-weight: 200;
      div {
        border: 2px solid ${colours.green};
        background-color: rgb(22, 12, 23, 0.8);
        padding: 1.4rem 1.4rem 0.5rem 1.4rem;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .left-text-stack {
      /* border: 2px solid red; */
      grid-area: 4 / 1 / 5 / 4;
      z-index: 2;
      text-align: left;
      font-family: "Fira Code", monospace;
      font-weight: 300;
      font-size: 0.8rem;
      margin-bottom: 1rem;
      margin-left: 1rem;
      padding-top: 0.5rem;
    }
  }

  .work-section-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    border: 2px solid ${colours.yellow};
    max-height: 1000px;
    margin: auto;
    max-width: 1200px;
    border-radius: 5px;
    .left-image {
      grid-area: 1 / 1 / 5 / 5;
      border: 2px solid ${colours.yellow};
      margin: 1rem;
      z-index: 1;
      border-radius: 5px;
    }
    .right-title {
      grid-area: 1 / 4 / 2 / 7;
      /* border: 2px solid ${colours.red};
      border-radius: 5px; */
      z-index: 2;
      text-align: right;
      margin-top: 1rem;
      margin-right: 1rem;
      .link-svg {
        font-size: 1.7rem;
      }
      svg {
        opacity: 0.8;
        margin: 0 0 0.8rem 0.8rem;
        font-size: 1.6rem;
        color: ${colours.light};
        :hover {
          opacity: 1;
        }
      }
      .featured {
        color: ${colours.yellow};
        font-family: "Fira Code", monospace;
        font-weight: 600;
        font-size: 0.8rem;
      }
    }
    .right-text-box {
      /* border: 2px solid red; */
      grid-area: 2 / 4 / 4 / 7;
      z-index: 2;
      text-align: right;
      font-size: 0.9rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1rem;
      font-weight: 200;
      div {
        border: 2px solid ${colours.yellow};
        background-color: rgb(22, 12, 23, 0.8);
        padding: 1.4rem 1.4rem 0.5rem 1.4rem;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .right-text-stack {
      /* border: 2px solid ${colours.red};
      border-radius: 5px; */
      grid-area: 4 / 4 / 5 / 7;
      z-index: 2;
      text-align: right;
      font-family: "Fira Code", monospace;
      font-weight: 300;
      font-size: 0.8rem;
      margin-bottom: 1rem;
      margin-right: 1rem;
      padding-top: 0.5rem;
    }
  }
`

const Work = styled.div`
  transition: opacity 1s ease-in;
  transition-delay: 300ms;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PageIndicators = styled.div`
  transition: all 1s ease-in;
  position: fixed;
  right: 0;
  top: 0;
  width: 50px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    transition: all 1s ease-in;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    margin: 1rem 0;
    background-color: ${colours.light};
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
  const [allinView, isAllVisible] = useInView({
    threshold: 0.2,
  })

  return (
    <WorkContainer className="snap" id="work" ref={allinView}>
      <PageIndicators style={{ opacity: isAllVisible ? "1" : "0" }}>
        <div
          style={
            isVisible
              ? { opacity: "1", width: "12px", height: "12px" }
              : { opacity: "0.5" }
          }
        />
        <div
          style={
            isVisible2
              ? { opacity: "1", width: "12px", height: "12px" }
              : { opacity: "0.5" }
          }
        />
        <div
          style={
            isVisible3
              ? { opacity: "1", width: "12px", height: "12px" }
              : { opacity: "0.5" }
          }
        />
      </PageIndicators>
      <Work
        ref={ref}
        style={{
          opacity: isVisible ? "1" : "0",
        }}
        className="background-1"
      >
        <div className="work-section-1">
          <StaticImage
            src="../assets/1-asado.png"
            alt="Asado Barcelona Demo Image"
            placeholder="blurred"
            layout="constrained"
            width={800}
            className="left-image"
          />
          <div className="right-title">
            <div className="svg-container">
              <a
                href="https://github.com/rowanlg/asado-barca-v7"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
              <a
                href="https://asadobarcelona.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="link-svg"
                />
              </a>
            </div>
            <p className="featured">Featured Project</p>
            <h3 className="title">Asado Barcelona</h3>
          </div>

          <div className="right-text-box">
            <div>
              <p>
                One of my first freelance web design and development jobs. I
                decided that instead of the client requesting changes to their
                site via me, I would build them a backend where they could
                change the copy, images and menu themselves. To do this I used
                Contentful's CMS with graphQL to query the data inputted into
                the CMS' backend and show this programatically via a lighting
                fast Gatsby site, and now the client is happy he doesn't have to
                pay me for changes haha. I was particularly happy with the
                lighthouse scores on this site, achieving an almost perfect 100
                across the board.
              </p>
            </div>
          </div>
          <div className="right-text-stack">
            React Gatsby CSS-in-JS Contentful GraphQL
          </div>
        </div>
      </Work>

      <Work
        ref={ref2}
        style={{
          opacity: isVisible2 ? "1" : "0",
        }}
        className="background-2"
      >
        <div className="work-section-2">
          <StaticImage
            src="../assets/2-bf.png"
            alt="Asado Barcelona Demo Image"
            placeholder="blurred"
            layout="constrained"
            width={800}
            className="right-image"
          />
          <div className="left-title">
            <div>
              <a
                href="https://github.com/rowanlg/asado-barca-v7"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
              <a
                href="https://asadobarcelona.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="link-svg"
                />
              </a>
            </div>
            <p className="featured">Featured Project</p>
            <h3>Asado Barcelona</h3>
          </div>

          <div className="left-text-box">
            <div>
              <p>
                A full blog site, with backend via Netlify, for a food writer
                from Bristol. The site allows them to publish reviews and
                recipes, which are inputted into the backend on Netlify, these
                are then categorized on the site and published. Apart from a
                clean design the client requested a light/dark mode. Which I
                implemented, this was the first blog style site I had designed,
                but I believe it stands up to industry standards.
              </p>
            </div>
          </div>
          <div className="left-text-stack">
            React Gatsby Sass GraphQL NetlifyCMS
          </div>
        </div>
      </Work>

      <Work
        ref={ref3}
        style={{
          opacity: isVisible3 ? "1" : "0",
        }}
        className="background-3"
      >
        <div className="work-section-3">
          <StaticImage
            src="../assets/1-asado.png"
            alt="Asado Barcelona Demo Image"
            placeholder="blurred"
            layout="constrained"
            width={800}
            className="left-image"
          />
          <div className="right-title">
            <div>
              <a
                href="https://github.com/rowanlg/asado-barca-v7"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
              <a
                href="https://asadobarcelona.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="link-svg"
                />
              </a>
            </div>
            <p className="featured">Featured Project</p>
            <h3>Asado Barcelona</h3>
          </div>

          <div className="right-text-box">
            <div>
              <p>
                One of my first freelance web design and development jobs. I
                decided that instead of the client requesting changes to their
                site via me, I would build them a backend where they could
                change the copy, images and menu themselves. To do this I used
                Contentful's CMS with graphQL to query the data inputted into
                the CMS' backend and show this programatically via a lighting
                fast Gatsby site, and now the client is happy he doesn't have to
                pay me for changes haha. I was particularly happy with the
                lighthouse scores on this site, achieving an almost perfect 100
                across the board.
              </p>
            </div>
          </div>
          <div className="right-text-stack">
            React Gatsby CSS-in-JS Contentful GraphQL
          </div>
        </div>
      </Work>
    </WorkContainer>
  )
}

export default WorkSection2
