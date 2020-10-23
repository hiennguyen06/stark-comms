import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderStyles = styled.div`
  color: var(--red);
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 0 8rem 0;

  h1 {
    font-size: 7.2rem;
    font-weight: 900;
    margin-bottom: 4rem;
    @media (max-width: 600px) {
      font-size: 6.4rem;
    }
    @media (max-width: 450px) {
      font-size: 4.8rem;
    }
  }
  p {
    font-size: 1.8rem;
    margin-bottom: 6rem;
    @media (max-width: 450px) {
      font-size: 1.6rem;
    }
  }
`

const Header = ({ header }) => {
  return (
    <div className="container">
      <div className="inner-container">
        <HeaderStyles>
          <h1>{header.title}</h1>
          <p>{header.description}</p>
          <Link to="/contact/">
            <button className="btn">{header.button.title}</button>
          </Link>
        </HeaderStyles>
      </div>
    </div>
  )
}

export default Header
