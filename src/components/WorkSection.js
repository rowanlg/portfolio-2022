import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
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

const WorkSection = ({ innerheight }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(sort: { fields: base }) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(
                formats: AUTO
                layout: CONSTRAINED
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  `)

  // console.log(
  //   data.allFile.edges
  //     .filter(value => value.node.base.startsWith("0"))
  //     .map(item => item.node.base)
  // )

  // console.log(data.allFile.edges[0].node.base)

  const [ref1, isVisible1] = useInView({
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
  const [ref5, isVisible5] = useInView({
    threshold: 0.2,
  })
  const [allinView, isAllVisible] = useInView({
    threshold: 0.2,
  })

  console.log("isvisible1: ", isVisible1)
  console.log("isvisible2: ", isVisible2)

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

  const workData = [
    {
      name: "Maha Quest Player",
      type: "Personal Project",
      desktopInfo:
        "I wanted to create a music player app as part of my artist (Maha Quest) website. I instead decided to just make the whole website a music player app, utilising firebase as storage and database. Built with NextJS, the audio player is entirely custom, and handles data pulled from a custom firebase server. Functionality includes: Play, Pause, Next, Back, Shuffle, Volume/Mute, Repeat On/Off, Filter by release or year, Custom skippable progress bar.",
      mobileBulletPoints: [
        "NextJS project",
        "Perfect lighthouse score",
        "Firebase database, with asynchronous handling of data",
        "Filtering of data, with all custom music player functionality",
      ],
      teckStack: ["React", "NextJS", "styled-components", "Firebase"],
      github: "https://github.com/rowanlg/mq-music-player",
      urlToSite: "https://www.themahaquest.com",
      images: ["0-mqmp-a.jpg", "0-mqmp-b.jpg", "0-mqmp-c.jpg", "0-mqmp-d.jpg"],
    },
    {
      name: "Festival Power",
      type: "Events Power Company",
      desktopInfo:
        "A simple landing page site for a festival and events power company. The project was given to me as a desktop design, and I used my knowledge of responsive site design to create the mobile version. Then building the site using Gatsby. The client was extremely happy, and the lighthouse scores are 100 all around.",
      mobileBulletPoints: [
        "Blazingly fast Gatsby site",
        "Perfect lighthouse score",
        "Large bg image handling",
        "Effective SEO",
      ],
      teckStack: ["React", "Gatsby", "Sass", "Netlify"],
      github: "https://github.com/rowanlg/festival-power",
      urlToSite: "https://www.festivalpower.co.uk",
      images: ["1-fp-a.jpg", "1-fp-b.jpg", "1-fp-c.jpg"],
    },
    {
      name: "Asado Barcelona",
      type: "Restaurant Website",
      desktopInfo:
        "One of my first freelance web design and development jobs. I decided that instead of the client requesting changes to their site via me, I would build them a backend where they could change the copy, images and menu themselves. To do this I used Contentful's CMS with graphQL to query the data inputted into the CMS' backend and show this programatically via a lighting fast Gatsby site, and now the client is happy he doesn't have to pay me for changes haha. I was particularly happy with the lighthouse scores on this site, achieving an almost perfect 100 across the board.",
      mobileBulletPoints: [
        "Blazingly fast Gatsby site",
        "Near perfect lighthouse score",
        "Large bg image handling",
        "Contentful CMS backend",
        "Effective SEO",
      ],
      teckStack: ["React", "Gatsby", "CSS-in-JS", "Contentful", "GraphQL"],
      github: "https://github.com/rowanlg/asado-barca-v7",
      urlToSite: "https://asadobarcelona.com/",
      images: [
        "2-asado-a.jpg",
        "2-asado-b.jpg",
        "2-asado-c.jpg",
        "2-asado-d.jpg",
      ],
    },
    {
      name: "Bald Flavours",
      type: "Food Writer Blog",
      desktopInfo:
        "A full blog site, with backend via Netlify, for a food writer from Bristol. The site allows them to publish reviews and recipes, which are inputted into the backend on Netlify, these are then categorized on the site and published. Apart from a clean design the client requested a light/dark mode. Which I implemented, this was the first blog style site I had designed, but I believe it stands up to industry standards.",
      mobileBulletPoints: [
        "Blazingly fast Gatsby site",
        "Blog programatically handled with GraphQL",
        "Light/Dark mode",
        "Netlify CMS backend",
        "Effective SEO",
      ],
      teckStack: ["React", "Gatsby", "Sass", "NetlifyCMS", "GraphQL"],
      github: "https://github.com/rowanlg/bald-flavours",
      urlToSite: "https://baldflavours.com/",
      images: ["3-bf-a.jpg", "3-bf-b.jpg", "3-bf-c.jpg", "3-bf-d.jpg"],
    },
    {
      name: "Allowlist App",
      type: "NFT whitelist app",
      desktopInfo:
        "I noticed that there were limited ways for NFT projects to collect users addresses, and confirm their identity through twitter. The only solutions for this cost a lot to use, so I decided to create my own. At the moment it is a closed backend for myself, however I will develop the project to allow NFT creators to log in and create their own allowlist forms through a dedicated portal. The current features are - Connect metamask wallet and store address, log in through twitter and store username, then save these to a database. I would also like to implement a gate where the user must follow a certain twitter account or like a certain tweet to continue.",
      mobileBulletPoints: [
        "Progressive Web App",
        "Metamask wallet connect function",
        "Twitter API log in function",
        "Stores Twitter account with ethereum address in database",
        "To be turned into a service, where NFT collectors can create their own allow list",
      ],
      teckStack: [
        "React",
        "Hardhat",
        "Ethers.js",
        "Sass",
        "Firebase",
        "Netlify",
      ],
      github: "https://github.com/rowanlg/allowlist-v1",
      urlToSite: "https://allowlist.netlify.app/",
      images: ["4-allowlist-a.jpg", "4-allowlist-b.jpg", "4-allowlist-c.jpg"],
    },
  ]

  const projects = workData.map((item, index) => {
    const bulletPoints = item.mobileBulletPoints.map((bullet, index) => {
      return <li key={index}>{bullet}</li>
    })

    const images = data.allFile.edges
      .filter(value => value.node.base.startsWith(index))
      .map(image => {
        return (
          <GatsbyImage
            key={image.node.base}
            image={image.node.childImageSharp.gatsbyImageData}
            alt={`${item.name} ${index}`}
          />
        )
      })

    return (
      <WorkContainer ref={allinView} id={`work-${index + 1}`} key={index}>
        <PageIndicators
          style={{ opacity: isAllVisible ? "1" : "0", height: innerheight }}
        >
          <div
            className={isVisible1 ? "focussed dot" : "dot"}
            style={isVisible1 ? { opacity: "1" } : { opacity: "0.5" }}
            onClick={() => {
              if (!isVisible1) {
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
          <div
            className={isVisible4 ? "focussed dot" : "dot"}
            style={isVisible4 ? { opacity: "1" } : { opacity: "0.5" }}
            onClick={() => {
              if (!isVisible4) {
                scrollTo("#work-4")
              }
            }}
          />
          <div
            className={isVisible5 ? "focussed dot" : "dot"}
            style={isVisible5 ? { opacity: "1" } : { opacity: "0.5" }}
            onClick={() => {
              if (!isVisible5) {
                scrollTo("#work-5")
              }
            }}
          />
        </PageIndicators>
        <Work
          ref={eval(`ref${index + 1}`)}
          style={{
            opacity: eval(`isVisible${index + 1}`) ? "1" : "0",
            minHeight: innerheight,
          }}
          className={
            index < 3 ? `background-${index + 1}` : `background-${index - 2}`
          }
          id="work-section"
        >
          <div className="work-section">
            <div className="image image-left">
              <Slider {...settings}>{images}</Slider>
            </div>
            <div className="text-area text-area-right">
              <div className="title-area title-right">
                <div className="svg-container">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FontAwesomeIcon
                      icon={faGithubSquare}
                      className="link-svg svg-right"
                    />
                  </a>
                  <a
                    href={item.urlToSite}
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
                <h3>{item.name}</h3>
                <p className="extra-info">{item.type}</p>
              </div>

              <div className="text-box text-box-right mobile-hide">
                <div className="border-yellow">
                  <p>{item.desktopInfo}</p>
                </div>
              </div>

              <div className="text-stack text-stack-right mobile-hide">
                {item.teckStack.join(" ")}
              </div>
            </div>
            <ul className="mobile-list">{bulletPoints}</ul>
            <div className="text-stack text-stack-left mobile-show">
              {item.teckStack.join(" ")}
            </div>
          </div>
        </Work>
      </WorkContainer>
    )
  })

  return <>{projects}</>
}

export default WorkSection
