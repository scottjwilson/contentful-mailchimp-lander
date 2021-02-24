import React, { useState } from "react"
import { navigate } from "gatsby"
import { Wrapper, StyledContainer, Sub } from "./Styles"
import { Row, Col } from "react-grid-system"

import addToMailchimp from "gatsby-plugin-mailchimp"

export const Optin = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [disabled, setDisabled] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    setDisabled(true)
    setMessage("Sending...")
    let listFields = { name }
    const response = await addToMailchimp(email, listFields)
    if (response.result === "error") {
      if (response.msg.toLowerCase().includes("already subscribed")) {
        setMessage("You're already on to the list!")
      } else {
        setMessage(response.msg)
      }
      setDisabled(false)
    } else {
      setMessage(
        "Thanks! Please check your e-mail and click the confirmation link."
      )
      navigate("/thankyou/")
    }
  }
  return (
    <Wrapper>
      <StyledContainer>
        <form onSubmit={handleSubmit}>
          <Row gutterWidth={4}>
            <Col md={6}>
              <input
                type="text"
                onChange={event => setName(event.target.value)}
                placeholder="Your Name"
                name="first name"
              />
            </Col>
            <Col md={6}>
              <input
                type="email"
                onChange={event => setEmail(event.target.value)}
                placeholder="Your Email"
                name="email"
              />
            </Col>
            <Col md={12}>
              <Sub disabled={disabled} type="submit">
                Sign Up
              </Sub>
            </Col>

            <small>{message}</small>
          </Row>
        </form>
      </StyledContainer>
    </Wrapper>
  )
}
