import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useInView } from "react-hook-inview"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import "../svg-background.css"
import { WorkContainer, PageIndicators, Work } from "./WorkStyles"
import scrollTo from "gatsby-plugin-smoothscroll"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { colours } from "../utils/colours"

const WorkSection3 = ({ innerheight }) => {
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    centerMode: true,
    centerPadding: "0px",
  }

  return (
    <WorkContainer ref={allinView} id="work-3">
      <PageIndicators
        style={{ opacity: isAllVisible ? "1" : "0", height: innerheight }}
      >
        <div
          className={isVisible ? "focussed dot" : "dot"}
          style={isVisible ? { opacity: "1" } : { opacity: "0.5" }}
          onClick={() => {
            if (!isVisible) {
              scrollTo("#work-1")
            }
          }}
        />
        <div
          className={isVisible2 ? "focussed dot" : "dot"}
          style={isVisible2 ? { opacity: "1" } : { opacity: "0.5" }}
          onClick={() => {
            if (!isVisible2) {
              scrollTo("#work-2")
            }
          }}
        />
        <div
          className={isVisible3 ? "focussed dot" : "dot"}
          style={isVisible3 ? { opacity: "1" } : { opacity: "0.5" }}
          onClick={() => {
            if (!isVisible3) {
              scrollTo("#work-3")
            }
          }}
        />
      </PageIndicators>
      <Work
        ref={ref3}
        style={{
          opacity: isVisible3 ? "1" : "0",
          minHeight: innerheight,
        }}
        className="background-3"
        id="work-section"
      >
        <div className="work-section">
          <div className="image image-left">
            <Slider {...settings}>
              <StaticImage
                src="../assets/3-allowlist-a.jpg"
                alt="Allowlist Image A"
                placeholder="blurred"
                layout="constrained"
                className="image image-left"
              />
              <StaticImage
                src="../assets/3-allowlist-b.jpg"
                alt="Allowlist Image B"
                placeholder="blurred"
                layout="constrained"
                className="image image-left"
              />
              <StaticImage
                src="../assets/3-allowlist-c.jpg"
                alt="Allowlist Image C"
                placeholder="blurred"
                layout="constrained"
                className="image image-left"
              />
            </Slider>
          </div>
          <div className="text-area text-area-right">
            <div className="title-area title-right">
              <div className="svg-container">
                <a
                  href="https://github.com/rowanlg/allowlist-v1"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    className="link-svg svg-right"
                  />
                </a>
                <a
                  href="https://allowlist.netlify.app"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="link-svg svg-right"
                  />
                </a>
              </div>
              <p className="featured" style={{ color: colours.red }}>
                Featured Project
              </p>
              <h3>Allowlist App</h3>
              <p className="extra-info">NFT whitelist app</p>
            </div>

            <div className="text-box text-box-right mobile-hide">
              <div className="border-red">
                <p>
                  I noticed that there were limited ways for NFT projects to
                  collect users addresses, and confirm their identity through
                  twitter. The only solutions for this cost a lot to use, so I
                  decided to create my own. At the moment it is a closed backend
                  for myself, however I will develop the project to allow NFT
                  creators to log in and create their own allowlist forms
                  through a dedicated portal. The current features are - Connect
                  metamask wallet and store address, log in through twitter and
                  store username, then save these to a database. I would also
                  like to implement a gate where the user must follow a certain
                  twitter account or like a certain tweet to continue.
                </p>
              </div>
            </div>

            <div className="text-stack text-stack-right mobile-hide">
              React Hardhat Ethers.js Sass Firebase Netlify
            </div>
          </div>
          <ul className="mobile-list">
            <li>Progressive Web App</li>
            <li>Metamask wallet connect function</li>
            <li>Twitter API log in function</li>
            <li>Stores Twitter account with ethereum address in database</li>
            <li>
              To be turned into a service, where NFT collectors can create their
              own allow list
            </li>
          </ul>
          <div className="text-stack text-stack-left mobile-show">
            React Gatsby CSS-in-JS Contentful GraphQL
          </div>
        </div>
      </Work>
    </WorkContainer>
  )
}

export default WorkSection3
