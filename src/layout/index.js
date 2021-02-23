import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from "../styles/GlobalStyle"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
