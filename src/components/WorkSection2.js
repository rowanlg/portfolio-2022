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
  transition: all 1s linear;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  max-height: 500vh !important;
  overflow-y: auto;

  img {
    cursor: pointer;
    border-radius: 5px;
  }
  .border-red {
    /* border: 2px solid rgba(232, 95, 92, 0.6); */
  }
  .border-green {
    /* border: 2px solid rgba(65, 157, 120, 0.6); */
  }
  .border-yellow {
    /* border: 2px solid rgba(247, 179, 43, 0.6); */
  }
  .work-section {
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px; */
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    max-width: 90vw;
    border-radius: 5px;
    max-height: 100vh;
    /* padding-top: 200px; */
    @media screen and (min-width: 700px) {
      /* max-height: 80vh; */
    }
    @media screen and (min-width: 1040px) {
      display: grid;
      gap: 0px 0px;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      max-height: 1000px;
      max-width: 1200px;
    }
    .image {
      order: 4;
      z-index: 1;
      border-radius: 5px;
      max-width: 500px;
      @media screen and (min-width: 700px) {
        margin: 1rem;
        max-width: none;
      }
    }
    .image-left {
      /* grid-area: 5 / 1 / 8 / 7; */
      @media screen and (min-width: 1040px) {
        grid-area: 1 / 1 / 5 / 5;
      }
    }
    .image-right {
      /* grid-area: 5 / 1 / 8 / 7; */
      @media screen and (min-width: 1040px) {
        grid-area: 1 / 3 / 5 / 7;
      }
    }
    .text-area-left {
      /* grid-area: 1 / 1 / 5 / 7; */
      align-items: center;
      @media screen and (min-width: 1040px) {
        grid-area: 1 / 1 / 5 / 4;
        align-items: flex-start;
      }
    }
    .text-area-right {
      /* grid-area: 1 / 1 / 5 / 7; */
      align-items: center;
      @media screen and (min-width: 1040px) {
        grid-area: 1 / 4 / 5 / 7;
        align-items: flex-end;
      }
    }
    .text-area {
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      @media screen and (min-width: 500px) {
        margin-bottom: 0;
      }
      @media screen and (min-width: 1040px) {
        justify-content: center;
      }
      div:first-child {
        @media screen and (min-width: 1040px) {
          flex-grow: 1;
          flex-basis: 0;
        }
      }
      div:last-child {
        @media screen and (min-width: 1040px) {
          flex-grow: 1;
          flex-basis: 0;
        }
      }
      .title-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media screen and (min-width: 1040px) {
          justify-content: flex-end;
          align-items: flex-end;
          text-align: right;
          margin-right: 1rem;
        }
      }
      .title-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media screen and (min-width: 1040px) {
          justify-content: flex-end;
          align-items: flex-start;
          text-align: left;
          margin-left: 1rem;
        }
      }

      .title-area {
        z-index: 2;
        margin-top: 1rem;
        h3 {
          font-size: 1rem;
        }
        @media screen and (min-width: 500px) {
          h3 {
            font-size: 1.3rem;
          }
        }
        .svg-container {
          display: flex;
          justify-content: flex-start;
          align-items: flex-end;
          flex-direction: row;
        }

        .link-svg {
          font-size: 1.7rem;
        }
        .svg-right {
          margin: 0.4rem;
          @media screen and (min-width: 1040px) {
            margin: 0 0 0.8rem 0.8rem;
          }
        }
        .svg-left {
          margin: 0.4rem;
          @media screen and (min-width: 1040px) {
            margin: 0 0.8rem 0.8rem 0;
          }
        }
        svg {
          opacity: 0.8;
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
          font-size: 0.6rem;
          @media screen and (min-width: 500px) {
            font-size: 0.8rem;
          }
        }
      }
    }
    .text-box {
      z-index: 2;
      font-size: 0.7rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 200;
      border-radius: 5px;
      max-width: 500px;

      @media screen and (max-width: 500px) {
        display: none;
      }
      @media screen and (min-width: 500px) {
        font-size: 0.9rem;
      }
      @media screen and (min-width: 1040px) {
        max-width: auto;
      }
      div {
        background-color: rgb(22, 12, 23, 0.8);
        padding: 1.4rem 1.4rem 0.5rem 1.4rem;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .text-box-right {
      @media screen and (min-width: 1040px) {
        margin-right: 1rem;
        text-align: right;
      }
    }
    .text-box-left {
      @media screen and (min-width: 1040px) {
        text-align: left;
        margin-left: 1rem;
      }
    }
    .text-stack {
      z-index: 2;
      font-family: "Fira Code", monospace;
      font-weight: 300;
      font-size: 0.6rem;
      margin-bottom: 1rem;
      margin-top: 1rem;
      order: 3;
      @media screen and (min-width: 500px) {
        font-size: 0.8rem;
      }
    }
    .text-stack-right {
      text-align: center;
      @media screen and (min-width: 1040px) {
        text-align: right;
        margin-right: 1rem;
      }
    }
    .text-stack-left {
      text-align: center;
      @media screen and (min-width: 1040px) {
        text-align: left;
        margin-left: 1rem;
      }
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
        <div className="work-section">
          <StaticImage
            src="../assets/1-asado.png"
            alt="Asado Barcelona Demo Image"
            placeholder="blurred"
            layout="constrained"
            className="image image-left"
            // objectFit="contain"
            // transformOptions={{ cropFocus: "entropy" }}
          />
          <div className="text-area text-area-right">
            <div className="title-area title-right">
              <div className="svg-container">
                <a
                  href="https://github.com/rowanlg/asado-barca-v7"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    className="link-svg svg-right"
                  />
                </a>
                <a
                  href="https://asadobarcelona.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="link-svg svg-right"
                  />
                </a>
              </div>
              <p className="featured">Featured Project</p>
              <h3>Asado Barcelona</h3>
            </div>

            <div className="text-box text-box-right mobile-hide">
              <div className="border-red">
                <p>
                  One of my first freelance web design and development jobs. I
                  decided that instead of the client requesting changes to their
                  site via me, I would build them a backend where they could
                  change the copy, images and menu themselves. To do this I used
                  Contentful's CMS with graphQL to query the data inputted into
                  the CMS' backend and show this programatically via a lighting
                  fast Gatsby site, and now the client is happy he doesn't have
                  to pay me for changes haha. I was particularly happy with the
                  lighthouse scores on this site, achieving an almost perfect
                  100 across the board.
                </p>
              </div>
            </div>
            <div className="text-stack text-stack-right">
              React Gatsby CSS-in-JS Contentful GraphQL
            </div>
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
        <div className="work-section">
          <StaticImage
            src="../assets/2-bf.png"
            alt="Bald Flavours Demo Image"
            placeholder="blurred"
            layout="constrained"
            width={800}
            className="image image-right"
          />
          <div className="text-area text-area-left">
            <div className="title-area title-left">
              <div className="svg-container">
                <a
                  href="https://github.com/rowanlg/asado-barca-v7"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon icon={faGithubSquare} className="svg-left" />
                </a>
                <a
                  href="https://asadobarcelona.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="link-svg svg-left"
                  />
                </a>
              </div>
              <p className="featured">Featured Project</p>
              <h3>Bald Flavours</h3>
            </div>

            <div className="text-box text-box-left mobile-hide">
              <div className="border-green">
                <p>
                  A full blog site, with backend via Netlify, for a food writer
                  from Bristol. The site allows them to publish reviews and
                  recipes, which are inputted into the backend on Netlify, these
                  are then categorized on the site and published. Apart from a
                  clean design the client requested a light/dark mode. Which I
                  implemented, this was the first blog style site I had
                  designed, but I believe it stands up to industry standards.
                </p>
              </div>
            </div>
            <div className="text-stack text-stack-left">
              React Gatsby Sass GraphQL NetlifyCMS
            </div>
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
        <div className="work-section">
          <StaticImage
            src="../assets/1-asado.png"
            alt="Asado Barcelona Demo Image"
            placeholder="blurred"
            layout="constrained"
            width={800}
            className="image image-left "
          />
          <div className="text-area text-area-right">
            <div className="title-area title-right">
              <div className="svg-container">
                <a
                  href="https://github.com/rowanlg/asado-barca-v7"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    className="link-svg svg-right"
                  />
                </a>
                <a
                  href="https://asadobarcelona.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="link-svg svg-right"
                  />
                </a>
              </div>
              <p className="featured">Featured Project</p>
              <h3>Asado Barcelona</h3>
            </div>

            <div className="text-box text-box-right">
              <div className="border-yellow">
                <p>
                  One of my first freelance web design and development jobs. I
                  decided that instead of the client requesting changes to their
                  site via me, I would build them a backend where they could
                  change the copy, images and menu themselves. To do this I used
                  Contentful's CMS with graphQL to query the data inputted into
                  the CMS' backend and show this programatically via a lighting
                  fast Gatsby site, and now the client is happy he doesn't have
                  to pay me for changes haha. I was particularly happy with the
                  lighthouse scores on this site, achieving an almost perfect
                  100 across the board.
                </p>
              </div>
            </div>
            <div className="text-stack text-stack-right">
              React Gatsby CSS-in-JS Contentful GraphQL
            </div>
          </div>
        </div>
      </Work>
    </WorkContainer>
  )
}

export default WorkSection2
