import styled from "styled-components"

export const Wrapper = styled.div`
  background-color: var(--theme-bg-color);
  margin-top: 1rem;
  padding: 2rem 2rem 0 2rem;

  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  .link {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: all 0.2s;
    padding: 1rem;
    border-radius: 14px;
    border-bottom: 1px solid transparent;

    &:hover {
      color: rgba(255, 255, 255, 1);
      background-color: var(--hover-menu-bg);
      border-bottom: 1px solid white;
    }
  }
`
