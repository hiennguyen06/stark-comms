import React from "react"
import NavLinks from "../constants/NavLinks"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const NavStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  color: var(--red);
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

const Nav = () => {
  const {
    file: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(query)
  return (
    <div className="container">
      <div className="inner-container">
        <NavStyles>
          <Link to="/">
            <Img fixed={fixed} className="logo" />
          </Link>
          <NavLinks />
        </NavStyles>
      </div>
    </div>
  )
}

export default Nav
