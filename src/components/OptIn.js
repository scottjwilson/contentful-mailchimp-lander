import React, { useState } from "react"
import { navigate } from "gatsby"
import { Container, Row, Col } from "react-grid-system"
import styled from "styled-components"
import addToMailchimp from "gatsby-plugin-mailchimp"

const Optin = () => {
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

const Wrapper = styled.div`
  background-color: var(--theme-bg-color);
  margin: 2rem 0;
  color: #ffffff;
  padding: 1.5rem 0;
  border-radius: 14px;
`

const StyledContainer = styled(Container)`
  // margin-top: 2rem;
  // text-align: center;

  form {
    margin: 0;
  }
  input {
    color: white;
    margin: 0.5rem 0;
    border-radius: 4px;
    padding: 0.5rem;
    width: 100%;
    background: transparent;
    border: 2px solid var(--border-color);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
`

const Sub = styled.button`
  text-align: center;
  width: 100%;
  margin: 0.5rem 0;
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;
  color: rgb(255, 255, 255);
  background-color: rgba(216, 0, 35, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 4px solid rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: rgba(216, 0, 35, 0.9);
  }
`

export default Optin
