import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { colours } from "../utils/colours"
import { useInView } from "react-hook-inview"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import "../svg-background.css"
import { WorkContainer, PageIndicators, Work } from "./WorkStyles"

const WorkSection1 = ({ innerheight }) => {
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
    <WorkContainer id="work" ref={allinView}>
      <PageIndicators
        style={{ opacity: isAllVisible ? "1" : "0", height: innerheight }}
      >
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
          height: innerheight,
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

            <div className="text-stack text-stack-right mobile-hide">
              React Gatsby CSS-in-JS Contentful GraphQL
            </div>
          </div>
          <ul className="mobile-list">
            <li>Blazingly fast Gatsby site</li>
            <li>Near perfect lighthouse score</li>
            <li>Large bg image handling</li>
            <li>Contentful CMS backend</li>
            <li>Effective SEO</li>
          </ul>
          <div className="text-stack text-stack-left mobile-show">
            React Gatsby CSS-in-JS Contentful GraphQL
          </div>
        </div>
      </Work>
    </WorkContainer>
  )
}

export default WorkSection1
