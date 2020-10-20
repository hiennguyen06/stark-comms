import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const data = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "About",
    url: "/about/",
  },
  {
    id: 3,
    text: "Services",
    url: "/services/",
  },
  {
    id: 4,
    text: "Contact",
    url: "/contact/",
  },
]

const NavLinksStyles = styled.div`
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
    /* &[aria-current="page"] {
      text-decoration: underline;
    } */
  }
`

const NavLinks = ({ styleClass }) => {
  return (
    <NavLinksStyles className={`nav-links ${styleClass ? styleClass : ""}`}>
      {data.map(link => {
        return (
          <li key={link.id}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        )
      })}
    </NavLinksStyles>
  )
}

export default NavLinks
