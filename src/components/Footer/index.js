import React from "react"
import { Wrapper } from "./Styles"

export const Footer = () => {
  return (
    <Wrapper>
      <div>Copyright {new Date().getFullYear()}</div>
      <ul>
        <li>Privacy</li>
        <li>Terms of Service</li>
        <li>About</li>
      </ul>
    </Wrapper>
  )
}
