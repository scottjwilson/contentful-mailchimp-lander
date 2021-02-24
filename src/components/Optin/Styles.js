import styled from "styled-components"
import { Container } from "react-grid-system"

export const Wrapper = styled.div`
  background-color: var(--theme-bg-color);
  margin: 2rem 0;
  color: #ffffff;
  padding: 1.5rem 0;
  border-radius: 14px;
`

export const StyledContainer = styled(Container)`
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

export const Sub = styled.button`
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
