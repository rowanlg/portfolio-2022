import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useInView } from "react-hook-inview"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import "../svg-background.css"
import { WorkContainer, PageIndicators, Work } from "./WorkStyles"

const WorkSection2 = ({ innerheight }) => {
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
    <WorkContainer ref={allinView}>
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
        ref={ref2}
        style={{
          opacity: isVisible2 ? "1" : "0",
          height: innerheight,
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
            <div className="text-stack text-stack-left mobile-hide">
              React Gatsby Sass GraphQL NetlifyCMS
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

export default WorkSection2
