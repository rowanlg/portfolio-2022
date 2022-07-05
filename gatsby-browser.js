import React from "react"
import Div100vh from "react-div-100vh"

export const wrapPageElement = ({ element }) => {
  return <Div100vh>{element}</Div100vh>
}
