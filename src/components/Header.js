import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderStyles = styled.div`
  color: var(--red);
  height: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 7.2rem;
    font-weight: 900;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.8rem;
    margin-bottom: 6rem;
  }
  .btn-header {
    font-weight: 500;
    color: var(--red);
    padding: 1.2rem 2.4rem;
    border: 1px solid var(--red);
    transition: all 0.25s;
    &:hover {
      color: var(--white);
      background: var(--red);
    }
  }
`

const Header = ({ headerInfo }) => {
  return (
    <div className="container">
      <div className="inner-container">
        <HeaderStyles>
          <h1>{headerInfo.header.title}</h1>
          <p>{headerInfo.header.description}</p>
          <Link>
            <button className="btn btn-header">
              {headerInfo.header.button.title}
            </button>
          </Link>
        </HeaderStyles>
      </div>
    </div>
  )
}

export default Header
