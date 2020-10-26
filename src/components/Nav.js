import React from "react"
import NavLinks from "../constants/NavLinks"
import { FaAlignRight } from "react-icons/fa"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const NavStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  color: var(--red);
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btn-menu {
    display: none;
    color: var(--red);
    font-size: 2.4rem;
    background: transparent;
    border: none;
    outline: 0;
    cursor: pointer;
    @media (max-width: 900px) {
      display: block;
    }
  }
  .nav-links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    li {
      margin-left: 4rem;
    }
    a {
      font-size: 1.8rem;
      &:hover {
        color: var(--red);
      }
    }
    @media (max-width: 900px) {
      display: none;
    }
  }
`

const query = graphql`
  {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Nav = ({ handleSidebarToggle }) => {
  const {
    file: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(query)
  return (
    <div className="container">
      <div className="inner-container">
        <NavStyles>
          <div>
            <Link to="/">
              <Img fixed={fixed} className="logo" />
            </Link>
            <button
              type="button"
              className="btn-menu"
              onClick={handleSidebarToggle}
            >
              <FaAlignRight></FaAlignRight>
            </button>
          </div>
          <NavLinks />
        </NavStyles>
      </div>
    </div>
  )
}

export default Nav
