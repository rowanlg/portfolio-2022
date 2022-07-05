import styled from "styled-components"
import { colours } from "../utils/colours"

export const WorkContainer = styled.section`
  transition: all 1s linear;
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
    padding-top: 5rem;
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
      padding-top: 1.5rem;
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
      align-items: flex-start;
      width: 95%;
      @media screen and (min-width: 1040px) {
        grid-area: 1 / 1 / 5 / 4;
        align-items: flex-start;
      }
    }
    .text-area-right {
      /* grid-area: 1 / 1 / 5 / 7; */
      align-items: flex-start;
      width: 95%;
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
        align-items: flex-start;
        width: 100%;
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
        align-items: flex-start;
        width: 100%;
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
          align-items: flex-end;
          flex-direction: row;
          justify-content: flex-end;
          width: 100%;
          margin-bottom: -3.2rem;
          @media screen and (min-width: 1040px) {
            justify-content: flex-start;
            width: auto;
            margin-bottom: auto;
          }
        }

        .link-svg {
          font-size: 1.2rem;
          @media screen and (min-width: 500px) {
            font-size: 1.6rem;
          }
        }
        .svg-right {
          margin: 0 0.4rem 0.4rem 0;
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
          opacity: 1;
          font-size: 1.6rem;
          color: ${colours.light};
        }

        .featured {
          color: ${colours.yellow};
          font-family: "Fira Code", monospace;
          font-weight: 600;
          font-size: 0.6rem;
          @media screen and (min-width: 500px) {
            font-size: 0.8rem;
            margin-bottom: 0.4rem;
          }
        }
      }
    }
    .mobile-show {
      display: flex;
      @media screen and (min-width: 1040px) {
        display: none;
      }
    }
    .mobile-hide {
      @media screen and (max-width: 1040px) {
        display: none;
      }
    }
    .mobile-list {
      z-index: 2;
      font-size: 0.6rem;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      font-weight: 200;
      border-radius: 5px;
      max-width: 500px;
      order: 5;
      width: 100%;
      margin-right: -5vw;
      li {
        font-family: "Fira Code", monospace;
        font-weight: 200;
      }
      @media screen and (min-width: 500px) {
        font-size: 0.8rem;
      }
      @media screen and (min-width: 1040px) {
        display: none;
      }
    }
    .text-box {
      z-index: 2;
      font-size: 0.7rem;
      justify-content: center;
      align-items: center;
      font-weight: 200;
      border-radius: 5px;
      max-width: 500px;
      display: none;
      @media screen and (max-width: 500px) {
        display: none;
      }
      @media screen and (min-width: 500px) {
        font-size: 0.9rem;
      }
      @media screen and (min-width: 1040px) {
        max-width: auto;
        display: flex;
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
      order: 4;
      color: #b1b1b1;
      justify-content: flex-start;
      align-items: flex-start;
      width: 95%;
      @media screen and (min-width: 500px) {
        font-size: 0.8rem;
      }
    }
    .text-stack-right {
      text-align: left;
      @media screen and (min-width: 1040px) {
        text-align: right;
        margin-right: 1rem;
      }
    }
    .text-stack-left {
      text-align: left;
      @media screen and (min-width: 1040px) {
        text-align: left;
        margin-left: 1rem;
      }
    }
  }
`

export const Work = styled.div`
  transition: opacity 1s ease-in;
  transition-delay: 300ms;
  /* height: 100vh; */
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PageIndicators = styled.div`
  transition: all 1s ease-in;
  position: fixed;
  right: 0;
  top: 0;
  width: 50px;
  /* height: 100vh; */
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
