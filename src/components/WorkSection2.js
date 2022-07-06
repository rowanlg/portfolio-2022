import React, { useState } from "react"
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

const WorkSection2 = ({ innerheight }) => {
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
    <WorkContainer ref={allinView} id="work-2">
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
        ref={ref2}
        style={{
          opacity: isVisible2 ? "1" : "0",
          minHeight: innerheight,
        }}
        className="background-2"
      >
        <div className="work-section">
          <div className="image image-right">
            <Slider {...settings}>
              <StaticImage
                src="../assets/2-bf-a.jpg"
                alt="Bald Flavours Image A"
                placeholder="blurred"
                layout="constrained"
                className="image image-left"
              />
              <StaticImage
                src="../assets/2-bf-b.jpg"
                alt="Bald Flavours Image B"
                placeholder="blurred"
                layout="constrained"
                className="image image-left"
              />
              <StaticImage
                src="../assets/2-bf-c.jpg"
                alt="Bald Flavours Image C"
                placeholder="blurred"
                layout="constrained"
                className="image image-left"
              />
              <StaticImage
                src="../assets/2-bf-d.jpg"
                alt="Bald Flavours Image D"
                placeholder="blurred"
                layout="constrained"
                className="image image-left"
              />
            </Slider>
          </div>
          <div className="text-area text-area-left">
            <div className="title-area title-left">
              <div className="svg-container">
                <a
                  href="https://github.com/rowanlg/bald-flavours"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    className="svg-left link-svg"
                  />
                </a>
                <a
                  href="https://baldflavours.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="link-svg svg-left"
                  />
                </a>
              </div>
              <p className="featured" style={{ color: "#E8873D" }}>
                Featured Project
              </p>
              <h3>Bald Flavours</h3>
              <p className="extra-info">Food writer blog</p>
            </div>

            <div className="text-box text-box-left mobile-hide">
              <div style={{ border: "2px solid #E8873D" }}>
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
            <li>Blog programatically handled with GraphQL</li>
            <li>Light/Dark mode</li>
            <li>Netlify CMS backend</li>
            <li>Effective SEO</li>
          </ul>
          <div className="text-stack text-stack-left mobile-show">
            React Gatsby Sass Netlify GraphQL
          </div>
        </div>
      </Work>
    </WorkContainer>
  )
}

export default WorkSection2
