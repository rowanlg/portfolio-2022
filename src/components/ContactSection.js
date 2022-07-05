import React from "react"
import styled from "styled-components"
import { colours } from "../utils/colours"
import "../svg-background.css"

const ContactContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media screen and (min-width: 500px) {
    padding-top: 100px;

    align-items: center;
  }
  @media screen and (min-width: 1000px) {
    align-items: center;
    flex-direction: row;
    padding: 100px;
  }

  .contact-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: auto;
    /* border: 2px solid rgba(232, 95, 92, 0.6); */
    border-radius: 5px;
    background-color: rgb(22, 12, 23, 1);
    width: auto;
    padding: 6rem 0 4rem;
    @media screen and (min-width: 500px) {
      width: 500px;
      height: 300px;
      margin-bottom: 1rem;
    }
    @media screen and (min-width: 1000px) {
      width: 500px;
      height: 515px;
      margin-bottom: 0;
    }
    h2 {
      font-size: 1.2rem;
      margin-bottom: 0.2rem;
      margin-top: 1rem;
    }
    p {
      font-size: 0.8rem;
      max-width: 350px;
    }
  }

  .flex-container {
    @media screen and (min-width: 1000px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      div {
        margin: 1rem;
      }
    }
  }
`

const ContactFormContainer = styled.div`
  background-color: ${colours.light};
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  position: relative;
  @media screen and (min-width: 500px) {
    border-radius: 5px;
    margin: 0 auto 50px auto;
    width: 500px;
  }
  @media screen and (min-width: 1000px) {
    margin: auto;
  }
  form {
    color: ${colours.dark};
    margin: 2rem 0;
    @media screen and (min-width: 500px) {
      margin: 3rem 0;
      .container {
        margin: auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        div:nth-child(1) {
          grid-area: 1 / 1 / 5 / 3;
        }
        div:nth-child(2) {
          grid-area: 1 / 3 / 5 / 5;
        }
        p:nth-child(3) {
          grid-area: 5 / 2 / 6 / 4;
        }
        .center {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      }
    }
    h4 {
      margin-left: 6px;
      margin-bottom: 1rem;
      text-align: center;
    }
    p {
      font-size: 0.8rem;
      margin: 0.4rem;
      textarea {
        height: 105px;
        resize: vertical;
        min-height: 35px;
        @media screen and (min-width: 500px) {
          min-height: 188px;
          resize: none;
        }
      }
      input {
        height: 35px;
      }
      .input {
        margin: 0.4rem 0;
        width: 200px;
        border-radius: 5px;
        padding: 10px;
      }
      .input:focus {
        border-color: ${colours.red};
        outline-color: ${colours.red};
      }
      .border {
        border: 2px solid rgb(232, 95, 92, 0.25);
      }
      .filled {
        background-color: #f6d3d3;
        /* border: 2px solid rgb(232, 95, 92, 0.25); */
        border: none;
      }
      .submit {
        border-radius: 5px;
        border: none;
        color: ${colours.light};
        background-color: ${colours.dark};
        padding: 0 1rem;
        height: 35px;
        margin-left: 1rem;
        @media screen and (min-width: 500px) {
          margin-left: 0;
        }
      }
    }
  }
`

const ContactSection = ({ innerheight }) => {
  return (
    <ContactContainer
      className="background-contact"
      style={{ minHeight: innerheight }}
      id="contact-section"
    >
      <div className="flex-container">
        <div className="contact-header background-1">
          <h2>Let's Chat!</h2>
          <p>Send a message here, and I’ll get back in touch asap :)</p>
        </div>
        <ContactFormContainer className="background-2" id="about">
          <form name="contact" method="POST" data-netlify="true">
            <h4>Contact Form</h4>
            <input type="hidden" name="form-name" value="contact" />
            <div className="container">
              <div>
                <p>
                  <label htmlFor="name">Your Name</label> <br />
                  <input
                    className="border input"
                    type="text"
                    id="name"
                    name="name"
                    placeholder=""
                    required
                  />
                </p>
                <p>
                  <label htmlFor="email">Email</label> <br />
                  <input
                    className="border input"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </p>
                <p>
                  <label htmlFor="number">Number</label> <br />
                  <input
                    className="filled input"
                    type="number"
                    id="number"
                    name="number"
                  />
                </p>
              </div>
              <div>
                <p>
                  <label htmlFor="message">Message</label> <br />
                  <textarea
                    className="filled input"
                    id="message"
                    name="message"
                    required
                  ></textarea>
                </p>
              </div>
              <p className="center">
                <button className="submit" type="submit">
                  Send message
                </button>
              </p>
            </div>
          </form>
        </ContactFormContainer>
      </div>
    </ContactContainer>
  )
}

export default ContactSection
